import Vue from 'vue'
import Router from 'vue-router'
// 主页面框架
import index from '@/components/index.vue'

//登录注册
import register from '@/components/loginRegister/register'

//用户信息模块
import display from '@/components/userMsg/display.vue'
import add from '@/components/userMsg/add.vue'
// 用户管理模块
import del from '@/components/userMana/delete.vue'
import modify from '@/components/userMana/modify.vue'
// 关于我们模块
import about from '@/components/about/about'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      component: index,
      children:[
        {
        	path:'userMsg/display',
        	name:'display',
        	component:display
        },
        {
        	path:'userMsg/add',
        	name:'add',
        	component:add
        },
        {
        	path:'userMana/delete',
        	name:'delete',
        	component:del
        },
        {
        	path:'userMana/modify',
        	name:'modify',
        	component:modify
        },
        {
            path:'about',
            name:'关于我们',
            component:about
        }
      ]
    },
    {
      path:'/loginRegister',
      name:'loginRegister',
      component:register
    }
  ]
})
