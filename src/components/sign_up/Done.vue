<template>
  <div class="done">
    <h2>报名成功~我们期待着与你相见</h2>
    <h3>面试时间如下</h3>
    <p>一面: 9月12日</p>
    <p>二面: 9月13日</p>
    <h5>如有更改另行通知</h5>
    <h3 v-if="info"><a class="pure-button" href="https://xdmsc_recruit.leanapp.cn" target="_blank">技术部?来一套题吧!</a></h3>
  </div>
</template>
<style scoped>
  .done {
    margin-top: 50px;
  }
</style>
<script>
  export default {
    data () {
      return {}
    },
    components: {},
    props: {
      department: String
    },
    computed: {
      info: function () {
        return /技术部/.test(this.department)
      }
    },
    events: {
      'next-step': function () {
        this.$router.go('/')
      }
    }
  }
</script>
