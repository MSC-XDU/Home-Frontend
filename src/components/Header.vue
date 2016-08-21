<template>
  <header class="header pure-menu pure-menu-horizontal pure-menu-fixed">
    <a class="brand pure-menu-heading" v-link="'/'">
      <img src="https://oc7r9dv0c.qnssl.com/image/main/brand.PNG">
    </a>

    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a v-link="{ path: '/department', activeClass: 'menu-selected' }" class="pure-menu-link">部门</a></li>
      <li class="pure-menu-item"><a v-link="{ path: '/join', activeClass: 'menu-selected' }" class="pure-menu-link">加入我们</a></li>
    </ul>
  </header>
</template>
<style scoped>
  .header {
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

    -webkit-box-pack: start;
    -moz-justify-content: flex-start;
    -webkit-justify-content: flex-start;
    justify-content: flex-end;

    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 1.0);
    height: 48px;
    padding-left: 10px;
    padding-right: 10px;

    z-index: 9999;
  }

  .header .pure-menu-link {
    color: #fff;
    z-index: 9999;
  }

  .header .pure-menu-link:hover {
    background-color: transparent;
    color: #d0d0d0;
  }

  .header .brand {
    margin-right: auto;
  }

  .brand img {
    height: 38px;
    width: 60px;
  }

  .header .menu-selected {
    color: #d0d0d0;
    background-color: transparent;
  }
</style>
<script>
  export default{
    data () {
      return {}
    },
    components: {}
  }
</script>
