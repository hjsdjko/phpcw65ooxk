<template>
<div>
	<div :style='{"padding":"0 20px","margin":"-60px 0 0 0","borderRadius":"0","alignItems":"center","background":"rgba(0,0,0,0.5)","display":"flex","width":"100%","justifyContent":"center","height":"60px"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'Ξ'" :style='{"alignItems":"center","background":"rgba(0,0,0,0.5)","display":"flex","width":"100%","fontSize":"14px","justifyContent":"center","zIndex":"11","height":"100%"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index"><a>{{item.name}}</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div v-if="centerType" :style='{"padding":"0 20px","margin":"-60px 0 0 0","borderRadius":"0","alignItems":"center","background":"rgba(0,0,0,0.5)","display":"flex","width":"100%","justifyContent":"center","height":"60px"}'>
		<el-button size="mini" @click="backClick">返回</el-button>
	</div>
	<div class="list-preview" :style='{"width":"60%","margin":"0px auto","overflow":"hidden","background":"#fff"}'>
		

		<div class="category-3" :style='{"border":"1px solid #000","padding":"0","margin":"120px 0 0","background":"#fff","flexDirection":"column","display":"flex","width":"200px","float":"right","height":"auto"}'>
			<div class="item" :class="swiperIndex == '-1' ? 'active' : ''" @click="getList(1, '全部')" :plain="isPlain">
				<div :style='{"color":"inherit","textAlign":"center","fontSize":"14px"}'>全部</div>
			</div>
			<div class="item" :class="swiperIndex == index ? 'active' : ''" v-for="(item, index) in fenlei" :key="index" @click="getList(1, item[feileiColumn], 'btn' + index)" :ref="'btn' + index" plain>
				<img v-if="item.image" :style='{"width":"30px","margin":"0 5px 0 0","objectFit":"cover","borderRadius":"100%","display":"block","height":"30px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
				<div :style='{"color":"inherit","textAlign":"center","fontSize":"14px"}'>{{item[feileiColumn]}}</div>
			</div>
		</div>
	
    <el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"10px","margin":"120px 0 0","alignItems":"center","flexWrap":"wrap","background":"#fff","display":"flex","width":"calc(100% - 220px)","float":"left","height":"auto","order":"1"}'>
      <el-form-item :style='{"margin":"5px 10px"}'>
	    <div class="lable" v-if="true" :style='{"width":"auto","padding":"0 10px","lineHeight":"42px","display":"inline-block"}'>猫咪名称：</div>
        <el-input v-model="formSearch.maomimingcheng" placeholder="猫咪名称" @keydown.enter.native="getList(1, curFenlei)" clearable></el-input>
      </el-form-item>
	  <el-button v-if=" true " :style='{"cursor":"pointer","border":"1px solid #170000","padding":"0px 15px","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","lineHeight":"42px","height":"42px"}' type="primary" @click="getList(1, curFenlei)"><i v-if="true" :style='{"color":"#000","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-search"></i>查询</el-button>
	  <el-button v-if="btnAuth('maomixinxi','新增')" :style='{"cursor":"pointer","border":"1px solid #170000","padding":"0px 15px","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#fff","width":"auto","fontSize":"14px","lineHeight":"42px","height":"42px"}' type="primary" @click="add('/index/maomixinxiAdd')"><i v-if="true" :style='{"color":"#000","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-circle-plus-outline"></i>添加</el-button>
    </el-form>
	<div class="sort_view" :style='{"border":"1px solid #000","boxShadow":" 0px 4px 10px 0px rgba(0,0,0,0.3)","margin":"0","alignItems":"center","display":"flex","justifyContent":"center","borderRadius":"0 0 10px 10px","top":"699px","left":"20%","width":"60%","position":"absolute","order":"0","height":"90px"}'>
		<el-button :style='{"border":"0","padding":"0 15px","margin":"0 5px","borderRadius":"8px"}' @click="sortClick('clicknum')">
			<span :style='{"margin":"0 2px 0 0","lineHeight":"40px","fontSize":"14px","color":"#333"}' class="icon iconfont icon-xiaoliang13" v-if="sortType!='clicknum'"></span>
			<span :style='{"margin":"0 2px 0 0","lineHeight":"40px","fontSize":"14px","color":"#333"}' class="icon iconfont icon-xiaoliang13" v-else-if="sortType=='clicknum'&&sortOrder=='desc'"></span>
			<span :style='{"margin":"0 2px 0 0","lineHeight":"40px","fontSize":"14px","color":"#333"}' class="icon iconfont icon-xiaoliang13" v-else-if="sortType=='clicknum'&&sortOrder=='asc'"></span>
			<span :style='{"color":"#333","lineHeight":"40px","fontSize":"14px"}'>点击量</span>
		</el-button>
	</div>
	<div class="list" :style='{"minHeight":"660px","width":"calc(100% - 220px)","margin":"20px 0 10px","float":"left","background":"#fff","order":"2"}'>
		
		<!-- 样式三 -->
		<div class="list3 index-pv1" :style='{"width":"100%","padding":"0 10px","flexWrap":"wrap","background":"#fff","display":"flex","height":"auto"}'>
		  <div v-for="(item, index) in dataList" :key="index" @click.stop="toDetail(item)" class="list-item animation-box">
		    <div :style='{"border":"3px solid #fff","width":"45%","padding":"8px","overflow":"hidden","height":"100%"}' class="img-box">
				<img @click.stop="imgPreView(item.maomitupian)" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-if="item.maomitupian && item.maomitupian.substr(0,4)=='http'" :src="item.maomitupian" class="image" />
				<img @click.stop="imgPreView(baseUrl + (item.maomitupian?item.maomitupian.split(',')[0]:''))" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-else :src="baseUrl + (item.maomitupian?item.maomitupian.split(',')[0]:'')" class="image" />
			</div>
		    <div :style='{"padding":"0 10px","overflow":"hidden","alignItems":"center","flex":"1","display":"flex","height":"auto"}' class="item-info">
		      <div :style='{"width":"auto","padding":"0 10px 0 0","flexDirection":"column","flex":"1","display":"flex"}'>
				<div class="title">{{item.maomimingcheng}}</div>
				<div class="title">猫咪性别:{{item.maomixingbie}}</div>
				<div v-if="item.price" class="price"><span :style='{"fontSize":"12px"}'>￥</span>{{item.price}}</div>
		        <div :style='{"padding":"0 10px","borderColor":"red","borderStyle":"solid","borderWidth":"0","order":"2"}' class="time">
		          <span class="icon iconfont icon-shijian21"></span>
		          <span class="text">{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","borderColor":"red","borderStyle":"solid","borderWidth":"0"}' class="collect">
		          <span class="icon iconfont icon-shoucang10"></span>
		          <span class="text">{{item.storeupnum}}</span>
		        </div>
		        <div :style='{"padding":"0 10px"}' class="view">
		          <span class="icon iconfont icon-chakan9"></span>
		          <span class="text">{{item.clicknum}}</span>
		        </div>
		      </div>
		      <div class="desc">{{item.maomixiangqing}}</div>
		    </div>
		  </div>
		</div>
	</div>

	
	<el-pagination
	  background
	  id="pagination"
	  class="pagination"
	  :pager-count="7"
	  :page-size="pageSize"
	  :page-sizes="pageSizes"
	  prev-text="<"
	  next-text=">"
	  :hide-on-single-page="false"
	  :layout='["total","prev","pager","next"].join()'
	  :total="total"
	  :style='{"padding":"5px 30px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3)","margin":"30px 12px 30px 12px","whiteSpace":"nowrap","color":"#333","borderRadius":"10px","textAlign":"left","background":"#F2F2F2","width":"auto","float":"left","fontWeight":"500","order":"11"}'
	  @current-change="curChange"
      @size-change="sizeChange"
	  @prev-click="prevClick"
	  @next-click="nextClick"
	></el-pagination>

  </div>
  <el-dialog title="预览图" :visible.sync="previewVisible" width="50%">
  	<img :src="previewImg" alt="" style="width: 100%;">
  </el-dialog>
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
	    layouts: '',
		swiperIndex: -1,
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '猫咪信息'
          }
        ],
        formSearch: {
          maomimingcheng: '',
        },
        fenlei: [],
		feileiColumn: '',
        dataList: [],
        total: 1,
        pageSize: 10,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        curFenlei: '全部',
        isPlain: false,
        indexQueryCondition: '',
        timeRange: [],
		centerType:false,
		previewImg: '',
		previewVisible: false,
		sortType: 'id',
		sortOrder: 'desc',
      }
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
		this.indexQueryCondition = this.$route.query.indexQueryCondition ? this.$route.query.indexQueryCondition : '';
		this.baseUrl = this.$config.baseUrl;
      this.getFenlei();
      this.getList(1, '全部');
    },
    //方法集合
    methods: {
		add(path) {
			let query = {}
			if(this.centerType){
				query.centerType = 1
			}
			this.$router.push({path: path,query:query});
		},
      getFenlei() {
		this.$http.get('maomipinzhong/list',{}).then(res => {
		  if (res.data.code == 0) {
		    this.fenlei = res.data.data.list
		  }
		});
		this.feileiColumn = 'maomipinzhong'
      },
      getList(page, fenlei, ref = '') {
		if(fenlei == '全部') this.swiperIndex = -1;
		for(let i=0;i<this.fenlei.length;i++) {
			if(fenlei == this.fenlei[i][this.feileiColumn]) {
				this.swiperIndex = i;
				break;
			}
		}
		if(fenlei){
			this.curFenlei = fenlei;
		}
        // if (this.curFenlei == '全部') {
        //   this.isPlain = false;
        // } else {
        //   this.isPlain = true;
        // }
        let params = {page, limit: this.pageSize};
        let searchWhere = {};
        if (this.formSearch.maomimingcheng != '') searchWhere.maomimingcheng = '%' + this.formSearch.maomimingcheng + '%';
        if (this.curFenlei != '全部') searchWhere.maomipinzhong = this.curFenlei;
		if (this.sortType) searchWhere.sort = this.sortType
		if (this.sortOrder) searchWhere.order = this.sortOrder
        this.$http.get(`maomixinxi/${this.centerType?'page':'list'}`, {params: Object.assign(params, searchWhere)}).then(res => {
          if (res.data.code == 0) {
            this.dataList = res.data.data.list;
            this.total = Number(res.data.data.total);
            this.pageSize = Number(res.data.data.pageSize);
            this.totalPage = res.data.data.totalPage;
			
			this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
          }
        });
      },
	  sortClick(type){
		  if(this.sortType==type){
			  if(this.sortOrder == 'desc'){
				  this.sortOrder = 'asc'
			  }else{
				  this.sortOrder = 'desc'
			  }
		  }else{
			  this.sortType = type
			  this.sortOrder = 'desc'
		  }
		  this.getList(1, '全部')
	  },
      curChange(page) {
        this.getList(page,this.curFenlei);
      },
      prevClick(page) {
        this.getList(page,this.curFenlei);
      },
      sizeChange(size){
        this.pageSize = size
        this.getList(1,this.curFenlei);
      },
      nextClick(page) {
        this.getList(page,this.curFenlei);
      },
	  imgPreView(url){
		  this.previewImg = url
		  this.previewVisible = true
	  },
      toDetail(item) {
		  let params = {
			  id: item.id
		  }
		  if(this.centerType){
			  params.centerType = 1
		  }
        this.$router.push({path: '/index/maomixinxiDetail', query: params});
      },
	btnAuth(tableName,key){
		if(this.centerType){
			return this.isBackAuth(tableName,key)
		}else{
			return this.isAuth(tableName,key)
		}
	},
	backClick() {
		this.$router.push({path: '/index/center'});
	},
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.list-preview .list-form-pv .el-input {
		width: auto;
	}

	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 9px;
		color: #fff;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb .item1 /deep/ .el-breadcrumb__inner a {
		color: #fff;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb .item2 /deep/ .el-breadcrumb__inner a {
		color: #fff;
		display: inline-block;
	}
	
	.category-1 .item {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #efefef;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-1 .item:hover {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #000;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-1 .item.active {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #000;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item {
		cursor: pointer;
		border-radius: 0;
		margin: 0;
		color: #000;
		background: #fff;
		width: 100%;
		font-size: 14px;
		border-color: #000;
		border-width: 0 0 1px ;
		line-height: 36px;
		border-style: solid;
		text-align: center;
	}
	
	.category-2 .item:hover {
		cursor: pointer;
		border-radius: 0;
		margin: 0;
		color: #fff;
		background: #FF721B;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item.active {
		cursor: pointer;
		border-radius: 0;
		margin: 0;
		color: #fff;
		background: #FF721B;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-3 .item {
		cursor: pointer;
		padding: 10px 0;
		margin: 0;
		color: #333;
		display: flex;
		border-color: #000;
		border-radius: 0;
		background: #fff;
		width: 100%;
		justify-content: center;
		border-width: 1px 0 0 ;
		align-items: center;
		border-style: solid;
		text-align: center;
	}
	
	.category-3 .item:hover {
		color: #ff721b;
		background: #fff;
	}
	
	.category-3 .item.active {
		color: #fff;
		background: #ff721b;
	}
	
	.list-form-pv .el-input /deep/ .el-input__inner {
		border: 1px solid #170000;
		border-radius: 8px;
		padding: 0 10px;
		margin: 0;
		outline: none;
		color: #333;
		width: 140px;
		font-size: 14px;
		line-height: 42px;
		height: 42px;
	}
	
	.list-form-pv .el-select /deep/ .el-input__inner {
	}
	
	.list-form-pv .el-date-editor /deep/ .el-input__inner {
		border: 1px solid #170000;
		border-radius: 8px;
		padding: 0 30px;
		margin: 0;
		outline: none;
		color: #333;
		width: 140px;
		font-size: 14px;
		line-height: 42px;
		height: 42px;
	}
	
	.list .index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.list .index-pv1 .animation-box:hover {
		transform: rotate(10deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
		z-index: 1;
	}
	
	.list .index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.list .index-pv1 .animation-box img:hover {
		transform: rotate(-20deg) scale(0.8) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number {
		cursor: pointer;
		border-radius: 2px;
		padding: 0 4px;
		margin: 0 5px;
		color: #9E9E9E;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number:hover {
		cursor: pointer;
		border-radius: 2px;
		padding: 0 4px;
		margin: 0 5px;
		color: #FF721B;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #FF721B;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #f2f2f2;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 25px 0 8px;
		color: #606266;
		display: inline-block;
		font-size: 13px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}

	.list3 .list-item {
				cursor: pointer;
				padding: 0px;
				margin: 0px 2% 20px 0;
				background: #EBEBEB;
				display: flex;
				width: 48%;
				font-size: 0;
				position: relative;
				height: auto;
			}
	
	.list3 .list-item:hover {
				background: #ff721b;
			}
	
	.list3 .list-item .title {
				padding: 0 10px;
				overflow: hidden;
				color: #333;
				font-size: 14px;
				border-color: red;
				border-width: 0;
				line-height: 30px;
				border-style: solid;
				height: 30px;
			}
	
	.list3 .list-item:hover .title {
				color: #fff;
			}
	.list3 .list-item .price {
				padding: 0 10px;
				color: #f00;
				font-size: 12px;
				border-color: red;
				border-width: 0;
				line-height: 36px;
				border-style: solid;
			}
	
	.list3 .list-item:hover .price {
				color: #fff;
			}
	
	.list3 .list-item .time .icon {
				margin: 0 2px 0 0;
				color: #666;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .time .icon {
				color: #fff;
			}
	.list3 .list-item .time .text {
				color: #666;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .time .text {
				color: #fff;
			}
	
	.list3 .list-item .publisher .icon {
				margin: 0 2px 0 0;
				color: #666;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .publisher .icon {
				color: #fff;
			}
	.list3 .list-item .publisher .text {
				color: #666;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .publisher .text {
				color: #fff;
			}
	
	.list3 .list-item .like .icon {
				margin: 0 2px 0 0;
				color: #666;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .like .icon {
				color: #fff;
			}
	.list3 .list-item .like .text {
				color: #666;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .like .text {
				color: #fff;
			}
	
	.list3 .list-item .collect .icon {
				margin: 0 2px 0 0;
				color: #666;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .collect .icon {
				color: #fff;
			}
	.list3 .list-item .collect .text {
				color: #666;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .collect .text {
				color: #fff;
			}
	
	.list3 .list-item .view .icon {
				margin: 0 2px 0 0;
				color: #666;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .view .icon {
				color: #fff;
			}
	.list3 .list-item .view .text {
				color: #666;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .view .text {
				color: #fff;
			}
	
	.list3 .list-item .desc {
				overflow: hidden;
				color: #666;
				width: 40%;
				font-size: 12px;
				line-height: 1.5;
			}
	.list3 .list-item:hover .desc {
				color: #fff;
			}
	
</style>
