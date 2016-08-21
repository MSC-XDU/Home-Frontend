<template>
  <div class="sign-up pure-g">
    <div class="pure-u-2-24 pure-u-md-1-5"></div>
    <div class="content pure-u-20-24 pure-u-md-3-5 column-center">
      <component
        class="animated"
        transition="slide"
        transition-mode="out-in"
        :is="currentStep"
        :department="department"
        :phone="phone"
        :loged-in="edit"
        keepalive>
      </component>
      <button
        @click="nextStep"
        :class="buttonColor"
        class="pure-button pure-button-primary next row-center">
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
  .sign-up {
    width: 100%;
    margin-top: 48px;
  }

  .sign-up .content {
    text-align: center;
  }

  .next {
    height: 50px;
    width: 50px;
    border-radius: 25px;

    display: -webkit-inline-flex;
    display: inline-flex;
    margin-bottom: 40px;
  }

  .next i {
    display: inline-block;
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
        edit: false
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
        template: '<i><i v-show="!loading" class="fa fa-2x fa-arrow-right"></i><i v-show="loading" class="fa fa-2x fa-circle-o-notch fa-spin"></i></i>'
      },
      'ok': {
        template: '<i class="fa fa-2x fa-check"></i>'
      }
    },
    methods: {
      nextStep: function () {
        this.$broadcast('next-step')
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
      }
    }
  }
</script>
