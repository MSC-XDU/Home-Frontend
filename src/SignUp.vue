<template>
  <div class="sign-up pure-g">
    <div v-if="infoLoading" class="mask column-center">
      <i v-show="!infoError" class="fa fa-circle-o-notch fa-2x fa-spin" aria-hidden="true"></i>
      <button class="pure-button" v-show="infoError" @click="getInfo">出错了,点击重试</button>
    </div>
    <div class="pure-u-2-24 pure-u-md-1-5"></div>
    <div class="content pure-u-20-24 pure-u-md-3-5">
      <component
        class="animated"
        transition="slide"
        transition-mode="out-in"
        :is="currentStep"
        :department="department"
        :phone="phone"
        :loged-in="edit"
        :token="token"
        keepalive>
      </component>
      <button
        @click="nextStep"
        :class="buttonColor"
        class="pure-button pure-button-primary next column-center">
        <component
          :loading="loading"
          class="animated"
          transition="zoom"
          transition-mode="out-in"
          :is="buttonIcon">
        </component>
      </button>
    </div>
    <div class="pure-u-2-24 pure-u-md-1-5"></div>
  </div>
</template>
<style>
  .mask {
    position: fixed;
    top: 48px;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(240, 240, 240, 0.8);
    z-index: 9999;
  }

  .sign-up {
    width: 100%;
    margin: 48px auto 0 auto;
  }

  .sign-up .content {
    text-align: center;
  }

  .next {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    padding-left: 0;
    padding-right: 0;
    display: -webkit-inline-flex;
    display: inline-flex;
    margin-bottom: 40px;
  }

  .next i {
    color: #fff;
  }

  .blue {
    background: rgba(50, 96, 189, 1.0);
  }

  .yellow {
    animation: blue-to-yellow 300ms ease-in-out;
    -webkit-animation: blue-to-yellow 300ms ease-in-out;
    background: rgba(238, 154, 47, 1.0);
  }

  .red {
    animation: yellow-to-red 300ms ease-in-out;
    -webkit-animation: yellow-to-red 300ms ease-in-out;
    background: rgba(218, 26, 26, 1.0);
  }

  .green {
    animation: red-to-green 300ms ease-in-out;
    -webkit-animation: red-to-green 300ms ease-in-out;
    background: rgba(92, 184, 92, 1.0);
  }

  @media screen and (min-width: 768px) {
    .sign-up {
      width: 768px;
    }
  }

  @keyframes blue-to-yellow {
    0% {
      background: rgba(50, 96, 189, 1.0);
    }
    20% {
      background: linear-gradient(to left bottom, rgba(238, 154, 47, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0));
    }
    40% {
      background: linear-gradient(to left bottom, rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0));
    }
    60% {
      background: linear-gradient(to left bottom, rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0));
    }
    80% {
      background: linear-gradient(to left bottom, rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(50, 96, 189, 1.0));
    }
    100% {
      background: rgba(238, 154, 47, 1.0);
    }
  }

  @-webkit-keyframes blue-to-yellow {
    0% {
      background: rgba(50, 96, 189, 1.0);
    }
    20% {
      background: linear-gradient(to left bottom, rgba(238, 154, 47, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0));
    }
    40% {
      background: linear-gradient(to left bottom, rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0));
    }
    60% {
      background: linear-gradient(to left bottom, rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(50, 96, 189, 1.0), rgba(50, 96, 189, 1.0));
    }
    80% {
      background: linear-gradient(to left bottom, rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(50, 96, 189, 1.0));
    }
    100% {
      background: rgba(238, 154, 47, 1.0);
    }
  }

  @keyframes yellow-to-red {
    0% {
      background: rgba(238, 154, 47, 1.0);
    }
    20% {
      background: linear-gradient(to left bottom, rgba(218, 26, 26, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0));
    }
    40% {
      background: linear-gradient(to left bottom, rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0));
    }
    60% {
      background: linear-gradient(to left bottom, rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0));
    }
    80% {
      background: linear-gradient(to left bottom, rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(238, 154, 47, 1.0));
    }
    100% {
      background: rgba(218, 26, 26, 1.0);
    }
  }

  @-webkit-keyframes yellow-to-red {
    0% {
      background: rgba(238, 154, 47, 1.0);
    }
    20% {
      background: linear-gradient(to left bottom, rgba(218, 26, 26, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0));
    }
    40% {
      background: linear-gradient(to left bottom, rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0));
    }
    60% {
      background: linear-gradient(to left bottom, rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(238, 154, 47, 1.0), rgba(238, 154, 47, 1.0));
    }
    80% {
      background: linear-gradient(to left bottom, rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(238, 154, 47, 1.0));
    }
    100% {
      background: rgba(218, 26, 26, 1.0);
    }
  }

  @keyframes red-to-green {
    0% {
      background: rgba(218, 26, 26, 1.0);
    }
    10% {
      background: radial-gradient(rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), #fff);
    }

    20% {
      background: radial-gradient(rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), #fff, #fff);
    }

    30% {
      background: radial-gradient(rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), #fff, #fff, #fff);
    }

    40% {
      background: radial-gradient(rgba(218, 26, 26, 1.0), #fff, #fff, #fff, #fff);
    }

    50% {
      background: #fff;
    }

    60% {
      background: radial-gradient(#fff, #fff, #fff, #fff, rgba(92, 184, 92, 1.0));
    }

    70% {
      background: radial-gradient(#fff, #fff, #fff, rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0));
    }
    80% {
      background: radial-gradient(#fff, #fff, rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0));
    }
    90% {
      background: radial-gradient(#fff, rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0));
    }

    100% {
      background: rgba(92, 184, 92, 1.0);
    }
  }

  @-webkit-keyframes red-to-green {
    0% {
      background: rgba(218, 26, 26, 1.0);
    }
    10% {
      background: radial-gradient(rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), #fff);
    }

    20% {
      background: radial-gradient(rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), #fff, #fff);
    }

    30% {
      background: radial-gradient(rgba(218, 26, 26, 1.0), rgba(218, 26, 26, 1.0), #fff, #fff, #fff);
    }

    40% {
      background: radial-gradient(rgba(218, 26, 26, 1.0), #fff, #fff, #fff, #fff);
    }

    50% {
      background: #fff;
    }

    60% {
      background: radial-gradient(#fff, #fff, #fff, #fff, rgba(92, 184, 92, 1.0));
    }

    70% {
      background: radial-gradient(#fff, #fff, #fff, rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0));
    }
    80% {
      background: radial-gradient(#fff, #fff, rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0));
    }
    90% {
      background: radial-gradient(#fff, rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0), rgba(92, 184, 92, 1.0));
    }

    100% {
      background: rgba(92, 184, 92, 1.0);
    }
  }
</style>
<script>
  import Email from './components/sign_up/Email.vue'
  import BaseInfo from './components/sign_up/BaseInfo.vue'
  import SignUpInfo from './components/sign_up/SignUpInfo.vue'
  import VerifyPhone from './components/sign_up/VerifyPhone.vue'
  import Done from './components/sign_up/Done.vue'

  export default{
    data () {
      return {
        loading: false,
        currentStep: 'email',
        buttonColor: 'blue',
        buttonIcon: 'next',
        department: '',
        phone: '',
        edit: false,
        token: '',
        infoLoading: false,
        infoError: false
      }
    },
    components: {
      'email': Email,
      'sign-up-info': SignUpInfo,
      'base-info': BaseInfo,
      'verify-phone': VerifyPhone,
      'done': Done,
      'next': {
        props: ['loading'],
        template: '<i><i class="fa fa-2x" :class="which"></i></i>',
        computed: {
          which: function () {
            if (this.loading) {
              return ['fa-spin', 'fa-circle-o-notch']
            } else {
              return 'fa-arrow-right'
            }
          }
        }
      },
      'ok': {
        template: '<i class="fa fa-2x fa-check"></i>'
      }
    },
    methods: {
      nextStep: function () {
        this.$broadcast('next-step')
      },
      getInfo: function () {
        this.$broadcast('get-info')
      }
    },
    events: {
      'done': function () {
        this.loading = false
      },
      'loading': function () {
        this.loading = true
      },
      'next': function (next) {
        this.loading = false
        this.currentStep = next.next
        if (next.color) {
          this.buttonColor = next.color
        }
        if (next.icon) {
          this.buttonIcon = next.icon
        }
        if (next.department) {
          this.department = next.department
        }
        if (next.phone) {
          this.phone = next.phone
        }
        if (next.logedIn) {
          this.edit = next.logedIn
        }
        if (next.token) {
          this.token = next.token
        }
      },
      'info-status': function (status) {
        this.infoLoading = status.loading
        this.infoError = status.error
      }
    }
  }
</script>
