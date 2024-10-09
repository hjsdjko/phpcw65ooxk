<template>
	<div class="addEdit-block" :style='{"padding":"30px","fontSize":"14px","color":"#666","background":"none"}'>
		<el-form
			:style='{"border":"0px solid #bababa","padding":"30px 30px 20px","boxShadow":"0 1px 0px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24)","borderRadius":"0px","alignItems":"flex-start","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","fontSize":"inherit"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="150px"
		>
			<template >
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'" label="订单编号" prop="dingdanbianhao">
					<el-input v-model="ruleForm.dingdanbianhao" placeholder="订单编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.dingdanbianhao" label="订单编号" prop="dingdanbianhao">
					<el-input v-model="ruleForm.dingdanbianhao" placeholder="订单编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="零食名称" prop="lingshimingcheng">
					<el-input  v-model="ruleForm.lingshimingcheng" placeholder="零食名称" clearable  :readonly="ro.lingshimingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="零食名称" prop="lingshimingcheng">
					<el-input v-model="ruleForm.lingshimingcheng" placeholder="零食名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="upload" v-if="type!='info' && !ro.tupian" label="图片" prop="tupian">
					<file-upload
						tip="点击上传图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.tupian?ruleForm.tupian:''"
						@change="tupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="upload" v-else-if="ruleForm.tupian" label="图片" prop="tupian">
					<img v-if="ruleForm.tupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.tupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.tupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="价格" prop="jiage">
					<el-input type="number" v-model.number="ruleForm.jiage" placeholder="价格" clearable  :readonly="ro.jiage"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="价格" prop="jiage">
					<el-input v-model="ruleForm.jiage" placeholder="价格" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="数量" prop="shuliang">
					<el-input  v-model.number="ruleForm.shuliang" placeholder="数量" clearable  :readonly="ro.shuliang"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="数量" prop="shuliang">
					<el-input v-model="ruleForm.shuliang" placeholder="数量" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="总金额" prop="zongjine">
					<el-input v-model="zongjine" placeholder="总金额" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.zongjine" label="总金额" prop="zongjine">
					<el-input v-model="ruleForm.zongjine" placeholder="总金额" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="date" v-if="type!='info'" label="下单时间" prop="xiadanshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.xiadanshijian" 
						type="datetime"
						:readonly="ro.xiadanshijian"
						placeholder="下单时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.xiadanshijian" label="下单时间" prop="xiadanshijian">
					<el-input v-model="ruleForm.xiadanshijian" placeholder="下单时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="备注" prop="beizhu">
					<el-input  v-model="ruleForm.beizhu" placeholder="备注" clearable  :readonly="ro.beizhu"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="备注" prop="beizhu">
					<el-input v-model="ruleForm.beizhu" placeholder="备注" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="用户账号" prop="yonghuzhanghao">
					<el-input  v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" clearable  :readonly="ro.yonghuzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="用户姓名" prop="yonghuxingming">
					<el-input  v-model="ruleForm.yonghuxingming" placeholder="用户姓名" clearable  :readonly="ro.yonghuxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="手机号" prop="shoujihao">
					<el-input  v-model="ruleForm.shoujihao" placeholder="手机号" clearable  :readonly="ro.shoujihao"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="手机号" prop="shoujihao">
					<el-input v-model="ruleForm.shoujihao" placeholder="手机号" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"10px 0 20px","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"30px 0","alignItems":"center","textAlign":"center","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","display":"flex","width":"100%","perspective":"320px","-webkitPerspective":"320px","fontSize":"48px","justifyContent":"flex-start"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao16" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					保存
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao09" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui01" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				dingdanbianhao : false,
				lingshimingcheng : false,
				tupian : false,
				jiage : false,
				shuliang : false,
				zongjine : false,
				xiadanshijian : false,
				beizhu : false,
				yonghuzhanghao : false,
				yonghuxingming : false,
				shoujihao : false,
				ispay : false,
			},
			
			
			ruleForm: {
				dingdanbianhao: this.getUUID(),
				lingshimingcheng: '',
				tupian: '',
				jiage: '',
				shuliang: '',
				zongjine: '',
				xiadanshijian: '',
				beizhu: '',
				yonghuzhanghao: '',
				yonghuxingming: '',
				shoujihao: '',
			},
		

			
			rules: {
				dingdanbianhao: [
				],
				lingshimingcheng: [
				],
				tupian: [
				],
				jiage: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				shuliang: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				zongjine: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				xiadanshijian: [
				],
				beizhu: [
				],
				yonghuzhanghao: [
				],
				yonghuxingming: [
				],
				shoujihao: [
				],
				ispay: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {


		zongjine:{
			get: function () {
				return 1*this.ruleForm.jiage*this.ruleForm.shuliang
			}
		},

	},
    components: {
    },
	created() {
		this.ruleForm.xiadanshijian = this.getCurDateTime()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='dingdanbianhao'){
							this.ruleForm.dingdanbianhao = obj[o];
							this.ro.dingdanbianhao = true;
							continue;
						}
						if(o=='lingshimingcheng'){
							this.ruleForm.lingshimingcheng = obj[o];
							this.ro.lingshimingcheng = true;
							continue;
						}
						if(o=='tupian'){
							this.ruleForm.tupian = obj[o];
							this.ro.tupian = true;
							continue;
						}
						if(o=='jiage'){
							this.ruleForm.jiage = obj[o];
							this.ro.jiage = true;
							continue;
						}
						if(o=='shuliang'){
							this.ruleForm.shuliang = obj[o];
							this.ro.shuliang = true;
							continue;
						}
						if(o=='zongjine'){
							this.ruleForm.zongjine = obj[o];
							this.ro.zongjine = true;
							continue;
						}
						if(o=='xiadanshijian'){
							this.ruleForm.xiadanshijian = obj[o];
							this.ro.xiadanshijian = true;
							continue;
						}
						if(o=='beizhu'){
							this.ruleForm.beizhu = obj[o];
							this.ro.beizhu = true;
							continue;
						}
						if(o=='yonghuzhanghao'){
							this.ruleForm.yonghuzhanghao = obj[o];
							this.ro.yonghuzhanghao = true;
							continue;
						}
						if(o=='yonghuxingming'){
							this.ruleForm.yonghuxingming = obj[o];
							this.ro.yonghuxingming = true;
							continue;
						}
						if(o=='shoujihao'){
							this.ruleForm.shoujihao = obj[o];
							this.ro.shoujihao = true;
							continue;
						}
				}
				




				this.ruleForm.shuliang = 0
				this.ro.shuliang = false;








			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(((json.yonghuzhanghao!=''&&json.yonghuzhanghao) || json.yonghuzhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuzhanghao = json.yonghuzhanghao
						this.ro.yonghuzhanghao = true;
					}
					if(((json.yonghuxingming!=''&&json.yonghuxingming) || json.yonghuxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuxingming = json.yonghuxingming
						this.ro.yonghuxingming = true;
					}
					if(((json.shoujihao!=''&&json.shoujihao) || json.shoujihao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.shoujihao = json.shoujihao
						this.ro.shoujihao = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `goumailingshi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
		if(this.ruleForm.dingdanbianhao) {
			this.ruleForm.dingdanbianhao = String(this.ruleForm.dingdanbianhao)
		}
        this.ruleForm.zongjine = this.zongjine






	if(this.ruleForm.tupian!=null) {
		this.ruleForm.tupian = this.ruleForm.tupian.replace(new RegExp(this.$base.url,"g"),"");
	}



















var objcross = this.$storage.getObj('crossObj');
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
		  if(!this.ruleForm.shuliang){
			  this.$message.error("数量不能为空");
			  return
		  }
	      objcross.shuliang = objcross.shuliang - this.ruleForm.shuliang
	      if(objcross.shuliang<0){
				this.$message.error("数量不足");
				return
	      }
                }

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                              this.$http({
                                  url: `${table}/update`,
                                  method: "post",
                                  data: objcross
                                }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "goumailingshi/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `goumailingshi/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.goumailingshiCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
                      this.$http({
                          url: `${table}/update`,
                          method: "post",
                          data: objcross
                        }).then(({ data }) => {});
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `goumailingshi/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
                  this.$http({
                      url: `${table}/update`,
                      method: "post",
                      data: objcross
                    }).then(({ data }) => {});
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.goumailingshiCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.goumailingshiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    tupianUploadChange(fileUrls) {
	    this.ruleForm.tupian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #333;
	  	  font-weight: 500;
	  	  display: inline-block;
	  	  width: 150px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 39px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  height: 39px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  height: 39px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #ddd;
	  	  line-height: 60px;
	  	  border-radius: 0px;
	  	  background: none;
	  	  width: 140px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #ddd;
	  	  line-height: 60px;
	  	  border-radius: 0px;
	  	  background: none;
	  	  width: 140px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #ddd;
	  	  line-height: 60px;
	  	  border-radius: 0px;
	  	  background: none;
	  	  width: 140px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  padding: 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 50%;
	  	  height: auto;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 0px solid #a768f3;
				cursor: pointer;
				padding: 0 20px;
				margin: 0px 4px;
				color: #fff;
				display: inline-block;
				font-size: 14px;
				line-height: 24px;
				border-radius: 0px;
				outline: none;
				background: rgba(28,132,198,.6);
				width: auto;
				height: 30px;
			}
	
	.add-update-preview .btn .btn1:hover {
				transform: translate3d(0px, 0px, 0px);
				background: rgba(28,132,198,1);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 0px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 0px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: rgba(28,132,198,.8);
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 30px;
			}
	
	.add-update-preview .btn .btn2:hover {
				transform: translate3d(0px, 0px, 0px);
				background: rgba(28,132,198,1);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 0px solid #0260ad;
				cursor: pointer;
				border-radius: 0px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #1c84c6;
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 30px;
			}
	
	.add-update-preview .btn .btn3:hover {
				transform: translate3d(0px, 0px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 0px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 0px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: rgba(28,132,198,.8);
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 30px;
			}
	
	.add-update-preview .btn .btn4:hover {
				transform: translate3d(0px, 0px, 0px);
				background: rgba(28,132,198,1);
				opacity: 1;
			}
	
	.add-update-preview .btn .btn5 {
				border: 0px solid #6c757d;
				cursor: pointer;
				border-radius: 0px;
				padding: 0 20px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: rgba(28,132,198,.6);
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 30px;
			}
	
	.add-update-preview .btn .btn5:hover {
				transform: translate3d(0px, 0px, 0px);
				background: rgba(28,132,198,1);
				opacity: 1;
			}
</style>
