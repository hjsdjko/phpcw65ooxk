import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import baoxiangfenleiList from '../pages/baoxiangfenlei/list'
import baoxiangfenleiDetail from '../pages/baoxiangfenlei/detail'
import baoxiangfenleiAdd from '../pages/baoxiangfenlei/add'
import baoxiangxinxiList from '../pages/baoxiangxinxi/list'
import baoxiangxinxiDetail from '../pages/baoxiangxinxi/detail'
import baoxiangxinxiAdd from '../pages/baoxiangxinxi/add'
import baoxiangyudingList from '../pages/baoxiangyuding/list'
import baoxiangyudingDetail from '../pages/baoxiangyuding/detail'
import baoxiangyudingAdd from '../pages/baoxiangyuding/add'
import lingshifenleiList from '../pages/lingshifenlei/list'
import lingshifenleiDetail from '../pages/lingshifenlei/detail'
import lingshifenleiAdd from '../pages/lingshifenlei/add'
import lingshixinxiList from '../pages/lingshixinxi/list'
import lingshixinxiDetail from '../pages/lingshixinxi/detail'
import lingshixinxiAdd from '../pages/lingshixinxi/add'
import goumailingshiList from '../pages/goumailingshi/list'
import goumailingshiDetail from '../pages/goumailingshi/detail'
import goumailingshiAdd from '../pages/goumailingshi/add'
import quxiaoyudingList from '../pages/quxiaoyuding/list'
import quxiaoyudingDetail from '../pages/quxiaoyuding/detail'
import quxiaoyudingAdd from '../pages/quxiaoyuding/add'
import maomipinzhongList from '../pages/maomipinzhong/list'
import maomipinzhongDetail from '../pages/maomipinzhong/detail'
import maomipinzhongAdd from '../pages/maomipinzhong/add'
import maomixinxiList from '../pages/maomixinxi/list'
import maomixinxiDetail from '../pages/maomixinxi/detail'
import maomixinxiAdd from '../pages/maomixinxi/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import onlinemessageList from '../pages/onlinemessage/list'
import onlinemessageDetail from '../pages/onlinemessage/detail'
import onlinemessageAdd from '../pages/onlinemessage/add'
import discussbaoxiangxinxiList from '../pages/discussbaoxiangxinxi/list'
import discussbaoxiangxinxiDetail from '../pages/discussbaoxiangxinxi/detail'
import discussbaoxiangxinxiAdd from '../pages/discussbaoxiangxinxi/add'
import discusslingshixinxiList from '../pages/discusslingshixinxi/list'
import discusslingshixinxiDetail from '../pages/discusslingshixinxi/detail'
import discusslingshixinxiAdd from '../pages/discusslingshixinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'baoxiangfenlei',
					component: baoxiangfenleiList
				},
				{
					path: 'baoxiangfenleiDetail',
					component: baoxiangfenleiDetail
				},
				{
					path: 'baoxiangfenleiAdd',
					component: baoxiangfenleiAdd
				},
				{
					path: 'baoxiangxinxi',
					component: baoxiangxinxiList
				},
				{
					path: 'baoxiangxinxiDetail',
					component: baoxiangxinxiDetail
				},
				{
					path: 'baoxiangxinxiAdd',
					component: baoxiangxinxiAdd
				},
				{
					path: 'baoxiangyuding',
					component: baoxiangyudingList
				},
				{
					path: 'baoxiangyudingDetail',
					component: baoxiangyudingDetail
				},
				{
					path: 'baoxiangyudingAdd',
					component: baoxiangyudingAdd
				},
				{
					path: 'lingshifenlei',
					component: lingshifenleiList
				},
				{
					path: 'lingshifenleiDetail',
					component: lingshifenleiDetail
				},
				{
					path: 'lingshifenleiAdd',
					component: lingshifenleiAdd
				},
				{
					path: 'lingshixinxi',
					component: lingshixinxiList
				},
				{
					path: 'lingshixinxiDetail',
					component: lingshixinxiDetail
				},
				{
					path: 'lingshixinxiAdd',
					component: lingshixinxiAdd
				},
				{
					path: 'goumailingshi',
					component: goumailingshiList
				},
				{
					path: 'goumailingshiDetail',
					component: goumailingshiDetail
				},
				{
					path: 'goumailingshiAdd',
					component: goumailingshiAdd
				},
				{
					path: 'quxiaoyuding',
					component: quxiaoyudingList
				},
				{
					path: 'quxiaoyudingDetail',
					component: quxiaoyudingDetail
				},
				{
					path: 'quxiaoyudingAdd',
					component: quxiaoyudingAdd
				},
				{
					path: 'maomipinzhong',
					component: maomipinzhongList
				},
				{
					path: 'maomipinzhongDetail',
					component: maomipinzhongDetail
				},
				{
					path: 'maomipinzhongAdd',
					component: maomipinzhongAdd
				},
				{
					path: 'maomixinxi',
					component: maomixinxiList
				},
				{
					path: 'maomixinxiDetail',
					component: maomixinxiDetail
				},
				{
					path: 'maomixinxiAdd',
					component: maomixinxiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'onlinemessage',
					component: onlinemessageList
				},
				{
					path: 'onlinemessageDetail',
					component: onlinemessageDetail
				},
				{
					path: 'onlinemessageAdd',
					component: onlinemessageAdd
				},
				{
					path: 'discussbaoxiangxinxi',
					component: discussbaoxiangxinxiList
				},
				{
					path: 'discussbaoxiangxinxiDetail',
					component: discussbaoxiangxinxiDetail
				},
				{
					path: 'discussbaoxiangxinxiAdd',
					component: discussbaoxiangxinxiAdd
				},
				{
					path: 'discusslingshixinxi',
					component: discusslingshixinxiList
				},
				{
					path: 'discusslingshixinxiDetail',
					component: discusslingshixinxiDetail
				},
				{
					path: 'discusslingshixinxiAdd',
					component: discusslingshixinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
