<template>
  <div class="email-form">
    <form class="pure-form pure-form-stacked">
      <fieldset>
        <legend>
          <h2>{{tip}}</h2>
        </legend>
        <input id="email" v-model="email" type="email" placeholder="Email">
      </fieldset>

      <div class="animated password"
           transition="zoom"
           v-show="showPassword">
        <fieldset v-show="showLogIn">
          <input v-model="logInPassword" type="password" placeholder="密码">
        </fieldset>
        <fieldset v-show="showSignUp">
          <input v-model="signUpPassword" type="password" placeholder="密码">
          <input v-model="signUpPassword1" type="password" placeholder="确认密码">
        </fieldset>
      </div>
    </form>
  </div>
</template>
<style scoped>
  .email-form {
    margin-top: 30px;
    width: 100%;
  }

  input {
    width: 100%;
    height: 3em;
  }

  .password, fieldset {
    width: 100%;
  }
</style>
<script>
  export default {
    data () {
      return {
        tip: '输入你的邮箱,看看我们认不认识你',
        showPassword: false,
        showLogIn: false,
        showSignUp: false,
        logInPassword: '',
        signUpPassword: '',
        signUpPassword1: '',
        email: ''
      }
    },
    components: {},
    methods: {
      signUp: function () {
        this.showPassword = true
        this.showSignUp = true
        this.showLogIn = false
        this.tip = '欢迎萌新~给你的帐号设置个密码吧~'
      },
      logIn: function () {
        this.showPassword = true
        this.showLogIn = true
        this.showSignUp = false
        this.tip = '我知道你,输入密码'
      },
      reset: function () {
        if (this.showPassword) {
          this.showPassword = false
          this.showLogIn = false
          this.showSignUp = false
          this.logInPassword = ''
          this.signUpPassword = ''
          this.signUpPassword1 = ''
          this.tip = '输入你的邮箱,看看我们认不认识你'
        }
      },
      errorHandler: function (self) {
        return function (e) {
          console.log('fuck')
          self.tip = 'Sorry,网络错误,再试试好不好?'
          self.$dispatch('done')
        }
      },
      nextHandler: function (self, next) {
        return function (resp) {
          if (resp.status >= 200 && resp.status < 300) {
            var result = resp.json()
            if (result['success?']) {
              self.$dispatch('next', next)
            } else {
              self.tip = result['error']
              self.$dispatch('done')
            }
          } else {
            self.tip = 'Sorry,网络错误,再试试好不好?'
            self.$dispatch('done')
          }
        }
      },
      checkEmail: function (str) {
        /* eslint-disable */
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|moe|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(str)
        /* eslint-disable */
      },
      checkUser: function () {
        if (!this.checkEmail(this.email)) {
          this.tip = '邮箱格式不对吧?'
          return
        }
        if (this.email.length > 0) {
          var self = this
          self.$dispatch('loading')
          this
            .$http.post('https://mscinxdu.leanapp.cn/join/user-exist', {email: self.email})
            .then(function (resp) {
              if (resp.status >= 200 && resp.status < 300) {
                var result = resp.json()
                if (result['success?']) {
                  if (result['exist?']) {
                    self.logIn()
                  } else {
                    self.signUp()
                  }
                } else {
                  self.tip = 'Sorry,网络错误,再试试好不好?'
                }
              } else {
                self.tip = 'Sorry,网络错误,再试试好不好?'
              }
              self.$dispatch('done')
            }, this.errorHandler(self))
        }
      },
      doSignUp: function () {
        var email = document.getElementById('email')

        if (email.value.length > 0 &&
          this.signUpPassword.length > 0 &&
          this.signUpPassword1.length > 0) {
          if (this.signUpPassword !== this.signUpPassword1) {
            this.tip = '两次密码不相同,请确认'
            return
          }
          var self = this
          self.$dispatch('loading')
          this
            .$http.post('https://mscinxdu.leanapp.cn/join/sign-up', {username: self.email, password: self.signUpPassword})
            .then(this.nextHandler(self, {next: 'base-info', color: 'yellow'}), this.errorHandler(self))
        }
      },
      doLogIn: function () {
        if (this.logInPassword.length > 0 && this.email.length > 0) {
          var self = this
          self.$dispatch('loading')
          this
            .$http.post('https://mscinxdu.leanapp.cn/join/login', {email: self.email, password: self.logInPassword})
            .then(this.nextHandler(self, {next: 'base-info', color: 'yellow', logedIn: true}), this.errorHandler(self))
        }
      }
    },
    events: {
      'next-step': function () {
        if (!this.showPassword) {
          this.checkUser()
        } else if (this.showLogIn) {
          this.doLogIn()
        } else if (this.showSignUp) {
          this.doSignUp()
        }
      }
    },
    watch: {
      email: function () {
        if (this.showPassword) {
          this.reset()
        }
      }
    }
  }
</script>
