import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MSG from '@/components/sms/HelloWorld1'
import ABOUT_BLOG from '@/components/about/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'MSG',
          name: 'MSG',
          component: MSG,
          children: [
            {
              path: 'MSG1',
              name: 'MSG1',
              component: MSG
            }
          ]
        }, {
          path: 'about_blog',
          name: '本站使用技术',
          component: ABOUT_BLOG
        }
      ]
    }
  ]
})
