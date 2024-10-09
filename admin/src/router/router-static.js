import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import maomixinxi from '@/views/modules/maomixinxi/list'
    import aboutus from '@/views/modules/aboutus/list'
    import baoxiangyuding from '@/views/modules/baoxiangyuding/list'
    import goumailingshi from '@/views/modules/goumailingshi/list'
    import discussbaoxiangxinxi from '@/views/modules/discussbaoxiangxinxi/list'
    import lingshixinxi from '@/views/modules/lingshixinxi/list'
    import users from '@/views/modules/users/list'
    import discusslingshixinxi from '@/views/modules/discusslingshixinxi/list'
    import baoxiangfenlei from '@/views/modules/baoxiangfenlei/list'
    import lingshifenlei from '@/views/modules/lingshifenlei/list'
    import quxiaoyuding from '@/views/modules/quxiaoyuding/list'
    import maomipinzhong from '@/views/modules/maomipinzhong/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import baoxiangxinxi from '@/views/modules/baoxiangxinxi/list'
    import config from '@/views/modules/config/list'
    import onlinemessage from '@/views/modules/onlinemessage/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '电影资讯',
        component: news
      }
      ,{
	path: '/maomixinxi',
        name: '猫咪信息',
        component: maomixinxi
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/baoxiangyuding',
        name: '包厢预订',
        component: baoxiangyuding
      }
      ,{
	path: '/goumailingshi',
        name: '购买零食',
        component: goumailingshi
      }
      ,{
	path: '/discussbaoxiangxinxi',
        name: '包厢信息评论',
        component: discussbaoxiangxinxi
      }
      ,{
	path: '/lingshixinxi',
        name: '零食信息',
        component: lingshixinxi
      }
      ,{
	path: '/users',
        name: '管理员',
        component: users
      }
      ,{
	path: '/discusslingshixinxi',
        name: '零食信息评论',
        component: discusslingshixinxi
      }
      ,{
	path: '/baoxiangfenlei',
        name: '包厢分类',
        component: baoxiangfenlei
      }
      ,{
	path: '/lingshifenlei',
        name: '零食分类',
        component: lingshifenlei
      }
      ,{
	path: '/quxiaoyuding',
        name: '取消预订',
        component: quxiaoyuding
      }
      ,{
	path: '/maomipinzhong',
        name: '猫咪品种',
        component: maomipinzhong
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/baoxiangxinxi',
        name: '包厢信息',
        component: baoxiangxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/onlinemessage',
        name: '在线留言',
        component: onlinemessage
      }
      ,{
	path: '/newstype',
        name: '电影资讯分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
