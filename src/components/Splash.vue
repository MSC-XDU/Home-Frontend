<template>
  <div class="splash-container">
    <div class="splash">
      <h1 class="splash-head">{{title}}</h1>
      <p class="splash-subhead">
        {{subtitle}}
      </p>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
  .splash-container {
    background: #1f8dd6;
    z-index: 1;
    overflow: hidden;
    width: 100%;
    height: 78%;
    top: 0;
    left: 0;
    position: fixed !important;
  }

  .splash {
    width: 70%;
    height: 50%;
    margin: auto;
    position: absolute;
    top: 100px;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    text-transform: uppercase;
  }

  .splash-subhead {
    color: white;
    letter-spacing: 0.05em;
    opacity: 0.8;
  }
</style>
<script>
  export default{
    data () {
      return {}
    },
    components: {},
    props: {
      title: String,
      subtitle: String
    }
  }
</script>
