<template>
<div class="home-preview" :style='{"width":"100%","margin":"0px auto","flexDirection":"column","display":"flex"}'>



		<!-- 关于我们 -->
		<div id="about" class="animate__animated" :style='{"padding":"60px 20%","boxShadow":"0 1px 6px rgba(255, 255, 255, .3)","margin":"0","overflow":"hidden","alignItems":"center","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231028/34da840c751743ada3e835de45c9a8eb.png)","flexDirection":"column","display":"flex","width":"100%","height":"auto","order":"1"}'>
		  <div :style='{"margin":"10px 0 20px","color":"#FFFFFF","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231031/c2cc05588a7e4ac4af616b5d87558470.png) no-repeat center center","width":"100%","fontSize":"40px","order":"2"}'>{{aboutUsDetail.title}}</div>
		  <div :style='{"width":"100%","margin":"0","fontSize":"32px","color":"#a8a9aa","textAlign":"center"}'>{{aboutUsDetail.subtitle}}</div>
		  <div :style='{"width":"100%","padding":"0 10px","flexWrap":"wrap","display":"none","height":"auto"}'>
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"block","height":"120px"}' :src="baseUrl + aboutUsDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"block","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"block","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
		  </div>
		  <div :style='{"padding":"0","margin":"0 0 10px 0","color":"#FFFFFF","width":"100%","letterSpacing":"0.06cm","lineHeight":"2","fontSize":"16px","textDecoration":"underline","textIndent":"2","order":"3"}' v-html="aboutUsDetail.content"></div>
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px"}' @click="toDetail('aboutusDetail',aboutUsDetail)">
		    <span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"color":"#f5f5f5","fontSize":"12px"}'></span>
		  </div>
		</div>
		<!-- 关于我们 -->

		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"padding":"60px 20% 0","margin":"0","overflow":"hidden","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231028/0866a9ae11ce4c3f873acbca399c64ea.png) no-repeat center top / cover","display":"flex","width":"100%","position":"relative","justifyContent":"flex-end","height":"auto","order":"3"}'>
		  <div :style='{"margin":"20px 0 50px","overflow":"hidden","color":"#fff","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231031/c2cc05588a7e4ac4af616b5d87558470.png) no-repeat center center","width":"100%","lineHeight":"1.5","fontSize":"40px","height":"60px","order":"2"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"width":"100%","margin":"0","lineHeight":"1","fontSize":"32px","color":"#a8adb4","textAlign":"center"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"padding":"0","flexWrap":"wrap","left":"20%","bottom":"60px","display":"flex","width":"360px","position":"absolute","float":"left","height":"280px","zIndex":"1"}'>
		    <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"padding":"0 0 0 10%","margin":"30px 0 90px","overflow":"hidden","color":"#fff","background":"none","width":"calc(100% - 360px)","lineHeight":"24px","fontSize":"16px","textIndent":"2","float":"right","height":"196px","order":"3"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"left":"calc(20% - 50px)","background":"#262626","bottom":"60px","display":"block","width":"459px","position":"absolute","height":"247px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"color":"#f5f5f5","fontSize":"12px"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"padding":"30px 20% 80px","margin":"-25px 0 0 0","background":"#F4F4F4"}'>
		<div v-if="true" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>
			<div class="box1" :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"36px","color":"#9E9E9E","textAlign":"center","height":"auto"}'>Bullish Headlines</div>
			<div class="box2" :style='{"width":"50px","margin":"0 300px 0 0","background":"#B6B6B6","height":"2px"}'></div>
			<div class="box3" :style='{"width":"50px","background":"#B6B6B6","height":"2px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"300px","margin":"-50px auto 20px","lineHeight":"54px","textAlign":"center"}'>
			<span :style='{"color":"#505050","fontSize":"40px"}'>电影资讯</span>
		</div>
		
			
			
			
			
			
			
			
			
			
			
		







		<div v-if="newsList.length" class="list list18 index-pv1" :style='{"width":"100%","padding":"0","justifyContent":"space-between","display":"flex","height":"auto"}'>
		  <div :style='{"width":"63%","overflow":"hidden","background":"#fff","justifyContent":"space-between","display":"flex","height":"480px"}' class="left">
		    <div :style='{"width":"50%","flexDirection":"column","background":"#f5f5f5","justifyContent":"space-between","display":"flex","height":"auto"}' class="list">
			  <template v-for="(item,index) in newsList">
		      <div v-if="index < 6" @click="toDetail('newsDetail', item)" @mouseenter="newsMouseove18(index)" class="item" :class="index == newsIndex18 ? 'active' : ''">
		        <div class="name">{{item.title}}</div>
		      </div>
			  </template>
		    </div>
		    <div :style='{"width":"50%","height":"480px"}' class="imgs">
			  <template v-for="(item,index) in newsList">
		      <img v-if="index < 6" v-show="index == newsIndex18" :style='{"width":"100%","objectFit":"cover","display":"block","height":"480px"}' :src="baseUrl + item.picture" alt="">
			  </template>
		    </div>
		  </div>
		  <div :style='{"width":"35%","overflow":"hidden","background":"#fff","height":"480px"}' class="right">
		    <div v-if="newsList.length > 6" :style='{"cursor":"pointer","width":"100%","position":"relative","height":"200px"}' class="top list-item animation-box" @click="toDetail('newsDetail', newsList[6])">
		      <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"200px"}' :src="baseUrl + newsList[6].picture">
		      <div :style='{"width":"100%","position":"absolute","left":"0","bottom":"0","background":"rgba(0,0,0,.3)"}'>
		        <div :style='{"padding":"0 10px","lineHeight":"44px","fontSize":"18px","color":"#fff"}' class="title">{{newsList[6].title}}</div>
		      </div>
		    </div>
		    <div v-if="newsList.length > 7" :style='{"width":"100%","padding":"10px","background":"#fff","height":"auto"}' class="list">
			  <template v-for="(item,index) in newsList">
		      <div v-if="index > 6" :style='{"cursor":"pointer","borderColor":"#f5f5f5","alignItems":"center","borderWidth":"0 0 1px","display":"flex","width":"100%","borderStyle":"solid","height":"45px"}' class="item" @click="toDetail('newsDetail', item)">
		        <div class="dian"></div>
		        <div class="title" >{{item.title}}</div>
		        <div :style='{"padding":"0 6px"}' class="time">
		          <span class="icon iconfont icon-shijian21"></span>
		          <span class="text">{{item.addtime}}</span>
		        </div>
		      </div>
			  </template>
		    </div>
		  </div>
		</div>




		<div @click="moreBtn('news')" :style='{"border":"0","width":"80px","margin":"20px auto","lineHeight":"32px","textAlign":"center","display":"none"}'>
			<span :style='{"color":"#9E9E9E","fontSize":"14px"}'>更多</span>
			<i :style='{"color":"#9E9E9E","fontSize":"14px"}' class="icon iconfont icon-gengduo1"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->


