<template>
	<div :style='{"width":"60%","margin":"0px auto","overflow":"hidden","position":"relative","background":"#fff","display":"block"}'>
	<div :style='{"width":"100%","flexWrap":"wrap","justifyContent":"space-between","display":"flex"}'>
		<div :style='{"width":"100%","margin":"0 0 20px","height":"auto"}'>
			<div :style='{"margin":"10px 0 0","fontSize":"20px","lineHeight":"54px","color":"#fff","textAlign":"center","background":"#FF721B"}'>电影资讯</div>
		</div>
		<div :style='{"padding":"20px","borderColor":"#000","borderWidth":"1px 1px 0","flex":"1","width":"calc(100% - 220px)","position":"relative","borderStyle":"solid","order":"2"}'>
			<div  :style='{"lineHeight":"40px","fontSize":"18px","color":"#333","textAlign":"left"}'>{{detail.title}}</div>
			
			<div :style='{"alignItems":"center","width":"100%","display":"flex"}'>
			  <div :style='{"padding":"0","margin":"0 5px 0"}'>
			    <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#9E9E9E"}'></span>
			    <span :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"12px"}'>发布时间：{{detail.addtime}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 5px"}'>
			    <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#9E9E9E"}'></span>
			    <span :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"12px"}'>{{detail.name}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 5px"}'>
			    <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#9E9E9E"}'></span>
			    <span :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"12px"}'>{{detail.thumbsupnum}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 5px"}'>
			    <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#9E9E9E"}'></span>
			    <span :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"12px"}'>{{detail.storeupnum}}</span>
			  </div>
			  <div :style='{"padding":"0","margin":"0 5px"}'>
			    <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#9E9E9E"}'></span>
			    <span :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"12px"}'>{{detail.clicknum}}</span>
			  </div>
			</div>
			<div class="operate" :style='{"width":"100%","padding":"10px 0px","alignItems":"center","justifyContent":"flex-end","display":"flex"}'>
				<div @click="zanClick" :style='{"padding":"0","margin":"0 20px 0 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
					<span class="icon iconfont icon-guanzhu-zhihui" :style='{"margin":"0 2px 0 0","lineHeight":"40px","fontSize":"14px","color":"#333"}'></span>
					<span :style='{"color":"#666","lineHeight":"40px","fontSize":"14px"}'>{{zanType?'取消赞':'点赞'}}</span>
				</div>
				<div @click="collectClick" :style='{"padding":"0","alignItems":"center","justifyContent":"center","display":"flex"}'>
					<span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"40px","fontSize":"14px","color":"#333"}'></span>
					<span :style='{"color":"#666","lineHeight":"40px","fontSize":"14px"}'>{{collectType?'取消收藏':'收藏'}}</span>
				</div>
			</div>
			
			<div :style='{"color":"#9E9E9E","width":"100%","height":"auto"}' class="content-detail" v-html="detail.content"></div>
		</div>
		<!-- option -->
		<div :style='{"padding":"20px","margin":"0px 0 0 220px","borderColor":"#000","borderWidth":"0 1px 1px","display":"flex","width":"calc(100% - 220px)","borderStyle":"solid","height":"auto","order":"3"}'>
		  <div :style='{"cursor":"pointer","padding":"0 20px","margin":"0 20px 0 0","color":"#fff","borderRadius":"20px","background":"#000","lineHeight":"36px","fontSize":"14px"}' @click="prepDetailClick">上一篇：prev</div>
		  <div :style='{"cursor":"pointer","padding":"0 20px","color":"#fff","borderRadius":"20px","background":"#ff721b","lineHeight":"36px","fontSize":"14px"}' @click="nextDetailClick">下一篇：next</div>
		</div>

		<!-- 热门文章 -->
		<div class="hot" :style='{"border":"1px solid #000","width":"200px","margin":"0 20px 0 0","background":"#fff","height":"auto"}'>
		  <div :style='{"width":"100%","lineHeight":"44px","fontSize":"14px","color":"#fff","textAlign":"center","background":"#ff721b"}'>热门文章</div>
		  <div :style='{"padding":"10px","background":"#fff","flexDirection":"column","display":"flex","width":"100%","justifyContent":"space-around","height":"auto"}'>
		    <div v-for="item in hotList" :key="item.id" :style='{"width":"100%","padding":"5px 5px 0","background":"#fff","height":"auto"}' @click="toDetail(item.id)">
		      <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"100px"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"padding":"5px","lineHeight":"1","fontSize":"14px","color":"#000","textAlign":"center"}'>{{ item.title }}</div>
		      <div :style='{"padding":"5px","lineHeight":"12px","fontSize":"12px","color":"#999","textAlign":"center"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
		<!-- 推荐文章 -->
		<div class="news" :style='{"border":"1px solid #000","margin":"20px 0 0","flexWrap":"wrap","background":"#fff","flexDirection":"column","display":"flex","width":"100%","float":"left","height":"auto","order":"3"}'>
		  <div :style='{"padding":"0 20px","color":"#fff","textAlign":"center","background":"#ff721b","width":"100%","lineHeight":"44px","fontSize":"14px"}'>推荐文章</div>
		  <div :style='{"padding":"20px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <div v-for="item in recommendList" :key="item.id" :style='{"width":"23%","background":"#fff","height":"auto"}' @click="toDetail(item.id)">
		      <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"150px"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"padding":"5px","fontSize":"14px","color":"#000","textAlign":"center"}'>{{ item.title }}</div>
		      <div :style='{"padding":"5px","lineHeight":"12px","fontSize":"14px","color":"#999","textAlign":"center"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		//数据集合
		data() {
			return {
				id: 0,
				detail: {},
				zanType: false,
				zanForm: {},
				collectType:false,
				collectForm: {},
				baseUrl:'',
				hotList: [],
				recommendList: [],
				categoryList: [],
				currentIndex: 0,
				allList: []
			}
		},
		created() {
			this.id = this.$route.query.id
			this.baseUrl = this.$config.baseUrl;
			this.getCategoryList()
			this.getDetail()
			this.getNewsList()
			this.getHotList()
			if(localStorage.getItem('Token')) {
				this.getRecommendList()
			}
		},
		watch:{
			$route(newValue) {
				this.id = this.$route.query.id
			    this.getDetail()
			}
		},
		methods: {
			getNewsList() {
				let params = {page:1, limit: 100,sort:'addtime',order:'desc'};
				this.$http.get('news/list', {params: params}).then(res => {
					if (res.data.code == 0) {
						for(let x in res.data.data.list){
							if(res.data.data.list[x].id == this.id){
								this.currentIndex = Number(x)
								break
							}
						}
						this.allList = res.data.data.list
					}
				});
			},
			// 上一篇
			prepDetailClick(){
				if(this.currentIndex == 0){
					this.$message.error('已经是第一篇了')
					return false
				}
				this.currentIndex--
				this.$router.push({path: '/index/newsDetail', query: {id: this.allList[this.currentIndex].id}});
			},
			// 下一篇
			nextDetailClick(){
				if(this.currentIndex == this.allList.length - 1){
					this.$message.error('已经是最后一篇了')
					return false
				}
				this.currentIndex++
				this.$router.push({path: '/index/newsDetail', query: {id: this.allList[this.currentIndex].id}});
			},
			getCategoryList(){
				this.$http.get('newstype/list', {}).then(res => {
					if (res.data.code == 0) {
						this.categoryList = res.data.data;
					}
				});
			},
			// 获取热门列表
			getHotList(){
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get('news/autoSort', {params: params}).then(res => {
					if (res.data.code == 0) {
						this.hotList = res.data.data.list;
					}
				});
			},
			// 获取推荐列表
			getRecommendList(){
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get('news/autoSort2', {params: params}).then(res => {
					if (res.data.code == 0) {
						this.recommendList = res.data.data.list;
					}
				});
			},
			// 跳转详情
			toDetail(id){
				this.$router.push({path: '/index/newsDetail', query: {id: id}});
			},
			getDetail(){
				this.$http.get(`news/detail/${this.id}`,{}).then(res=>{
					if(res.data&&res.data.code==0){
						this.detail = res.data.data
						window.scrollTo(0, 100)
						this.getZan()
						this.getCollect()
					}
				})
			},
			getZan() {
				this.$http.get('storeup/list', {
					params: {
						page: 1,
						limit: 1,
						type: 21,
						userid: localStorage.getItem('userid'),
						tablename: 'news',
						refid: this.id
					}
				}).then(res=>{
					if(res.data&&res.data.code==0){
						if(res.data.data.list.length){
							this.zanType = true
							this.zanForm = res.data.data.list[0]
						}else{
							this.zanType = false
						}
					}
				})
			},
			getCollect(){
				this.$http.get('storeup/list', {
					params: {
						page: 1,
						limit: 1,
						type: 1,
						userid: localStorage.getItem('userid'),
						tablename: 'news',
						refid: this.id
					}
				}).then(res=>{
					if(res.data&&res.data.code==0){
						if(res.data.data.list.length){
							this.collectType = true
							this.collectForm = res.data.data.list[0]
						}else{
							this.collectType = false
						}
					}
				})
			},
			zanClick() {
				if(this.zanType){
					this.$http.post('storeup/delete', [this.zanForm.id]).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('取消成功')
							this.detail.thumbsupnum--
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getZan()
						}
					})
				}else{
					let data = {
						name: this.detail.title,
						picture: this.detail.picture,
						refid: this.detail.id,
						type: 21,
						tablename: 'news',
						userid: localStorage.getItem('userid')
					}
					this.$http.post('storeup/add', data).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('点赞成功')
							this.detail.thumbsupnum++
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getZan()
						}
					})
				}
			},
			collectClick(){
				if(this.collectType){
					this.$http.post('storeup/delete', [this.collectForm.id]).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('取消成功')
							this.detail.storeupnum--
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getCollect()
						}
					})
				}else{
					let data = {
						name: this.detail.title,
						picture: this.detail.picture,
						refid: this.detail.id,
						type: 1,
						tablename: 'news',
						userid: localStorage.getItem('userid')
					}
					this.$http.post('storeup/add', data).then(res => {
						if (res.data && res.data.code == 0) {
							this.detail.storeupnum++
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.$message.success('收藏成功')
							this.getCollect()
						}
					})
				}
			},
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.section {
		width: 900px;
		margin: 0 auto;
	}
	.editor /deep/ .avatar-uploader {
		height: 0;
		line-height: 0;
	}
	.section-content {
		margin-top: 30px;
	}
	.content-title {
		text-align: center;
		font-size: 22px;
		font-weight: bold;
	}
	.content-sub-title {
		text-align: center;
		margin-top: 20px;
		color: #888888;
		font-size: 14px;
	}
	.operate{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40px;
	}
</style>