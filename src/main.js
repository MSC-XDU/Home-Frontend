import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueForm from 'vue-form'
import Vue from 'vue'

import Index from './Index.vue'
import SignUp from './SignUp.vue'
import Department from './Department.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueForm)
Vue.http.options.credentials = true

Vue.transition('switch', {
  enterClass: 'fadeInUp',
  leaveClass: 'fadeOutDown'
})

Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
})

Vue.transition('zoom', {
  enterClass: 'zoomIn',
  leaveClass: 'zoomOut'
})

Vue.transition('slide', {
  enterClass: 'zoomIn',
  leaveClass: 'fadeOutLeft'
})

var router = new VueRouter({
  history: true,
  linkActiveClass: 'pure-menu-selected'
})

router.map({
  '/': {
    component: Index
  },
  '/join': {
    component: SignUp
  },
  '/department': {
    component: Department
  }
})

router.start(App, 'app')