<!-- 商品推荐 -->
<div id="animate_recommendbaoxiangxinxi" class="recommend animate__animated" :style='{"padding":"50px 0","margin":"0","background":"#fff","order":"2"}'>
	<div v-if="true" class="idea recommendIdea" :style='{"padding":"0px","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>
		<div class="box1" :style='{"width":"100%","margin":"0 0 40px","fontSize":"36px","color":"#9E9E9E","textAlign":"center"}'>Hot Commodity</div>
		<div class="box2" :style='{"width":"50px","margin":"0 350px 0","background":"#B6B6B6","height":"2px"}'></div>
		<div class="box3" :style='{"width":"50px","background":"#B6B6B6","height":"2px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"60px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"300px","margin":"-90px auto 20px","lineHeight":"54px","textAlign":"center"}'>
		<span :style='{"color":"#505050","fontSize":"40px"}'>包厢信息推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="baoxiangxinxiRecommend.length" class="list list12 index-pv1 list12baoxiangxinxi" :style='{"width":"100%","padding":"10px 20%","background":"#fff","height":"auto"}'>
	  <div class="tab" :style='{"width":"100%","margin":"0 0 20px","justifyContent":"center","display":"flex","height":"auto"}'>
	    <template v-for="item,index in recommendList12baoxiangxinxi">
		<div v-if="index < 4" @click="recommendIndexClick12(index + 1, 'baoxiangxinxi')" class="item" :class="index + 1 == recommendIndex12baoxiangxinxi ? 'active' : ''">
			<img v-if="item.image" :style='{"width":"40px","margin":"0 5px 0 0","objectFit":"cover","display":"inline-block","height":"40px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
			<div :style='{"color":"inherit","fontSize":"14px","display":"inline-block"}'>{{item[recommendColumn12baoxiangxinxi]}}</div>
		</div>
		</template>
		<div class="more" @click="moreBtn('baoxiangxinxi')">
		  <div :style='{"color":"inherit","fontSize":"14px"}'>更多</div>
		  <span class="icon iconfont icon-jiantou25" :style='{"color":"inherit","margin":"0 0 0 2px","fontSize":"14px"}'></span>
		</div>
	  </div>
	  <div class="list" :style='{"overflow":"hidden","flexWrap":"wrap","flex":"1","background":"#fff","display":"flex","height":"auto"}'>
	    <div :style='{"cursor":"pointer","width":"30%","margin":"10px","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in baoxiangxinxiRecommend" :key="index" @click="toDetail('baoxiangxinxiDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"240px"}' v-if="preHttp(item.baoxiangtupian)" :src="item.baoxiangtupian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"240px"}' v-else :src="baseUrl + (item.baoxiangtupian?item.baoxiangtupian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"30px","fontSize":"15px","color":"#505050"}'>{{item.baoxiangmingcheng}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"30px","fontSize":"15px","color":"#505050"}'>{{item.baoxiangleixing}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"30px","fontSize":"15px","color":"#505050"}'>{{item.xiaoshijiage}}</div>
	    </div>
	  </div>
	</div>




	
	<div @click="moreBtn('baoxiangxinxi')" :style='{"border":"0","width":"80px","margin":"0px auto 20px","lineHeight":"32px","textAlign":"center","display":"none"}'>
		<span :style='{"color":"#9E9E9E","fontSize":"14px"}'>更多</span>
		<i :style='{"color":"#9E9E9E","fontSize":"14px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

