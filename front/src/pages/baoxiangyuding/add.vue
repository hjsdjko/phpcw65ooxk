<template>
<div :style='{"width":"60%","padding":"20px","margin":"0 auto","overflow":"hidden","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"width":"100%","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3)","padding":"30px 40px 40px","margin":"20px auto 40px","position":"relative"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="预约编号" prop="yuyuebianhao">
              <el-input v-model="ruleForm.yuyuebianhao" placeholder="预约编号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="包厢名称" prop="baoxiangmingcheng">
            <el-input  v-model="ruleForm.baoxiangmingcheng" 
                placeholder="包厢名称" clearable :readonly=" false  ||ro.baoxiangmingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="包厢类型" prop="baoxiangleixing">
            <el-input  v-model="ruleForm.baoxiangleixing" 
                placeholder="包厢类型" clearable :readonly=" false  ||ro.baoxiangleixing"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="容纳人数" prop="rongnarenshu">
            <el-input  v-model.number="ruleForm.rongnarenshu" 
                placeholder="容纳人数" clearable :readonly=" false  ||ro.rongnarenshu"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="小时价格" prop="xiaoshijiage">
            <el-input type="number" v-model.number="ruleForm.xiaoshijiage" 
                placeholder="小时价格" clearable :readonly=" false  ||ro.xiaoshijiage"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="预约时长" prop="yuyueshizhang">
            <el-input  v-model.number="ruleForm.yuyueshizhang" 
                placeholder="预约时长" clearable :readonly=" false  ||ro.yuyueshizhang"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="总金额" prop="zongjine">
              <el-input v-model="zongjine" placeholder="总金额" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="下单时间" prop="xiadanshijian">
              <el-date-picker
				  :disabled=" false  ||ro.xiadanshijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.xiadanshijian" 
                  type="datetime"
                  placeholder="下单时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="备注" prop="beizhu">
            <el-input  v-model="ruleForm.beizhu" 
                placeholder="备注" clearable :readonly=" false  ||ro.beizhu"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="用户账号" prop="yonghuzhanghao">
            <el-input  v-model="ruleForm.yonghuzhanghao" 
                placeholder="用户账号" clearable :readonly=" false  ||ro.yonghuzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="用户姓名" prop="yonghuxingming">
            <el-input  v-model="ruleForm.yonghuxingming" 
                placeholder="用户姓名" clearable :readonly=" false  ||ro.yonghuxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="手机号" prop="shoujihao">
            <el-input  v-model="ruleForm.shoujihao" 
                placeholder="手机号" clearable :readonly=" false  ||ro.shoujihao"></el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#ff721b","width":"110px","lineHeight":"36px","fontSize":"14px","height":"36px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid #ff721b","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#170000","width":"110px","lineHeight":"36px","fontSize":"14px","height":"36px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            yuyuebianhao : false,
            baoxiangmingcheng : false,
            baoxiangleixing : false,
            rongnarenshu : false,
            xiaoshijiage : false,
            yuyueshizhang : false,
            zongjine : false,
            xiadanshijian : false,
            beizhu : false,
            yonghuzhanghao : false,
            yonghuxingming : false,
            shoujihao : false,
            sfsh : false,
            shhf : false,
            ispay : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          yuyuebianhao: this.getUUID(),
          baoxiangmingcheng: '',
          baoxiangleixing: '',
          rongnarenshu: '',
          xiaoshijiage: '',
          yuyueshizhang: '',
          zongjine: '',
          xiadanshijian: '',
          beizhu: '',
          yonghuzhanghao: '',
          yonghuxingming: '',
          shoujihao: '',
          ispay: '',
        },


        rules: {
          yuyuebianhao: [
          ],
          baoxiangmingcheng: [
          ],
          baoxiangleixing: [
          ],
          rongnarenshu: [
            { required: true, message: '容纳人数不能为空', trigger: 'blur' },
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          xiaoshijiage: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          yuyueshizhang: [
            { required: true, message: '预约时长不能为空', trigger: 'blur' },
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          zongjine: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          xiadanshijian: [
            { required: true, message: '下单时间不能为空', trigger: 'blur' },
          ],
          beizhu: [
          ],
          yonghuzhanghao: [
          ],
          yonghuxingming: [
          ],
          shoujihao: [
          ],
          sfsh: [
          ],
          shhf: [
          ],
          ispay: [
          ],
        },
		centerType: false,
      };
    },
    computed: {


        zongjine:{
            get: function () {
                return 1*this.ruleForm.xiaoshijiage*this.ruleForm.yuyueshizhang
            }
        },

    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='yuyuebianhao'){
              this.ruleForm.yuyuebianhao = obj[o];
              this.ro.yuyuebianhao = true;
              continue;
            }
            if(o=='baoxiangmingcheng'){
              this.ruleForm.baoxiangmingcheng = obj[o];
              this.ro.baoxiangmingcheng = true;
              continue;
            }
            if(o=='baoxiangleixing'){
              this.ruleForm.baoxiangleixing = obj[o];
              this.ro.baoxiangleixing = true;
              continue;
            }
            if(o=='rongnarenshu'){
              this.ruleForm.rongnarenshu = obj[o];
              this.ro.rongnarenshu = true;
              continue;
            }
            if(o=='xiaoshijiage'){
              this.ruleForm.xiaoshijiage = obj[o];
              this.ro.xiaoshijiage = true;
              continue;
            }
            if(o=='yuyueshizhang'){
              this.ruleForm.yuyueshizhang = obj[o];
              this.ro.yuyueshizhang = true;
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
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.yonghuzhanghao!=''&&json.yonghuzhanghao) || json.yonghuzhanghao==0){
                this.ruleForm.yonghuzhanghao = json.yonghuzhanghao
            }
            if((json.yonghuxingming!=''&&json.yonghuxingming) || json.yonghuxingming==0){
                this.ruleForm.yonghuxingming = json.yonghuxingming
            }
            if((json.shoujihao!=''&&json.shoujihao) || json.shoujihao==0){
                this.ruleForm.shoujihao = json.shoujihao
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`baoxiangyuding/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

		  if(this.ruleForm.yuyuebianhao){
			  this.ruleForm.yuyuebianhao = String(this.ruleForm.yuyuebianhao)
		  }
          this.ruleForm.zongjine = this.zongjine
        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('baoxiangyuding/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post(`baoxiangyuding/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post(`baoxiangyuding/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
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
        this.$router.go(-1);
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #999;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #000;
	  width: 300px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #999;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #000;
	  width: auto;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #999;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #000;
	  width: auto;
	  font-size: 14px;
	  height: 40px;
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
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
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
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
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
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #999;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
