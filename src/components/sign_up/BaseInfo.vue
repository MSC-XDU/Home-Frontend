<template>
  <div class="base-info">
    <div v-if="loading" class="mask column-center">
      <i v-show="!error" class="fa fa-circle-o-notch fa-2x fa-spin" aria-hidden="true"></i>
      <button class="pure-button" v-show="error"></button>
    </div>
    <form v-form name="baseInfo" class="pure-form">
      <fieldset>
        <legend class="title"><h2>{{tip}}</h2></legend>
        <label style="display: block" for="phone">手机号码</label>
        <input v-model="model.phone" placeholder="手机号码" v-form-ctrl required name="phone" pattern="^\d{11}$" id="phone"
               type="tel" :disabled="!canSetPhone">
        <p class="tip">这是我们联系你的方法,请务必保证正确性,且稍后会进行短信验证</p>
      </fieldset>
      <fieldset>
        <div class="info-form pure-g">
          <div class="pure-u-1-2 pure-u-sm-1-3">
            <label for="name">姓名</label>
            <input v-model="model.name" v-form-ctrl required name=name id="name" type="text" placeholder="姓名">
          </div>
          <div class="pure-u-1-4 pure-u-sm-1-6">
            <label for="sex">性别</label>
            <input v-model="model.sex" id="sex" v-form-ctrl required name="sex" type="text" placeholder="性别">
          </div>
          <div class="pure-u-1-4 pure-u-sm-1-4">
            <label for="national">民族</label>
            <input v-model="model.national" id="national" v-form-ctrl required name="national" type="text"
                   placeholder="民族">
          </div>
          <div class="pure-u-1-3 pure-u-sm-1-4">
            <label for="home">家乡</label>
            <input v-model="model.home" id="home" v-form-ctrl required name="home" type="text" placeholder="家乡">
          </div>
          <div class="pure-u-2-3 pure-u-sm-1-2">
            <label for="birthday">生日</label>
            <input v-model="model.birthday" v-form-ctrl required name="birthday" pattern="^\d{4}-\d{2}-\d{2}$"
                   id="birthday" type="date" placeholder="1970-01-01">
          </div>
          <div class="pure-u-1-1 pure-u-sm-1-4">
            <label for="major">专业</label>
            <input v-model="model.major" id="major" v-form-ctrl required name="major" type="text" placeholder="专业">
          </div>
          <div class="pure-u-1-1 pure-u-sm-1-4">
            <label for="qq">QQ</label>
            <input v-model="model.qq" id="qq" v-form-ctrl required name="qq" type="text" placeholder="QQ">
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<style scoped>
  .mask {
    position: fixed;
    top: 48px;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(240, 240, 240, 0.6);
  }

  .base-info {
    margin-top: 28px;
    width: 100%;
    text-align: center;
  }

  .info-form > div {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 2px;
  }

  label {
    color: #777;
  }

  input {
    width: 100%;
    height: 2em;
  }

  #phone {
    text-align: center;
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .tip {
    font-size: 10px;
    color: #777777;
  }
</style>
<script>
  export default{
    created: function () {
      if (!this.logedIn) return
      this.getInfo()
    },
    props: ['logedIn'],
    data () {
      return {
        model: {
          name: '',
          sex: '',
          national: '',
          major: '',
          qq: '',
          birthday: '',
          home: ''
        },
        baseInfo: null,
        tip: '我们想更了解你一点',
        phoneVerified: false,
        loading: false,
        error: false
      }
    },
    computed: {
      canSetPhone: function () {
        return !(this.logedIn && this.phoneVerified)
      }
    },
    components: {},
    events: {
      'next-step': function () {
        if (this.baseInfo.$invalid) {
          this.tip = '每一个都是必填的哦,生日形如 1970-01-01 别忘记短横线'
        } else {
          this.$dispatch('loading')
          var self = this
          this
            .$http.post('http://localhost:8081/join/set-base-info', this.model)
            .then(function (resp) {
              if (resp.status >= 200 && resp.status < 300) {
                var result = resp.json()
                if (result['success?']) {
                  var next = {}
                  if (self.phoneVerified) {
                    next = {
                      next: 'sign-up-info',
                      color: 'red'
                    }
                  } else {
                    next = {
                      phone: self.model.phone,
                      next: 'verify-phone'
                    }
                  }
                  self.$dispatch('next', next)
                } else if (resp.status === 401) {
                  self.$router.go('/')
                } else {
                  self.errorHandler(self)
                }
              } else {
                self.errorHandler(self)
              }
            }, function (resp) {
              self.errorHandler(self)
            })
        }
      }
    },
    methods: {
      errorHandler: function (self) {
        self.tip = 'Sorry, 发生了一些错误,请稍候再试试'
        self.$dispatch('done')
      },
      getInfo: function () {
        var self = this
        self.loading = true
        self.error = false
        this.$http.get('http://localhost:8081/join/base-info')
          .then(function (resp) {
            if (resp.status >= 200 && resp.status < 300) {
              var result = resp.json()
              if (result['success?']) {
                delete result['success?']
                self.phoneVerified = result['mobilePhoneVerified']
                delete result['mobilePhoneVerified']
                result.phone = result['mobilePhoneNumber']
                delete result['mobilePhoneNumber']
                self.model = result
                self.loading = false
              } else {
                self.error = true
              }
            } else {
              self.error = true
            }
          }, function () {
            self.error = true
          })
      }
    }
  }
</script>