<!-- 商品推荐 -->
<div id="animate_recommendlingshixinxi" class="recommend animate__animated" :style='{"padding":"50px 0","margin":"0","background":"#fff","order":"2"}'>
	<div v-if="true" class="idea recommendIdea" :style='{"padding":"0px","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>
		<div class="box1" :style='{"width":"100%","margin":"0 0 40px","fontSize":"36px","color":"#9E9E9E","textAlign":"center"}'>Hot Commodity</div>
		<div class="box2" :style='{"width":"50px","margin":"0 350px 0","background":"#B6B6B6","height":"2px"}'></div>
		<div class="box3" :style='{"width":"50px","background":"#B6B6B6","height":"2px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"60px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"300px","margin":"-90px auto 20px","lineHeight":"54px","textAlign":"center"}'>
		<span :style='{"color":"#505050","fontSize":"40px"}'>零食信息推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="lingshixinxiRecommend.length" class="list list12 index-pv1 list12lingshixinxi" :style='{"width":"100%","padding":"10px 20%","background":"#fff","height":"auto"}'>
	  <div class="tab" :style='{"width":"100%","margin":"0 0 20px","justifyContent":"center","display":"flex","height":"auto"}'>
	    <template v-for="item,index in recommendList12lingshixinxi">
		<div v-if="index < 4" @click="recommendIndexClick12(index + 1, 'lingshixinxi')" class="item" :class="index + 1 == recommendIndex12lingshixinxi ? 'active' : ''">
			<img v-if="item.image" :style='{"width":"40px","margin":"0 5px 0 0","objectFit":"cover","display":"inline-block","height":"40px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
			<div :style='{"color":"inherit","fontSize":"14px","display":"inline-block"}'>{{item[recommendColumn12lingshixinxi]}}</div>
		</div>
		</template>
		<div class="more" @click="moreBtn('lingshixinxi')">
		  <div :style='{"color":"inherit","fontSize":"14px"}'>更多</div>
		  <span class="icon iconfont icon-jiantou25" :style='{"color":"inherit","margin":"0 0 0 2px","fontSize":"14px"}'></span>
		</div>
	  </div>
	  <div class="list" :style='{"overflow":"hidden","flexWrap":"wrap","flex":"1","background":"#fff","display":"flex","height":"auto"}'>
	    <div :style='{"cursor":"pointer","width":"30%","margin":"10px","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in lingshixinxiRecommend" :key="index" @click="toDetail('lingshixinxiDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"240px"}' v-if="preHttp(item.tupian)" :src="item.tupian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"240px"}' v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"30px","fontSize":"15px","color":"#505050"}'>{{item.lingshimingcheng}}</div>
	    </div>
	  </div>
	</div>




	
	<div @click="moreBtn('lingshixinxi')" :style='{"border":"0","width":"80px","margin":"0px auto 20px","lineHeight":"32px","textAlign":"center","display":"none"}'>
		<span :style='{"color":"#9E9E9E","fontSize":"14px"}'>更多</span>
		<i :style='{"color":"#9E9E9E","fontSize":"14px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

