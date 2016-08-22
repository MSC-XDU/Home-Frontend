<template>
  <div class="verify-phone">
    <div class="input-field">
      <h2 class="input-header">输入短信验证码</h2>
      <div class="input-filed">
        <input @input="codeInput" @paste="codePaste" @keydown="codeKeyDown" class="char-filed" maxlength="1"
               data-index="0">
        <input @input="codeInput" @paste="codePaste" @keydown="codeKeyDown" class="char-filed" maxlength="1"
               data-index="1">
        <input @input="codeInput" @paste="codePaste" @keydown="codeKeyDown" class="char-filed" maxlength="1"
               data-index="2">
        <input @input="codeInput" @paste="codePaste" @keydown="codeKeyDown" class="char-filed" maxlength="1"
               data-index="3">
        <input @input="codeInput" @paste="codePaste" @keydown="codeKeyDown" class="char-filed" maxlength="1"
               data-index="4">
        <input @input="codeInput" @paste="codePaste" @keydown="codeKeyDown" class="char-filed" maxlength="1"
               data-index="5">
      </div>
      <p v-show="remain > 0 && count <= 2">{{remain}} 秒后重新请求验证码</p>
      <button v-show="count >= 1 && remain <= 0" class="pure-button" style="margin-top: 15px" @click="skip">收不到验证码?点这里跳过</button>
      <button v-show="remain <= 0 && count <= 2" class="pure-button" style="margin-top: 15px" @click="requestCode">{{codeTip}}</button>
      <div class="code-tips">
        <h4 class="code-tip">{{tip}}</h4>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .verify-phone {
    margin-top: 48px;
    width: 100%;
    text-align: center;
  }

  .char-filed {
    width: 35px;
    height: 35px;
    border: 1px solid #d7d7d7;
    border-radius: 6px;
    outline: none;
    margin: 10px 1px 0 1px;
    text-align: center;
    font-size: 17px;
  }

  .input-field {
    margin-top: 10px;
  }

  .input-header {
    color: #000;
  }

  .input-field .code-tips .code-tip {
    text-align: center;
  }
</style>
<script>
  export default {
    data () {
      return {
        codeInputs: [],
        tip: '',
        remain: 60,
        codeTip: '获取验证码',
        count: 0
      }
    },
    props: {
      phone: String
    },
    ready: function () {
      var codeInputs = document.querySelectorAll('.char-filed')
      this.codeInputs = Array.prototype.slice.call(codeInputs)
      this.startCountDown()
    },
    components: {},
    methods: {
      skip: function () {
        this.$dispatch('next', {
          next: 'sign-up-info',
          color: 'red'
        })
      },
      codeInput: function (e) {
        var index = parseInt(e.target.dataset.index)
        var inputValue = e.target.value

        if (inputValue === '') {
          e.preventDefault()
          return
        }

        if (index < 5) {
          this.codeInputs[index].blur()
          this.codeInputs[index + 1].focus()
        }

        if (this.isCompleted()) this.submitCode()
      },
      codePaste: function (e) {
        var str = e.clipboardData.getData('text/plain')

        var index = parseInt(e.target.dataset.index)
        var charSet = str.substr(0, 6 - index).split('')
        var len = charSet.length
        var self = this
        for (var i = 0; i < len; ++i) {
          (function (i) {
            self.codeInputs[index + i].value = charSet[i]
          })(i)
        }

        var lastIndex = index + len - 1

        this.codeInputs[index].blur()
        this.codeInputs[lastIndex].focus()
      },
      codeKeyDown: function (e) {
        var index = parseInt(e.target.dataset.index)
        if ((e.which === 8 || e.which === 46) && index > 0) {
          this.codeInputs[index].value = ''
          this.codeInputs[index].blur()
          this.codeInputs[index - 1].focus()
          e.preventDefault()
        }
      },
      submitCode: function () {
        var code = ''
        var self = this
        self.$dispatch('loading')
        this.codeInputs.forEach(function (codeInput) {
          code += codeInput.value
        })
        this.$http
          .post('https://mscinxdu.leanapp.cn/join/verify-phone', {code: code})
          .then(function (resp) {
            if (resp.status >= 200 && resp.status < 300) {
              var result = resp.json()
              if (result['success?']) {
                self.$dispatch('next', {
                  next: 'sign-up-info',
                  color: 'red'
                })
              } else {
                self.$dispatch('done')
                self.tip = result['error']
              }
            } else if (resp.status === 401) {
              self.$router.go('/')
            } else {
              self.tip = '网络错误,请稍候再试一次'
              self.$dispatch('done')
            }
          }, function () {
            self.tip = '网络错误,请稍候再试一次'
            self.$dispatch('done')
          })
      },
      isCompleted: function () {
        var result = true
        this.codeInputs.forEach(function (codeInput) {
          if (!/\d/.test(codeInput.value)) result = false
        })
        return result
      },
      startCountDown: function () {
        var self = this
        self.remain = 60
        if (this.count > 2) return
        this.count += 1
        var count = setInterval(function () {
          if (self.remain > 0) {
            self.remain -= 1
          } else {
            clearInterval(count)
          }
        }, 1000)
      },
      requestCode: function () {
        var self = this
        self.codeTip = '请求中...'
        self.$http
          .post('https://mscinxdu.leanapp.cn/join/request-verify', {phone: self.phone})
          .then(function (resp) {
            if (resp.status >= 200 && resp.status < 300) {
              var result = resp.json()
              if (result['success?']) {
                self.codeTip = '获取验证码'
                self.startCountDown()
              } else {
                self.codeTip = result['error']
              }
            } else {
              self.codeTip = '出错了,请重试'
            }
          }, function () {
            self.codeTip = '出错了,请重试'
          })
      }
    },
    events: {
      'next-step': function () {
        if (this.isCompleted()) {
          this.submitCode()
        }
      }
    }
  }
</script>
