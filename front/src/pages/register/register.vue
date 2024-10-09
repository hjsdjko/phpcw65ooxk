<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231027/d8df5c0e259243699a639a32c7803c8a.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"width":"600px","padding":"20px","margin":"0","position":"relative","borderRadius":"10px","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="true" :style='{"width":"100%","margin":"0 0 30px 0","lineHeight":"44px","fontSize":"30px","color":"#fff","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>猫咖私人影院系统的设计与实现注册</p></div>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="yonghuzhanghao">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#fff","textAlign":"right","display":"inline-block","width":"120px","lineHeight":"44px","fontSize":"14px"}' :class="changeRules('yonghuzhanghao')?'required':''">用户账号：</div>
				<el-input v-model="registerForm.yonghuzhanghao"  placeholder="请输入用户账号" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#fff","textAlign":"right","display":"inline-block","width":"120px","lineHeight":"44px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#fff","textAlign":"right","display":"inline-block","width":"120px","lineHeight":"44px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="yonghuxingming">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#fff","textAlign":"right","display":"inline-block","width":"120px","lineHeight":"44px","fontSize":"14px"}' :class="changeRules('yonghuxingming')?'required':''">用户姓名：</div>
				<el-input v-model="registerForm.yonghuxingming"  placeholder="请输入用户姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#fff","textAlign":"right","display":"inline-block","width":"120px","lineHeight":"44px","fontSize":"14px"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yonghutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="shoujihao">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#fff","textAlign":"right","display":"inline-block","width":"120px","lineHeight":"44px","fontSize":"14px"}' :class="changeRules('shoujihao')?'required':''">手机号：</div>
				<el-input v-model="registerForm.shoujihao"  placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto 20px","height":"auto"}' v-if="tableName=='yonghu'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#fff","textAlign":"right","display":"inline-block","width":"120px","lineHeight":"44px","fontSize":"14px"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yonghuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","color":"#fff","bottom":"70px","display":"block","right":"-400px","outline":"none","borderRadius":"0px","background":"rgba(255,255,255,0.3)","width":"343px","fontSize":"26px","position":"absolute","height":"60px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 6px rgba(64, 158, 255, .5)","margin":"20px auto 5px","color":"#fff","display":"none","outline":"none","borderRadius":"8px","background":"rgba(64, 158, 255, 1)","width":"80%","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","color":"#fff","bottom":"50px","display":"inline-block","lineHeight":"1","fontSize":"12px","textDecoration":"none","position":"absolute","right":"-350px"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			rules: {},
			requiredRules: {},
            yonghuxingbieOptions: [],
		}
    },
	mounted() {
		this.tableName = this.$route.query.role;
		if(this.tableName=='yonghu'){
			this.registerForm = {
                yonghuzhanghao: '',
                mima: '',
                yonghuxingming: '',
                touxiang: '',
                shoujihao: '',
                xingbie: '',
			}
		}
		if ('yonghu' == this.tableName) {
			this.requiredRules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }]
		}
		if ('yonghu' == this.tableName) {
			this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
		}
		if ('yonghu' == this.tableName) {
			this.requiredRules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }]
		}
	},
    created() {
      this.pageFlag = this.$route.query.pageFlag;
      if ('yonghu' == this.tableName) {
        this.rules.yonghuzhanghao = [{ required: true, message: '请输入用户账号', trigger: 'blur' }];
      }
      if ('yonghu' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('yonghu' == this.tableName) {
        this.rules.yonghuxingming = [{ required: true, message: '请输入用户姓名', trigger: 'blur' }];
      }
      if ('yonghu' == this.tableName) {
        this.rules.shoujihao = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
        this.yonghuxingbieOptions = "男,女".split(',');
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      yonghutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$message.error(`用户账号不能为空`);
					return
				}
               if(`yonghu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `yonghu` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.yonghuxingming) && `yonghu` == this.tableName){
					this.$message.error(`用户姓名不能为空`);
					return
				}
					if(`yonghu` == this.tableName && this.registerForm.shoujihao &&(!this.$validate.isMobile2(this.registerForm.shoujihao))){
						this.$message.error(`手机号应输入手机格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20231027/d8df5c0e259243699a639a32c7803c8a.png);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 3px solid #fff;
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: inset 0px 0px 16px 0px #332001;
						outline: none;
						color: #fff;
						background: transparent;
						width: 100%;
						font-size: 14px;
						min-width: 400px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 3px solid #fff;
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: inset 0px 0px 16px 0px #332001;
						outline: none;
						color: #fff;
						background: transparent;
						width: 100%;
						font-size: 14px;
						min-width: 400px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 3px solid #fff;
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: inset 0px 0px 16px 0px #332001;
						outline: none;
						color: #fff;
						background: transparent;
						width: 100%;
						font-size: 14px;
						min-width: 400px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 3px solid #fff;
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: inset 0px 0px 16px 0px #332001;
						outline: none;
						color: #fff;
						background: transparent;
						width: 100%;
						font-size: 14px;
						min-width: 400px;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 3px solid #fff;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #fff;
		  		  background: rgba(255,255,255,0);
		  		  width: 120px;
		  		  font-size: 24px;
		  		  line-height: 56px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 3px solid #fff;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #fff;
		  		  background: rgba(255,255,255,0);
		  		  width: 120px;
		  		  font-size: 24px;
		  		  line-height: 56px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 3px solid #fff;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #fff;
		  		  background: rgba(255,255,255,0);
		  		  width: 120px;
		  		  font-size: 24px;
		  		  line-height: 56px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 110px;
				position: absolute;
				content: "*";
			}
</style>