<!-- 商品推荐 -->
<div id="animate_recommendmaomixinxi" class="recommend animate__animated" :style='{"padding":"50px 0","margin":"0","background":"#fff","order":"2"}'>
	<div v-if="true" class="idea recommendIdea" :style='{"padding":"0px","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>
		<div class="box1" :style='{"width":"100%","margin":"0 0 40px","fontSize":"36px","color":"#9E9E9E","textAlign":"center"}'>Hot Commodity</div>
		<div class="box2" :style='{"width":"50px","margin":"0 350px 0","background":"#B6B6B6","height":"2px"}'></div>
		<div class="box3" :style='{"width":"50px","background":"#B6B6B6","height":"2px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"60px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"300px","margin":"-90px auto 20px","lineHeight":"54px","textAlign":"center"}'>
		<span :style='{"color":"#505050","fontSize":"40px"}'>猫咪信息推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="maomixinxiRecommend.length" class="list list12 index-pv1 list12maomixinxi" :style='{"width":"100%","padding":"10px 20%","background":"#fff","height":"auto"}'>
	  <div class="tab" :style='{"width":"100%","margin":"0 0 20px","justifyContent":"center","display":"flex","height":"auto"}'>
	    <template v-for="item,index in recommendList12maomixinxi">
		<div v-if="index < 4" @click="recommendIndexClick12(index + 1, 'maomixinxi')" class="item" :class="index + 1 == recommendIndex12maomixinxi ? 'active' : ''">
			<img v-if="item.image" :style='{"width":"40px","margin":"0 5px 0 0","objectFit":"cover","display":"inline-block","height":"40px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
			<div :style='{"color":"inherit","fontSize":"14px","display":"inline-block"}'>{{item[recommendColumn12maomixinxi]}}</div>
		</div>
		</template>
		<div class="more" @click="moreBtn('maomixinxi')">
		  <div :style='{"color":"inherit","fontSize":"14px"}'>更多</div>
		  <span class="icon iconfont icon-jiantou25" :style='{"color":"inherit","margin":"0 0 0 2px","fontSize":"14px"}'></span>
		</div>
	  </div>
	  <div class="list" :style='{"overflow":"hidden","flexWrap":"wrap","flex":"1","background":"#fff","display":"flex","height":"auto"}'>
	    <div :style='{"cursor":"pointer","width":"30%","margin":"10px","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in maomixinxiRecommend" :key="index" @click="toDetail('maomixinxiDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"240px"}' v-if="preHttp(item.maomitupian)" :src="item.maomitupian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"240px"}' v-else :src="baseUrl + (item.maomitupian?item.maomitupian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"30px","fontSize":"15px","color":"#505050"}'>{{item.maomimingcheng}}</div>
			<div class="line1" :style='{"padding":"0 10px","lineHeight":"30px","fontSize":"15px","color":"#505050"}'>猫咪性别:{{item.maomixingbie}}</div>
	    </div>
	  </div>
	</div>




	
	<div @click="moreBtn('maomixinxi')" :style='{"border":"0","width":"80px","margin":"0px auto 20px","lineHeight":"32px","textAlign":"center","display":"none"}'>
		<span :style='{"color":"#9E9E9E","fontSize":"14px"}'>更多</span>
		<i :style='{"color":"#9E9E9E","fontSize":"14px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

	
	<!-- 在线留言 -->
	<div id="msgs" class="msg animate__animated" :style='{"width":"100%","margin":"0 auto","position":"relative","order":"6"}'>
	  <img :style='{"width":"100%","objectFit":"cover","display":"none","height":"400px"}' src="https://codegen.caihongy.cn/20220719/a6774084daa04dcdb140ce097ee4e4df.jpg">
	  <div :style='{"padding":"50px 20%","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231028/7dd17b3e9e5447e9b475459b843d0ebc.png)","flexDirection":"column","display":"flex","width":"100%","backgroundSize":"100% 100%","height":"auto","zIndex":"1"}'>
	    <div :style='{"width":"100%","padding":"0px"}'>
	      <div :style='{"width":"100%","margin":"0","fontSize":"24px","lineHeight":"1.5","color":"#9E9E9E","textAlign":"center"}'>MESSAGE</div>
	      <div :style='{"margin":"2px 0 10px","color":"#505050","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231030/305bd52fe05c4ebbac1743b8625220ae.png) no-repeat center center","width":"100%","fontSize":"36px","lineHeight":"1.5"}'>在线留言</div>
	      <div :style='{"margin":"0 0 10px","fontSize":"14px","lineHeight":"1.5","color":"#505050"}'>描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1</div>
	      <div :style='{"margin":"0 0 10px","fontSize":"14px","lineHeight":"1.5","color":"#505050"}'>描述2描述2描述2</div>
	      <div :style='{"display":"none"}'>
	        <span class="icon iconfont icon-dianpu" :style='{"margin":"0 5px 0","fontSize":"16px","lineHeight":"1.5","color":"#505050"}'></span>
	        <div :style='{"color":"#505050","fontSize":"16px","lineHeight":"1.5"}'>0753-1234567</div>
	      </div>
	    </div>
	    <div :style='{"width":"100%","padding":"0px","margin":"20px 0 0"}'>
	      <el-form autocomplete="off" :model="messageForm" :style='{"width":"100%","position":"relative","flexWrap":"wrap","display":"flex","height":"100%"}'>
	        <el-form-item class="input" :style='{"width":"47%","margin":"0 2% 20px 0","display":"inline-block"}'>
	          <el-input type="text" v-model="messageForm.name" placeholder="请输入姓名" />
	        </el-form-item>
	        <el-form-item class="input" :style='{"width":"47%","margin":"0 2% 20px 0","display":"inline-block"}'>
	          <el-input type="text" v-model="messageForm.email" placeholder="请输入邮箱" />
	        </el-form-item>
	        <el-form-item class="input" :style='{"width":"47%","margin":"0 2% 20px 0","display":"inline-block"}'>
	          <el-input type="text" v-model="messageForm.mobile" placeholder="请输入电话" />
	        </el-form-item>
	        <el-form-item class="textarea" :style='{"width":"47%","margin":"0 2% 20px 0","display":"inline-block"}'>
	          <el-input type="textarea" v-model="messageForm.content" placeholder="请输入留言" />
	        </el-form-item>
	        <el-form-item class="btn" :style='{"width":"auto","margin":"0","position":"absolute","right":"-150px","textAlign":"center","bottom":"20px"}'>
	          <el-button :style='{"cursor":"pointer","border":"0","padding":"0px 10px","margin":"0 auto","outline":"none","color":"#fff","borderRadius":"0px","background":"#FF721B","width":"150px","fontSize":"22px","lineHeight":"50px","height":"50px"}' @click="messageSave">提交</el-button>
	        </el-form-item>
	      </el-form>
	    </div>
	  </div>
	</div>
	<!-- 在线留言 -->
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        baoxiangxinxiRecommend: [],
        lingshixinxiRecommend: [],
        maomixinxiRecommend: [],



		newsIndex18: 0,
		recommendIndex12baoxiangxinxi: 0,
		recommendList12baoxiangxinxi: [],
		recommendColumn12baoxiangxinxi: '',
		recommendIndex12lingshixinxi: 0,
		recommendList12lingshixinxi: [],
		recommendColumn12lingshixinxi: '',
		recommendIndex12maomixinxi: 0,
		recommendList12maomixinxi: [],
		recommendColumn12maomixinxi: '',


		messageForm: {}
      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getAboutUs();
		this.getSystemIntroduction();
		this.getList();
		this.baoxiangxinxiRecommendCate()
		this.lingshixinxiRecommendCate()
		this.maomixinxiRecommendCate()
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {








































































			setTimeout(()=>{




































			},250)
		},
		messageSave(){
			this.$http.post('onlinemessage/save', this.messageForm).then(res => {
				if(res.data.code == 0) {
					this.$message({
						message: '提交成功',
						type: 'success',
						duration: 1500,
						onClose: () => {
							this.messageForm = {}
							this.$forceUpdate()
						}
					});
				}
			})
		},
		newsMouseove18(index) {
			this.newsIndex18 = index
		},
		baoxiangxinxiRecommendCate(){
			this.$http.get('baoxiangfenlei/list',{}).then(res => {
			  if (res.data.code == 0) {
				this.recommendList12baoxiangxinxi = res.data.data.list
			  }
			});
			this.recommendColumn12baoxiangxinxi = 'baoxiangfenlei'
		},
		lingshixinxiRecommendCate(){
			this.$http.get('lingshifenlei/list',{}).then(res => {
			  if (res.data.code == 0) {
				this.recommendList12lingshixinxi = res.data.data.list
			  }
			});
			this.recommendColumn12lingshixinxi = 'lingshifenlei'
		},
		maomixinxiRecommendCate(){
			this.$http.get('maomipinzhong/list',{}).then(res => {
			  if (res.data.code == 0) {
				this.recommendList12maomixinxi = res.data.data.list
			  }
			});
			this.recommendColumn12maomixinxi = 'maomipinzhong'
		},
		recommendIndexClick12(index, name) {
			this['recommendIndex12' + name] = index
			this.getList()
			
			document.querySelectorAll('.recommend .list12' + name + ' .list .item').forEach(el => {
			  el.classList.remove("active")
			})
			setTimeout(() => {
			  document.querySelectorAll('.recommend .list12' + name + ' .list .item').forEach(el => {
			    el.classList.add("active")
			  })
			}, 1);
		},


		handleScroll() {
			let arr = [
				{id:'search',css:'animate__bounce'},
				{id:'about',css:'animate__lightSpeedInLeft'},
				{id:'system',css:'animate__backInRight'},
				{id:'animate_recommendbaoxiangxinxi',css:'animate__zoomInLeft'},
				{id:'animate_recommendlingshixinxi',css:'animate__zoomInLeft'},
				{id:'animate_recommendmaomixinxi',css:'animate__zoomInLeft'},
				{id:'animate_newsnews',css:'animate__rotateInUpLeft'},
				{id:'msgs',css:'animate__swing'},
				{id:'friendly',css:'animate__backInUp'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 13,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "baoxiangxinxi/autoSort";
			data = {
				page: 1,
				limit: 6,
			}
			if(this.recommendIndex12baoxiangxinxi != 0){
				data.baoxiangfenlei = this.recommendList12baoxiangxinxi[this.recommendIndex12baoxiangxinxi - 1].baoxiangfenlei
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.baoxiangxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
          autoSortUrl = "lingshixinxi/autoSort";
			data = {
				page: 1,
				limit: 6,
			}
			if(this.recommendIndex12lingshixinxi != 0){
				data.lingshifenlei = this.recommendList12lingshixinxi[this.recommendIndex12lingshixinxi - 1].lingshifenlei
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.lingshixinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
          autoSortUrl = "maomixinxi/autoSort";
			data = {
				page: 1,
				limit: 6,
			}
			if(this.recommendIndex12maomixinxi != 0){
				data.maomipinzhong = this.recommendList12maomixinxi[this.recommendIndex12maomixinxi - 1].maomipinzhong
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.maomixinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 0;
			border-radius: 20px 0 0 20px;
			padding: 0 10px 0 10px;
			outline: none;
			color: #fff;
			background: rgba(0,0,0,0.5);
			width: 120px;
			font-size: 14px;
			height: 44px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 0;
			border-radius: 0 20px 20px 0;
			padding: 0 10px;
			outline: none;
			color: #fff;
			background: rgba(0,0,0,0.5);
			width: 480px;
			font-size: 14px;
			height: 44px;
		}
		// -------- search --------
		// 在线留言
		.msg .input /deep/ .el-input__inner {
			border: 0;
			border-radius: 0px;
			padding: 5px 10px;
			color: #000;
			width: 100%;
			font-size: 14px;
			height: auto;
		}
		.msg .el-textarea /deep/ .el-textarea__inner {
			border: 0;
			border-radius: 0px;
			padding: 10px;
			color: #000;
			width: 100%;
			font-size: 14px;
			line-height: 1.5;
			height: 50px;
			}
		// 在线留言
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	




	.home-preview .news .list18 .left .list .item {
				cursor: pointer;
				padding: 0 20px;
				background: #fff;
				width: 100%;
				border-color: #F4F4F4;
				border-width: 0 0 1px 0;
				border-style: solid;
				height: 80px;
			}
	
	.home-preview .news .list18 .left .list .item:hover {
				background: #ff721b;
			}
	
	.home-preview .news .list18 .left .list .item .name {
				color: #333;
				font-size: 18px;
				line-height: 80px;
			}
	
	.home-preview .news .list18 .left .list .item:hover .name {
				color: #fff;
			}
	
	.home-preview .news .list18 .right .list .item .dian {
				border-radius: 100%;
				margin: 0 6px;
				background: #D8D8D8;
				width: 4px;
				height: 4px;
			}
	.home-preview .news .list18 .right .list .item:hover .dian {
				background: #ff721b;
			}
	
	.home-preview .news .list18 .right .list .item .title {
				overflow: hidden;
				color: #333;
				flex: 1;
				font-size: 14px;
				line-height: 24px;
				transition: 0.3s;
				height: 24px;
			}
	.home-preview .news .list18 .right .list .item:hover .title {
				color: #ff721b;
			}
	
	.home-preview .news .list18 .right .list .item .time .icon {
				color: #9b9b9b;
				font-size: 12px;
				line-height: 24px;
			}
	.home-preview .news .list18 .right .list .item:hover .time .icon {
				color: #ff721b;
			}
	.home-preview .news .list18 .right .list .item .time .text {
				color: #9b9b9b;
				font-size: 12px;
				line-height: 24px;
			}
	.home-preview .news .list18 .right .list .item:hover .time .text {
				color: #ff721b;
			}



	.home-preview .recommend .list12 .tab .item {
				cursor: pointer;
				border: 1px solid #9E9E9E;
				padding: 0 10px;
				margin: 0 10px;
				color: #9E9E9E;
				width: auto;
				font-size: 16px;
				line-height: 45px;
				height: 50px;
			}
	
	.home-preview .recommend .list12 .tab .item:hover {
				color: #fff;
				background: #242424;
			}
	
	.home-preview .recommend .list12 .tab .item.active {
				color: #fff;
				background: #242424;
				border-color: #999;
				border-width: 0 0 1px 0;
				border-style: solid;
			}
	
	.home-preview .recommend .list12 .tab .more {
				cursor: pointer;
				align-self: start;
				padding: 5px 10px;
				margin: 0 10px;
				color: #9E9E9E;
				background: #fff;
				display: none;
				line-height: 44px;
				align-items: center;
			}
	
	.home-preview .recommend .list12 .tab .more:hover {
				color: #242424;
			}
	
	.home-preview .recommend .list12 .item.active {
	  animation-name: mymove;
	
	  &:nth-of-type(1) {
	    animation-duration: 1s;
	  }
	  &:nth-of-type(2) {
	    animation-duration: 1.2s;
	  }
	  &:nth-of-type(3) {
	    animation-duration: 1.4s;
	  }
	  &:nth-of-type(4) {
	    animation-duration: 1.6s;
	  }
	  &:nth-of-type(5) {
	    animation-duration: 1.8s;
	  }
	  &:nth-of-type(6) {
	    animation-duration: 2s;
	  }
	}
	
	@keyframes mymove
	{
		from {top: 320px;}
		to {top: 0;}
	}



	.home-preview .lists .list16 .list-item {
				cursor: pointer;
				padding: 0;
				margin: 0 0 20px;
				overflow: hidden;
				background: #ebebeb;
				display: flex;
				width: 49%;
				font-size: 0;
				position: relative;
				height: auto;
			}
	
	.home-preview .lists .list16 .list-item:hover {
				background: #ff721b;
			}
	
	.home-preview .lists .list16 .list-item .title {
				padding: 0 10px;
				overflow: hidden;
				color: #333;
				font-size: 14px;
				border-color: red;
				border-width: 0;
				line-height: 36px;
				border-style: solid;
				height: 36px;
			}
	
	.home-preview .lists .list16 .list-item:hover .title {
				color: #fff;
			}
	
	.home-preview .lists .list16 .list-item .time .icon {
				margin: 0 2px 0 0;
				color: #868686;
				font-size: 12px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .time .icon {
				color: #fff;
			}
	.home-preview .lists .list16 .list-item .time .text {
				color: #868686;
				font-size: 12px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .time .text {
				color: #fff;
			}
	
	.home-preview .lists .list16 .list-item .publisher .icon {
				margin: 0 2px 0 0;
				color: #666;
				font-size: 12px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .publisher .icon {
				color: #fff;
			}
	.home-preview .lists .list16 .list-item .publisher .text {
				color: #868686;
				font-size: 12px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .publisher .text {
				color: #fff;
			}
	
	.home-preview .lists .list16 .list-item .like .icon {
				margin: 0 2px 0 0;
				color: #868686;
				font-size: 12px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .like .icon {
				color: #fff;
			}
	.home-preview .lists .list16 .list-item .like .text {
				color: #868686;
				font-size: 12px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .like .text {
				color: #fff;
			}
	
	.home-preview .lists .list16 .list-item .collect .icon {
				margin: 0 2px 0 0;
				color: #868686;
				font-size: 12px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .collect .icon {
				color: #fff;
			}
	.home-preview .lists .list16 .list-item .collect .text {
				color: #868686;
				font-size: 12px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .collect .text {
				color: #fff;
			}
	
	.home-preview .lists .list16 .list-item .view .icon {
				margin: 0 2px 0 0;
				color: #868686;
				font-size: 12px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .view .icon {
				color: #fff;
			}
	.home-preview .lists .list16 .list-item .view .text {
				color: #868686;
				font-size: 12px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .view .text {
				color: #fff;
			}
	
	.home-preview .lists .list16 .list-item .desc {
				overflow: hidden;
				color: #868686;
				width: 50%;
				font-size: 14px;
				line-height: 1.5;
				height: auto;
			}
	.home-preview .lists .list16 .list-item:hover .desc {
				color: #fff;
			}
</style>
