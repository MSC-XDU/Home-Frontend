<template>
  <div>
    <nav-header></nav-header>
    <router-view
      class="animated"
      transition="switch"
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      'nav-header': Header
    }
  }
</script>

<style>
  p {
    font-family: 'Helvetica Neue', Arial, 'Liberation Sans', FreeSans, 'Hiragino Sans GB', sans-serif;
  }

  .animated {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }

  .row-center {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -moz-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;

    -webkit-box-pack: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    justify-content: center;

    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .column-center {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-box-pack: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    justify-content: center;

    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;

    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
  }
</style>
