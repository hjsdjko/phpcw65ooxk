<template>
<div class="center-preview" :style='{"width":"60%","margin":"20px auto 40px","position":"relative","flexWrap":"wrap","background":"#fff","display":"flex"}'>
	<div class="title" :style='{"margin":"10px 0","color":"#333","textAlign":"center","background":"#fff","width":"100%","fontSize":"24px","lineHeight":"54px","fontWeight":"600","order":"0"}'>{{ title }}</div>
	
	<div class="info" :style='{"padding":"30px 20px 40px","boxShadow":"0 1px 6px rgba(0, 0, 0, 0.3)","margin":"0px auto","borderRadius":"0","background":"#ffffff","flexDirection":"column","display":"block","width":"27%","position":"relative","justifyContent":"space-around","height":"auto","order":"2"}'>
		<div :style='{"padding":"0 0 100px","borderColor":"#efefef","color":"#333","textAlign":"center","borderWidth":"0 0 1px 0","width":"100%","lineHeight":"44px","fontSize":"24px","borderStyle":"solid","height":"44px"}'>个人信息</div>
		<div :style='{"padding":"0 0 30px","borderColor":"#efefef","margin":"30px 0 0","borderWidth":"0 0 1px 0","width":"100%","fontSize":0,"borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<el-image :style='{"margin":"0px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"150px","borderStyle":"solid","height":"150px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"padding":"0 10px","borderColor":"#ff721b","margin":"40px 0 0","borderWidth":"0 0 0 2px","background":"#FFEFE9","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-touxiang05" :style='{"color":"#ff721b","padding":"0 5px","fontSize":"24px"}'></span>
			<div :style='{"color":"#333","margin":"0 10px 0 0","fontSize":"14px"}'>用户账号</div>
			<div :style='{"color":"#333","textAlign":"right","fontSize":"14px"}'>{{sessionForm.yonghuzhanghao}}</div>
		</div>
		<div :style='{"padding":"0 10px","borderColor":"#ff721b","margin":"40px 0 0","borderWidth":"0 0 0 2px","background":"#FFEFE9","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-fenxiang" :style='{"color":"#ff721b","padding":"0 5px","fontSize":"24px"}'></span>
			<div :style='{"color":"#333","margin":"0 10px 0 0","fontSize":"14px"}'>用户姓名</div>
			<div :style='{"color":"#333","textAlign":"right","fontSize":"14px"}'>{{sessionForm.yonghuxingming}}</div>
		</div>
		<div :style='{"padding":"0 10px","borderColor":"#ff721b","margin":"40px 0 0","borderWidth":"0 0 0 2px","background":"#FFEFE9","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-xiugai19" :style='{"color":"#ff721b","padding":"0 5px","fontSize":"20px"}'></span>
			<div :style='{"color":"#333","margin":"0 10px 0 0","fontSize":"14px"}'>手机号</div>
			<div :style='{"color":"#333","textAlign":"right","fontSize":"14px"}'>{{sessionForm.shoujihao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#ff721b","margin":"40px 0 0","borderWidth":"0 0 0 2px","background":"#FFEFE9","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-geren14" :style='{"color":"#ff721b","padding":"0 5px","fontSize":"20px"}'></span>
			<div :style='{"color":"#333","margin":"0 10px 0 0","fontSize":"14px"}'>性别</div>
			<div :style='{"color":"#333","textAlign":"right","fontSize":"14px"}'>{{sessionForm.xingbie}}</div>
		</div>
		
	</div>
	
    <el-tabs tab-position="left" :style='{"boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3)","padding":"0","flexWrap":"wrap","background":"#fff","display":"flex","width":"70%","order":"1","height":"auto"}' @tab-click="handleClick">
      <el-tab-pane label="个人中心">
        <el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="80px">
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"#fff","display":"inline-block"}' v-if="userTableName=='yonghu'" label="用户账号" prop="yonghuzhanghao">
            <el-input v-model="sessionForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"#fff","display":"inline-block"}' v-if="userTableName=='yonghu'" label="密码" prop="mima">
            <el-input type="password" v-model="sessionForm.mima" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"#fff","display":"inline-block"}' v-if="userTableName=='yonghu'" label="用户姓名" prop="yonghuxingming">
            <el-input v-model="sessionForm.yonghuxingming" placeholder="用户姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"#fff","display":"inline-block"}' v-if="userTableName=='yonghu'" label="头像">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="yonghutouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"#fff","display":"inline-block"}' v-if="userTableName=='yonghu'" label="手机号" prop="shoujihao">
            <el-input v-model="sessionForm.shoujihao" placeholder="手机号" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"#fff","display":"inline-block"}' v-if="userTableName=='yonghu'" label="性别">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"0","margin":"0"}'>
            <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#ff721b","width":"110px","lineHeight":"36px","fontSize":"14px","height":"36px"}' type="primary" @click="onSubmit('sessionForm')">更新信息</el-button>
            <el-button :style='{"border":"0px solid #ff721b","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#170000","width":"110px","lineHeight":"36px","fontSize":"14px","height":"36px"}' type="danger" @click="logout">退出登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
		<el-tab-pane v-for="(item,index) in menuList" :key="index" v-if="hasBack(item.menu)" :label="item.child[0].menu" :name="item.child[0].tableName"></el-tab-pane>
	  
      <el-tab-pane label="我的收藏"></el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
  import config from '@/config/config'
  import menu from '@/config/menu'
  import Vue from 'vue'
  export default {
    //数据集合
    data() {
      return {
        title: '个人中心',
        baseUrl: config.baseUrl,
        sessionForm: {},
        rules: {},
		menuList: [],
        disabled: false,
        uploadUrl: config.baseUrl + 'file/upload',
        imageUrl: '',
        headers: {Token: localStorage.getItem('Token')},
        userTableName: localStorage.getItem('UserTableName'),
        dynamicProp: {}
      }
    },
    created() {
		let menus = menu.list()
		for(let x in menus){
			if(menus[x].tableName == this.userTableName){
				this.menuList = menus[x].backMenu
			}
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'yonghuzhanghao', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'yonghuxingming', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'shoujihao', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}

      if ('yonghu' == this.userTableName) {
        this.$set(this.rules, 'yonghuzhanghao', [{ required: true, message: '请输入用户账号', trigger: 'blur' }]);
      }
      if ('yonghu' == this.userTableName) {
        this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
      }
      if ('yonghu' == this.userTableName) {
        this.$set(this.rules, 'yonghuxingming', [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]);
      }
			if ('yonghu' == this.userTableName) {
        this.$set(this.rules, 'shoujihao', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
      }

      this.init();
      this.sessionForm = JSON.parse(localStorage.getItem('sessionForm'))
    },
    //方法集合
    methods: {
      init() {
        if ('yonghu' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
      },
	  setSession(){
		  localStorage.setItem('sessionForm',JSON.stringify(this.sessionForm))
	  },
      onSubmit(formName) {
		if(`yonghu` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
        this.$refs[formName].validate((valid) => {
			if (valid) {
				this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
					if (res.data.code == 0) {
						this.setSession()
						this.$message({
							message: '更新成功',
							type: 'success',
							duration: 1500
						});
					}
				});
			} else {
				return false;
			}
        });
      },
      yonghutouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      handleClick(tab, event) {
        switch(event.target.outerText) {
          case '个人中心':
            tab.$router.push('/index/center');
            break;
          case '我的收藏':
            localStorage.setItem('storeupType', 1);
            tab.$router.push('/index/storeup');
            break;
		  default:
		  	tab.$router.push(`/index/${tab.name}?centerType=1`);
        }

        this.title = event.target.outerText;
      },
      logout() {
        localStorage.clear();
        Vue.http.headers.common['Token'] = "";
        this.$router.push('/index/home');
        this.activeIndex = '0'
        localStorage.setItem('keyPath', this.activeIndex)
        this.$forceUpdate()
        this.$message({
            message: '登出成功',
            type: 'success',
            duration: 1500,
        });
      },
	  hasBack(name){
		  switch(name){
			case '我的收藏管理':
				return false
				break;
			default:
				return true
		  }
	  }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .center-preview {
  
    .el-tabs {
      & /deep/ .el-tabs__header {
        .el-tabs__nav-wrap {
          margin: 0;
  
          &::after {
            content: none;
          }
        }
  
        .el-tabs__active-bar {
          display: none !important;
        }
      }
  
      .center-preview-pv {
        .el-date-editor.el-input {
          width: auto;
        }
  
        .balance {
          .el-input {
            width: auto;
          }
        }
      }
    }
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header {
	padding: 0px 0;
	margin: 0 0px 20px;
	display: flex;
	border-color: #eee;
	line-height: 80px;
	border-radius: 0 0 30px 30px;
	box-shadow: 1px 2px 4px #ccc;
	background: #fff;
	width: 100%;
	justify-content: space-around;
	border-width: 0;
	align-items: center;
	position: relative;
	border-style: solid;
	height: 80px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item {
  	padding: 0 10px;
  	color: #333;
  	font-weight: 500;
  	display: inline-block;
  	font-size: 16px;
  	line-height: 50px;
  	position: relative;
  	text-align: center;
  	height: 50px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
  	padding: 0 10px;
  	color: #ff721b;
  	font-weight: 500;
  	font-size: 16px;
  	line-height: 50px;
  	position: relative;
  	text-align: center;
  	height: 50px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
  	padding: 0 10px;
  	color: #ff721b;
  	font-weight: 500;
  	display: inline-block;
  	font-size: 16px;
  	line-height: 50px;
  	position: relative;
  	text-align: center;
  	height: 50px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__content .el-tab-pane {
  	padding: 10px;
  	background: #fff;
  	width: 100%;
  	height: auto;
  }
  
  .center-preview-pv .el-form-item /deep/ .el-form-item__label {
  	padding: 0 10px 0 0;
  	color: #666;
  	font-weight: 500;
  	width: 80px;
  	font-size: 14px;
  	line-height: 40px;
  	text-align: right;
  }
  
  .center-preview-pv .el-form-item .el-form-item__content {
    margin-left: 80px;
  }
  
  .center-preview-pv .el-input /deep/ .el-input__inner {
  	border: 1px solid #666;
  	border-radius: 0px;
  	padding: 0 12px;
  	outline: none;
  	color: #000;
  	width: auto;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv .el-select /deep/ .el-input__inner {
  	border: 1px solid #666;
  	border-radius: 0px;
  	padding: 0 12px;
  	outline: none;
  	color: #000;
  	width: auto;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv .el-date-editor /deep/ .el-input__inner {
  	border: 1px solid #666;
  	border-radius: 0px;
  	padding: 0 10px 0 30px;
  	outline: none;
  	color: #000;
  	width: auto;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv /deep/ .avatar-uploader-icon {
  	border: 1px solid #666;
  	cursor: pointer;
  	border-radius: 30px;
  	color: #000;
  	width: 150px;
  	font-size: 32px;
  	line-height: 60px;
  	text-align: center;
  	height: 60px;
  }
  
  .center-preview-pv .el-form-item.balance /deep/ .el-input__inner {
  	border: 1px solid #666;
  	border-radius: 0px;
  	padding: 0 12px;
  	outline: none;
  	color: #000;
  	display: inline-block;
  	width: 200px;
  	font-size: 14px;
  	height: 40px;
  }
</style>
