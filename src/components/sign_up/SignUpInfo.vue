<template>
  <div class="sign-up-info">
    <div v-if="loading" class="mask column-center">
      <i v-show="!error" class="fa fa-circle-o-notch fa-2x fa-spin" aria-hidden="true"></i>
      <button class="pure-button" v-show="error"></button>
    </div>
    <form v-form name="signUpInfo" class="pure-form pure-form-stacked" novalidate>
      <fieldset>
        <legend>
          <h2>{{tip}}</h2>
        </legend>
        <label for="department">意向部门</label>
        <select v-form-ctrl required name="department" v-model="model.department" id="department">
          <option>联络部</option>
          <option>活动部</option>
          <option>技术部-Web组</option>
          <option>技术部-APP组</option>
          <option>技术部-Game组</option>
          <option>技术部-ACM组</option>
          <option>技术部-实用工具组</option>
          <option>传媒部-平面设计组</option>
          <option>传媒部-影像视讯组</option>
        </select>
        <label for="skills">特长爱好</label>
        <textarea id="skills" v-form-ctrl required name="skills" v-model="model.skills"></textarea>
        <label for="character">简述自己的性格({{remain}})</label>
        <input id="character" v-form-ctrl required name="character" v-model="model.character">
        <label for="skills">个人简介和工作设想</label>
        <textarea id="skills" v-form-ctrl required name="intro" v-model="model.intro"></textarea>
        <label for="achievement">曾获何种奖项</label>
        <textarea id="achievement" v-form-ctrl required name="achievement" v-model="model.achievement"></textarea>
        <label for="opinion">对俱乐部和所报部门有何看法</label>
        <textarea id="opinion" v-form-ctrl required name="opinion" v-model="model.opinion"></textarea>
      </fieldset>
      <fieldset>
        <div class="files-area">
          <ul>
            <file v-for="file in files" :file="file"></file>
          </ul>
        </div>
        <label>如果你有作品展示欢迎上传</label>
        <label for="file"><i class="fa fa-2x fa-cloud-upload" aria-hidden="true"></i></label>
        <input @change="fileInput" type="file" style="display: none !important;" id="file">
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

  .files-area {
    height: 100px;
    padding: .5em .6em;
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    vertical-align: middle;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 90%;
    overflow-y: scroll;
  }

  .files-area > ul {
    margin: 0;
    padding: 0;
  }

  .sign-up-info {
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

  textarea {
    resize: none;
    width: 90%;
    height: 100px;
    margin-right: auto;
    margin-left: auto;
  }

  label {
    color: #777;
  }

  select {
    margin-right: auto;
    margin-left: auto;
  }

  input {
    width: 90%;
    height: 2em;
    display: inline-block !important;
  }
</style>
<script>
  import File from './File.vue'

  export default {
    created: function () {
      if (!this.logedIn) return
      this.getInfo()
    },
    props: ['logedIn'],
    data () {
      return {
        signUpInfo: null,
        model: {
          department: '',
          skills: '',
          achievement: '',
          intro: '',
          character: '',
          opinion: ''
        },
        tip: '这些信息可是报名必不可少的',
        files: [],
        loading: false,
        error: false
      }
    },
    components: {
      'file': File
    },
    computed: {
      remain: function () {
        if (!this.model.character) return '剩 15 字'
        var remain = 15 - this.model.character.length
        if (remain >= 0) {
          return `剩 ${remain} 字`
        } else {
          return `多 ${-remain} 字`
        }
      }
    },
    events: {
      'next-step': function () {
        if (this.signUpInfo.$invalid || this.model.character.length > 15) {
          this.tip = '你填的数据似乎是有些问题的哦,在检查一下'
        } else {
          var self = this
          self.$dispatch('loading')
          self
            .$http.post('http://localhost:8081/join/set-sign-up-info', self.model)
            .then(function (resp) {
              if (resp.status >= 200 && resp.status < 300) {
                var result = resp.json()
                if (result['success?']) {
                  self.$dispatch('next', {
                    next: 'done',
                    department: self.model.department,
                    icon: 'ok',
                    color: 'green'
                  })
                } else {
                  (self.errorHandler(self))()
                }
              } else if (resp.status === 401) {
                self.$router.go('/')
              } else {
                (self.errorHandler(self))()
              }
            }, self.errorHandler(self))
        }
      },
      'delete-file': function (file) {
        this.files.$remove(file)
      }
    },
    methods: {
      errorHandler: function (self) {
        return function () {
          self.tip = '网络错误,稍后再试试'
          self.$dispatch('done')
        }
      },
      fileInput: function (e) {
        var input = e.target
        if (input.files.length < 1) return
        var form = new FormData()
        form.set('file', input.files[0])
        var xhrWrap = {xhr: null}
        var req = this.$http.post('http://localhost:8081/join/file', form, {
          before (req) {
            xhrWrap.xhr = req
          }
        })
        this.files.push({promise: req, loading: true, xhr: xhrWrap.xhr})
      },
      getInfo: function () {
        var self = this
        self.error = false
        self.loading = true
        this.$http.get('http://localhost:8081/join/sign-up-info')
          .then(function (resp) {
            if (resp.status >= 200 && resp.status < 300) {
              var result = resp.json()
              if (result['success?']) {
                delete result['success?']
                self.files = result.files
                delete result.files
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
