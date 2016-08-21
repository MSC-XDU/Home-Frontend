<template>
  <li>
    <div v-show="loading">
      <span>{{tip}}</span>
    </div>
    <div :date-id="id" v-show="!loading">
      <span>{{name}}</span>
    </div>
    <i @click="cancel" class="fa fa-times-circle" aria-hidden="true"></i>
  </li>
</template>
<style scoped>
  li {
    position: relative;
    list-style-type: none;
    margin: 5px;
  }

  li > div {
    display: inline-block;
  }

  li > i {
    position: absolute;
    right: 0;
  }
</style>
<script>
  export default {
    created: function () {
      if (this.file.loading) {
        var self = this
        self.loading = true
        self.file.promise
          .then(function (resp) {
            if (resp.status >= 200 && resp.status < 300) {
              var result = resp.json()
              if (result['success?']) {
                self.id = result.id
                self.name = result.name
                self.url = result.url
                self.loading = false
              } else {
                self.errorHandler(self)
              }
            } else {
              self.errorHandler(self)
            }
          }, function () {
            this.errorHandler(self)
          })
      } else {
        this.id = this.file.id
        this.name = this.file.name
      }
    },
    data () {
      return {
        id: '',
        name: '',
        loading: false,
        url: '',
        tip: '上传中'
      }
    },
    props: ['file'],
    components: {},
    methods: {
      errorHandler: function (self) {
        self.tip = '出错'
        setTimeout(function () {
          self.$dispatch('delete-file', self.file)
        }, 3000)
      },
      cancel: function () {
        if (this.loading) {
          this.file.xhr.abort()
          this.$dispatch('delete-file', this.file)
        } else {
          var self = this
          self.$http
            .post('http://localhost:8081/join/delete-file', {id: this.id})
            .then(function (resp) {
              if (resp.status >= 200 && resp.status < 300) {
                var result = resp.json()
                if (result['success?']) {
                  self.$dispatch('delete-file', self.file)
                }
              }
            })
        }
      }
    }
  }
</script>
