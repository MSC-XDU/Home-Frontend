<template>
  <div class="splash-container">
    <div class="splash">
      <h1 class="splash-head">
        <span>西电</span>
        <span class="msc" style="color: rgba(50, 96, 187, 1.0)">M</span>
        <span class="msc" style="color: rgba(244, 157, 47, 1.0)">S</span>
        <span class="msc" style="color: rgba(178, 19, 16, 1.0)">C</span>
      </h1>
      <p class="splash-subhead">
        Micro Makes Great!
      </p>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
  .splash-container {
    background: url("https://oc7r9dv0c.qnssl.com/image/main/background-md.jpeg") no-repeat center;
    background-size: auto 100%;
    z-index: 1;
    overflow: hidden;
    width: 100%;
    height: 78%;
    top: 48px;
    left: 0;
    position: fixed !important;
  }

  .splash {
    width: 70%;
    height: 50%;
    position: absolute;
    top: 60px;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    text-transform: uppercase;
    margin: auto;
  }

  .splash-subhead {
    color: white;
    letter-spacing: 0.05em;
    opacity: 0.8;
  }
  .splash-head {
    color: rgba(250,250,250,1);
    font-size: 2.2em;
  }

  @media screen and (min-width: 48em) {
    .splash-container {
      background: url("https://oc7r9dv0c.qnssl.com/image/main/background.jpeg") no-repeat center;
      background-size: 100%;
    }

    .splash-head {
      font-size: 3em !important;
    }

    .splash {
      top: 0;
    }
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
