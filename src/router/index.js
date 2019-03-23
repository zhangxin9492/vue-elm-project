import Vue from 'vue'
import Router from 'vue-router'
import uiGoods from '@/components/ui-goods'
import uiSeller from '@/components/ui-seller'
import uiComment from '@/components/ui-comment'


Vue.use(Router)

export default new Router({
  linkActiveClass:'active', //路由激活类名
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: uiGoods
    },
    {
      path: '/seller',
      name: 'uiSeller',
      component: uiSeller
    },
    {
      path: '/comment',
      name: 'uiComment',
      component: uiComment
    }
  ]
})
