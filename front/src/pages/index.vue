<template>
	<div class="main-containers">
		<div class="body-containers" :style='{"minHeight":"100vh","padding":"0","margin":"0","position":"relative","background":"#fff"}'>
		<div class="top-container" :style='{"width":"100%","padding":"20px 40px","textAlign":"right","background":"#ff721b","display":"block","height":"150px"}'>
			<!-- info -->
			<div :style='{"top":"120px","alignItems":"center","left":"80px","display":"flex","width":"28%","position":"absolute","justifyContent":"space-between","zIndex":"1003"}'>
			  <el-image :style='{"objectFit":"contain","width":"70px","height":"72px"}' src="http://codegen.caihongy.cn/20231030/630f810f7c1d4d2eabee87b14a1eddcf.png" fit="cover" />
			  <span :style='{"padding":"0 0 0 12px","color":"#000","textAlign":"left","background":"none","width":"calc(100% - 80px)","lineHeight":"50px","fontSize":"36px","fontWeight":"600"}'>猫咖私人影院系统的设计与实现</span>
			</div>
			
			<div v-if="true" :style='{"margin":"0 10px","fontSize":"14px","color":"#fff","display":"inline-block"}'>0753-1234567</div>
			
			<img v-if="headportrait&&Token" :style='{"width":"40px","margin":"0 0 0 12px","borderRadius":"50%","height":"40px"}' :src="headportrait?baseUrl + headportrait:require('@/assets/avator.png')">
			<div v-if="Token" :style='{"padding":"0 6px","color":"#fff","display":"inline-block","fontSize":"14px","lineHeight":"32px","height":"32px","zIndex":"111"}'>{{username}}</div>
			<div v-if="Token && notAdmin" :style='{"cursor":"pointer","padding":"0 12px","color":"#fff","display":"inline-block","fontSize":"14px","lineHeight":"32px","height":"32px","zIndex":"111"}' @click="goMenu('/index/center')">个人中心</div>
			<el-button v-if="!Token" @click="toLogin()" :style='{"border":"0","padding":"0 12px","margin":"0 10px","color":"#fff","borderRadius":"2px","background":"#ff721b","display":"inline-block","fontSize":"14px","lineHeight":"32px","height":"32px","zIndex":"111"}'>登录/注册</el-button>
			<el-button v-if="Token" @click="logout" :style='{"border":"0","padding":"0px","margin":"0px","color":"#fff","borderRadius":"2px","background":"#ff721b","display":"inline-block","fontSize":"14px","lineHeight":"32px","height":"32px","zIndex":"111"}'>退出</el-button>
		</div>


			<div class="menu-preview" :style='{"padding":"0 200px 0 30%","borderColor":"#fff","margin":"0 auto","top":"80px","borderRadius":"0px","left":"40px","background":"#ffffff","borderWidth":"0","width":"calc(100% - 80px)","position":"absolute","borderStyle":"solid","height":"auto","zIndex":"1001"}'>
			<el-scrollbar wrap-class="scrollbar-wrapper-horizontal">
				<el-menu class="el-menu-horizontal-demo" :style='{"border":0,"padding":"0","listStyle":"none","margin":"0","alignItems":"center","borderRadius":"50px","background":"#FFF","display":"flex","position":"relative","justifyContent":"space-between","height":"160px"}' :default-active="activeMenu" :unique-opened="true" mode="horizontal" :router="true" @select="handleSelect">
					<div class="userinfo" :style='{"width":"84px","padding":"6px 10px 0","display":"none","height":"auto"}'>
					  <el-image :style='{"width":"100%","objectFit":"cover","borderRadius":"20px","display":"block","height":"32px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover"></el-image>
					  <div :style='{"fontSize":"12px","lineHeight":"1.5","color":"#333","textAlign":"center"}'>nickname</div>
					</div>
					<el-menu-item class="home" index="/index/home" @click.native="goMenu('/index/home')">
						<span :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"56px","fontSize":"14px","height":"56px"}' class="icon iconfont icon-shouye-zhihui"></span>
						<span :style='{"padding":"0 10px","lineHeight":"56px","fontSize":"14px","color":"inherit","height":"56px"}'>系统首页</span>
					</el-menu-item>
					<el-menu-item class="item" v-for="(menu, index) in menuList" :index="menu.url" :key="index" @click.native="goMenu(menu.url)">
						<i :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"56px","fontSize":"14px","height":"56px"}' :class="iconArr[index]"></i>
						<span :style='{"padding":"0 10px","lineHeight":"56px","fontSize":"14px","color":"inherit","height":"56px"}'>{{menu.name}}</span>
					</el-menu-item>
					<el-menu-item class="user" index="/index/center" v-if="Token && notAdmin" @click.native="goMenu('/index/center')">
						<span :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"56px","fontSize":"14px","height":"56px"}' class="icon iconfont icon-shouye-zhihui"></span>
						<span :style='{"padding":"0 10px","lineHeight":"56px","fontSize":"14px","color":"inherit","height":"56px"}'>个人中心</span>
					</el-menu-item>
				</el-menu>
			</el-scrollbar>
			</div>




			<div class="swiper3" :style='{"width":"100%","margin":"0 auto","height":"auto"}'>
			  <div class="swiper-container mySwiper3">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
			        <div :style='{"width":"100%","height":"auto"}'>
			          <el-image @click="carouselClick(item.url)" :style='{"objectFit":"cover","width":"100%","height":"550px"}' :src="baseUrl + item.value" fit="cover"></el-image>
			        </div>
			      </div>
			    </div>
			    <!-- Add Pagination -->
			    <div class="swiper-pagination" :style='{"width":"100%","left":"0","bottom":"10px"}'></div>
			    <!-- Add Arrows -->
			    <div class="swiper-button-next" :style='{"width":"24px","margin":"-12px 0 0","top":"50%","display":"none","height":"24px"}'>
			      <span class="icon iconfont icon-jiantou18" :style='{"width":"24px","fontSize":"24px","color":"#fff","height":"24px"}'></span>
			    </div>
			    <div class="swiper-button-prev" :style='{"width":"24px","margin":"-12px 0 0","top":"50%","display":"none","height":"24px"}'>
			      <span class="icon iconfont icon-jiantou39" :style='{"width":"24px","fontSize":"24px","color":"#fff","height":"24px"}'></span>
			    </div>
			  </div>
			</div>
			<router-view></router-view>
			
			<div class="bottom-preview" :style='{"width":"100%","height":"auto"}'>
				<div :style='{"minHeight":"120px","padding":"20px 20%","borderColor":"#ff721b","overflow":"hidden","color":"#fff","textAlign":"center","background":"#000","borderWidth":"6px 0 0","width":"100%","clear":"both","borderStyle":"solid","height":"auto"}'><div v-html="bottomContent"></div></div>
			</div>
		</div>
		
	</div>
