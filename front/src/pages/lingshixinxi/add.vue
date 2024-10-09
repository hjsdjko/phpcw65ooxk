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
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="零食名称" prop="lingshimingcheng">
            <el-input  v-model="ruleForm.lingshimingcheng" 
                placeholder="零食名称" clearable :readonly=" false  ||ro.lingshimingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}'  label="零食分类" prop="lingshifenlei">
            <el-select v-model="ruleForm.lingshifenlei" placeholder="请选择零食分类"  >
              <el-option
                  v-for="(item,index) in lingshifenleiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="图片" v-if="type!='cross' || (type=='cross' && !ro.tupian)" prop="tupian">
            <file-upload
            tip="点击上传图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.tupian?ruleForm.tupian:''"
            @change="tupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' class="upload" v-else label="图片" prop="tupian">
                <img v-if="ruleForm.tupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.tupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.tupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="品牌" prop="pinpai">
            <el-input  v-model="ruleForm.pinpai" 
                placeholder="品牌" clearable :readonly=" false  ||ro.pinpai"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="价格" prop="jiage">
            <el-input type="number" v-model.number="ruleForm.jiage" 
                placeholder="价格" clearable :readonly=" false  ||ro.jiage"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="数量" prop="shuliang">
            <el-input  v-model.number="ruleForm.shuliang" 
                placeholder="数量" clearable :readonly=" false  ||ro.shuliang"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="保质期" prop="baozhiqi">
            <el-input  v-model="ruleForm.baozhiqi" 
                placeholder="保质期" clearable :readonly=" false  ||ro.baozhiqi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="上架日期" prop="shangjiariqi">
            <el-input  v-model="ruleForm.shangjiariqi" 
                placeholder="上架日期" clearable :readonly=" false  ||ro.shangjiariqi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"45%","padding":"10px","margin":"0 2% 10px","background":"#fff","display":"inline-block"}' label="零食详情" prop="lingshixiangqing">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="零食详情"
              v-model="ruleForm.lingshixiangqing">
            </el-input>
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
            lingshimingcheng : false,
            lingshifenlei : false,
            tupian : false,
            pinpai : false,
            jiage : false,
            shuliang : false,
            baozhiqi : false,
            shangjiariqi : false,
            lingshixiangqing : false,
            clicktime : false,
            clicknum : false,
            discussnum : false,
            storeupnum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          lingshimingcheng: '',
          lingshifenlei: '',
          tupian: '',
          pinpai: '',
          jiage: '',
          shuliang: '',
          baozhiqi: '',
          shangjiariqi: '',
          lingshixiangqing: '',
          clicktime: '',
          clicknum: '',
          discussnum: '',
          storeupnum: '',
        },
        lingshifenleiOptions: [],


        rules: {
          lingshimingcheng: [
            { required: true, message: '零食名称不能为空', trigger: 'blur' },
          ],
          lingshifenlei: [
          ],
          tupian: [
          ],
          pinpai: [
            { required: true, message: '品牌不能为空', trigger: 'blur' },
          ],
          jiage: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          shuliang: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          baozhiqi: [
          ],
          shangjiariqi: [
          ],
          lingshixiangqing: [
          ],
          clicktime: [
          ],
          clicknum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          discussnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          storeupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
		centerType: false,
      };
    },
    computed: {



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
            if(o=='lingshimingcheng'){
              this.ruleForm.lingshimingcheng = obj[o];
              this.ro.lingshimingcheng = true;
              continue;
            }
            if(o=='lingshifenlei'){
              this.ruleForm.lingshifenlei = obj[o];
              this.ro.lingshifenlei = true;
              continue;
            }
            if(o=='tupian'){
              this.ruleForm.tupian = obj[o].split(",")[0];
              this.ro.tupian = true;
              continue;
            }
            if(o=='pinpai'){
              this.ruleForm.pinpai = obj[o];
              this.ro.pinpai = true;
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
            if(o=='baozhiqi'){
              this.ruleForm.baozhiqi = obj[o];
              this.ro.baozhiqi = true;
              continue;
            }
            if(o=='shangjiariqi'){
              this.ruleForm.shangjiariqi = obj[o];
              this.ro.shangjiariqi = true;
              continue;
            }
            if(o=='lingshixiangqing'){
              this.ruleForm.lingshixiangqing = obj[o];
              this.ro.lingshixiangqing = true;
              continue;
            }
            if(o=='clicktime'){
              this.ruleForm.clicktime = obj[o];
              this.ro.clicktime = true;
              continue;
            }
            if(o=='clicknum'){
              this.ruleForm.clicknum = obj[o];
              this.ro.clicknum = true;
              continue;
            }
            if(o=='discussnum'){
              this.ruleForm.discussnum = obj[o];
              this.ro.discussnum = true;
              continue;
            }
            if(o=='storeupnum'){
              this.ruleForm.storeupnum = obj[o];
              this.ro.storeupnum = true;
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
          }
        });
        this.$http.get('option/lingshifenlei/lingshifenlei', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.lingshifenleiOptions = res.data.data;
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`lingshixinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

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
                 this.$http.get('lingshixinxi/list', {
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


                          this.$http.post(`lingshixinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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


                  this.$http.post(`lingshixinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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
      tupianUploadChange(fileUrls) {
          this.ruleForm.tupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
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
