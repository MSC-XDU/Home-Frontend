<template>
  <footer class="footer">
    <div class=" footer-left">
      <p>如果你也很GEEK，如果你也对俱乐部充满向往，欢迎打开西电微软学生俱乐部的大门。</p>
    </div>
    <div class="footer-center">
      <img src="https://oc7r9dv0c.qnssl.com/image/main/brand.PNG">
    </div>
    <div class="footer-right">
      <div class="contact">
        <a style="color: rgba(50, 96, 188, 1.0)" href="http://www.renren.com/270528126"
           target="_blank">
          <i class="fa fa-2x fa-renren"></i>
        </a>
        <a style="color: rgba(238, 154, 47, 1.0)"
           @mouseover="showQR"
           @mouseout="hiddenQR"
           @click="showQR"
           href="javascript:void(0)"
           target="_blank">
          <i class="fa fa-2x fa-weixin"></i>
        </a>
        <img id="qr" v-show="show" src="https://oc7r9dv0c.qnssl.com/image/main/qr.jpeg">
        <a style="color: rgba(216, 26, 26, 1.0)" href="http://weibo.com/mstcinxdu"
           target="_blank">
          <i class="fa fa-2x fa-weibo"></i>
        </a>
      </div>
      <p>CONTACT US</p>
    </div>
  </footer>
</template>
<style scoped>
  .footer {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;

    -webkit-box-pack: start;
    -moz-justify-content: flex-start;
    -webkit-justify-content: flex-start;
    justify-content: flex-end;

    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 1);
  }

  #qr {
    width: 150px;
    height: 150px;

    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    margin: auto;
  }

  .contact {
    margin: 20px 0 10px 0;
  }

  .contact a {
    text-decoration: none;
  }

  .contact a:visited {
    text-decoration: none;
  }

  .footer-center {
    -webkit-box-flex: 0.0;
    -moz-flex-grow: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0;

    -webkit-box-flex: 0.0;
    -moz-flex-shrink: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;

    margin-right: 15px;
    margin-left: 15px;
  }

  .footer-center img {
    height: auto;
    width: 100px;
  }

  .footer-right {
    -webkit-box-flex: 1.0;
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;

    -webkit-box-flex: 1.0;
    -moz-flex-shrink: 1;
    -webkit-flex-shrink: 1;
    flex-shrink: 1;

    flex-basis: 0;
    text-align: center;
  }

  .footer-right p {
    color: rgba(128, 128, 128, 1.0);
  }

  .footer-left {
    -webkit-box-flex: 1.0;
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;

    -webkit-box-flex: 1.0;
    -moz-flex-shrink: 1;
    -webkit-flex-shrink: 1;
    flex-shrink: 1;

    flex-basis: 0;
    text-align: center;
  }

  .footer-left p {
    padding-right: 30px;
    padding-left: 30px;
    color: rgba(128, 128, 128, 1.0);
  }

  @media (min-width: 60em) {
    .footer {
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
    }
  }

</style>
<script>
  export default{
    data () {
      return {
        show: false
      }
    },
    components: {},
    methods: {
      showQR: function () {
        this.show = true
      },
      hiddenQR: function () {
        this.show = false
      }
    }
  }
</script>