</template>

<script>
import Vue from 'vue'
import Swiper from "swiper";
import axios from 'axios'

export default {
    data() {
		return {
            activeIndex: '0',
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"包厢分类","menuJump":"列表","tableName":"baoxiangfenlei"}],"menu":"包厢分类管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除","查看评论"],"menu":"包厢信息","menuJump":"列表","tableName":"baoxiangxinxi"}],"menu":"包厢信息管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除","审核","包厢类型","包厢收益"],"menu":"包厢预订","menuJump":"列表","tableName":"baoxiangyuding"}],"menu":"包厢预订管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"零食分类","menuJump":"列表","tableName":"lingshifenlei"}],"menu":"零食分类管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["新增","查看","修改","删除","查看评论"],"menu":"零食信息","menuJump":"列表","tableName":"lingshixinxi"}],"menu":"零食信息管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","零食销量","日收益"],"menu":"购买零食","menuJump":"列表","tableName":"goumailingshi"}],"menu":"购买零食管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","审核","支付"],"menu":"取消预订","menuJump":"列表","tableName":"quxiaoyuding"}],"menu":"取消预订管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"猫咪品种","menuJump":"列表","tableName":"maomipinzhong"}],"menu":"猫咪品种管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除","猫咪种类"],"menu":"猫咪信息","menuJump":"列表","tableName":"maomixinxi"}],"menu":"猫咪信息管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除"],"menu":"管理员","tableName":"users"}],"menu":"管理员管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"电影资讯分类","tableName":"newstype"},{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-taxi","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-skin","buttons":["查看","删除"],"menu":"在线留言","tableName":"onlinemessage"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"电影资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","查看评论","预订"],"menu":"包厢信息列表","menuJump":"列表","tableName":"baoxiangxinxi"}],"menu":"包厢信息模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","查看评论","购买"],"menu":"零食信息列表","menuJump":"列表","tableName":"lingshixinxi"}],"menu":"零食信息模块"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看"],"menu":"猫咪信息列表","menuJump":"列表","tableName":"maomixinxi"}],"menu":"猫咪信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","支付","取消"],"menu":"包厢预订","menuJump":"列表","tableName":"baoxiangyuding"}],"menu":"包厢预订管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","支付","取消购买"],"menu":"购买零食","menuJump":"列表","tableName":"goumailingshi"}],"menu":"购买零食管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看"],"menu":"取消预订","menuJump":"列表","tableName":"quxiaoyuding"}],"menu":"取消预订管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","查看评论","预订"],"menu":"包厢信息列表","menuJump":"列表","tableName":"baoxiangxinxi"}],"menu":"包厢信息模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","查看评论","购买"],"menu":"零食信息列表","menuJump":"列表","tableName":"lingshixinxi"}],"menu":"零食信息模块"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看"],"menu":"猫咪信息列表","menuJump":"列表","tableName":"maomixinxi"}],"menu":"猫咪信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}],
			baseUrl: '',
			carouselList: [],
			menuList: [],
			form: {
				ask: '',
				userid: localStorage.getItem('userid')
			},
			headportrait: localStorage.getItem('headportrait')?localStorage.getItem('headportrait'):'',
			Token: localStorage.getItem('Token'),
            username: localStorage.getItem('username'),
            notAdmin: localStorage.getItem('sessionTable')!='"users"',
			timer: '',
			iconArr: [
				'el-icon-star-off',
				'el-icon-goods',
				'el-icon-warning',
				'el-icon-question',
				'el-icon-info',
				'el-icon-help',
				'el-icon-picture-outline-round',
				'el-icon-camera-solid',
				'el-icon-video-camera-solid',
				'el-icon-video-camera',
				'el-icon-bell',
				'el-icon-s-cooperation',
				'el-icon-s-order',
				'el-icon-s-platform',
				'el-icon-s-operation',
				'el-icon-s-promotion',
				'el-icon-s-release',
				'el-icon-s-ticket',
				'el-icon-s-management',
				'el-icon-s-open',
				'el-icon-s-shop',
				'el-icon-s-marketing',
				'el-icon-s-flag',
				'el-icon-s-comment',
				'el-icon-s-finance',
				'el-icon-s-claim',
				'el-icon-s-opportunity',
				'el-icon-s-data',
				'el-icon-s-check'
			],
			bottomContent: '',
		}
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.menuList = this.$config.indexNav;
		this.getCarousel();
        if(localStorage.getItem('Token') && localStorage.getItem('Token')!=null) {
			this.getSession()
        }
    },
    mounted() {
        this.activeIndex = localStorage.getItem('keyPath') || '0';


		// banner
		setTimeout(()=>{
			new Swiper(".mySwiper3", {"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"pagination":{"el":".swiper-pagination","clickable":true},"autoplay":{"delay":6000,"disableOnInteraction":false},"effect":"fade"})
		}, 10)

    },
    computed: {
		activeMenu() {
			const route = this.$route
			const {
				meta,
				path
			} = route
			// if st path, the sidebar will highlight the path you sete
			if (meta.activeMenu) {
				return meta.activeMenu
			}
			return path
		},
    },
    watch: {
        $route(newValue) {
            let that = this
            let url = window.location.href
            let arr = url.split('#')
            for (let x in this.menuList) {
                if (newValue.path == this.menuList[x].url) {
                    this.activeIndex = x
                }
            }
            this.Token = localStorage.getItem('Token')
            // window.scrollTo( 0, 100 )
        },
		headportrait(){
			this.$forceUpdate()
		},
    },
    methods: {

		getSession() {
			this.$http.get(`${localStorage.getItem('UserTableName')}/session`, {emulateJSON: true}).then(res => {
				if (res.data.code == 0) {
					localStorage.setItem('sessionForm',JSON.stringify(res.data.data))
					localStorage.setItem('userid', res.data.data.id);
					if(res.data.data.vip) {
						localStorage.setItem('vip', res.data.data.vip);
					}
					if(res.data.data.touxiang) {
						this.headportrait = res.data.data.touxiang
						localStorage.setItem('headportrait', res.data.data.touxiang);
					} else if(res.data.data.headportrait) {
						this.headportrait = res.data.data.headportrait
						localStorage.setItem('headportrait', res.data.data.headportrait);
					}
				}
			});
		},
        handleSelect(keyPath) {
            if (keyPath) {
                localStorage.setItem('keyPath', keyPath)
            }
        },
		toLogin() {
		  this.$router.push('/login');
		},
        logout() {
            localStorage.clear();
            Vue.http.headers.common['Token'] = "";
            this.$router.push('/index/home');
            this.activeIndex = '0'
            localStorage.setItem('keyPath', this.activeIndex)
            this.Token = ''
            this.$forceUpdate()
            this.$message({
                message: '登出成功',
                type: 'success',
                duration: 1000,
            });
        },
		getCarousel() {
			this.$http.get('config/list', {params: { page: 1, limit: 3 }}).then(res => {
				if (res.data.code == 0) {
					this.carouselList = res.data.data.list;
				}
			});
		},
		// 轮播图跳转
		carouselClick(url) {
			if (url) {
				if (url.indexOf('https') != -1) {
					window.open(url)
				} else {
					this.$router.push(url)
				}
			}
		},
		goBackend() {
			window.open(`${this.$config.baseUrl}admin/dist/index.html`, "_blank");
		},
		goMenu(path) {
            this.$router.push(path);
		},
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.menu-preview {
	  .el-scrollbar {
	    height: 100%;
	  
	    & /deep/ .scrollbar-wrapper-vertical {
	      overflow-x: hidden;
	    }
	  
	    & /deep/ .scrollbar-wrapper-horizontal {
	      overflow-y: hidden;
	  
	      .el-scrollbar__view {
	        white-space: nowrap;
	      }
	    }
	  }
	}
	
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home {
				cursor: pointer;
				border: 0;
				padding: 0 20px;
				color: #9E9E9E;
				white-space: nowrap;
				display: flex;
				font-size: 14px;
				line-height: 56px;
				background: #fff;
				align-items: center;
				position: relative;
				list-style: none;
				height: 56px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home:hover {
				color: #FF721B;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home.is-active {
				color: #FF721B;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user {
				cursor: pointer;
				border: 0;
				padding: 0 20px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 14px;
				line-height: 56px;
				background: #fff;
				align-items: center;
				position: relative;
				list-style: none;
				height: 56px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user:hover {
				color: #fff;
				background: red;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user.is-active {
				color: #fff;
				background: blue;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service {
				cursor: pointer;
				border: 0;
				padding: 0 20px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 14px;
				line-height: 56px;
				background: #fff;
				align-items: center;
				position: relative;
				list-style: none;
				height: 56px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service:hover {
				color: #fff;
				background: red;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service.is-active {
				color: #fff;
				background: blue;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop {
				cursor: pointer;
				border: 0;
				padding: 0 20px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 14px;
				line-height: 56px;
				background: #fff;
				align-items: center;
				position: relative;
				list-style: none;
				height: 56px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop:hover {
				color: #fff;
				background: red;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop.is-active {
				color: #fff;
				background: blue;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back {
				cursor: pointer;
				border: 0;
				padding: 0 20px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 14px;
				line-height: 56px;
				background: #fff;
				align-items: center;
				position: relative;
				list-style: none;
				height: 56px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back:hover {
				color: #fff;
				background: red;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back.is-active {
				color: #fff;
				background: blue;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item {
				cursor: pointer;
				padding: 0 20px;
				color: #9E9E9E;
				white-space: nowrap;
				display: flex;
				font-size: 14px;
				border-color: #D8D8D8;
				background: #fff;
				border-width: 0 0 0 1px;
				align-items: center;
				position: relative;
				border-style: solid;
				list-style: none;
				height: 40px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item:hover {
				color: #FF721B;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item.is-active {
				color: #FF721B;
			}
	
	.banner-preview {
	  .el-carousel /deep/ .el-carousel__indicator button {
	    width: 0;
	    height: 0;
	    display: none;
	  }
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: #ff721b;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: #ff721b;
	}

	.banner-preview .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0 0 70px;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li {
		border-radius: 10px;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 0.7;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li.is-active {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 1;
		height: 12px;
	}

    .chat-content {
        padding-bottom: 20px;
        width: 100%;
        margin-bottom: 10px;
        max-height: 300px;
        height: 300px;
        overflow-y: scroll;
        border: 1px solid #eeeeee;
        background: #fff;

        .left-content {
            float: left;
            margin-bottom: 10px;
            padding: 10px;
            max-width: 80%;
        }

        .right-content {
            float: right;
            margin-bottom: 10px;
            padding: 10px;
            max-width: 80%;
        }
    }

    .clear-float {
        clear: both;
    }


	.swiper3 .swiper-button-prev:after {
      display:none;
    }
    .swiper3 .swiper-button-next:after {
      display:none;
    }
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet {
				border-radius: 100%;
				margin: 0 4px;
				background: #000;
				display: inline-block;
				width: 8px;
				opacity: .2;
				height: 8px;
			}
	
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet:hover {
				background: #fff;
				opacity: 1;
			}
	
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet.swiper-pagination-bullet-active {
				background: #fff;
				opacity: 1;
			}
	
	// -------- search --------
	.main-containers .search .select /deep/ .el-input__inner {
				border: 0;
				border-radius: 4px;
				padding: 0 30px 0 10px;
				box-shadow: 0 0 6px rgba(64, 158, 255, .3);
				outline: none;
				color: rgba(64, 158, 255, 1);
				width: 180px;
				font-size: 14px;
				height: 44px;
			}
	
	.main-containers .search .input /deep/ .el-input__inner {
				border: 0;
				border-radius: 4px;
				padding: 0 10px;
				box-shadow: 0 0 6px rgba(64, 158, 255, .3);
				outline: none;
				color: rgba(64, 158, 255, 1);
				width: 180px;
				font-size: 14px;
				height: 44px;
			}
	// -------- search --------
	
	.main-containers .btn-service {
				border: 0;
				padding: 0 8px;
				margin: 0 10px;
				z-index: 111;
				color: #fff;
				background: #ff721b;
				display: inline-block;
				width: auto;
				font-size: 14px;
				line-height: 32px;
				height: 32px;
			}
	
	.main-containers .btn-service:hover {
				color: #fff;
			}
	
	.main-containers .btn-shop {
				border: 0;
				padding: 0 8px;
				margin: 0 10px;
				z-index: 111;
				color: #fff;
				background: #ff721b;
				display: inline-block;
				width: auto;
				font-size: 14px;
				line-height: 32px;
				height: 32px;
			}
	
	.main-containers .btn-shop:hover {
				color: #fff;
			}
</style>
