<template>


</template>
<script>
import * as echarts from 'echarts'
//0
//5
import router from '@/router/router-static'
export default {
	data() {
		return {
			line: $template2.board.board.line,
			bar: $template2.board.board.bar,
			pie: $template2.board.board.pie,
			myChart0: null,
			boardDataList: [],
            systemIntroductionDetail: null,
			dates: '',
		};
	},
  mounted(){
    this.init();
    this.baoxiangyudingChat1();
    this.baoxiangyudingChat2();
    this.goumailingshiChat1();
    this.goumailingshiChat2();
    this.maomixinxiChat1();
  },
  created() {
    this.$nextTick(()=>{
		this.times()
	})
  },
  methods:{
	myChartInterval(type, xAxisData, seriesData, myChart) {
	  this.$nextTick(() => {
	    setInterval(() => {
	      let xAxis = xAxisData.shift()
	      xAxisData.push(xAxis)
	      let series = seriesData.shift()
	      seriesData.push(series)
			
			if (type == 1) {
				myChart.setOption({
				  xAxis: [{
				    data: xAxisData
				  }],
				  series: [{
				    data: seriesData
				  }]
				});
			}
			if (type == 2) {
				myChart.setOption({
				  yAxis: [{
				    data: xAxisData
				  }],
				  series: [{
				    data: seriesData
				  }]
				});
			}
	    }, $template2.board.board.bar.base.interval);
	  })
	},
	wordclouds(wordcloudData,echartsId) {
		let wordcloud = $template2.board.board.wordcloud
		wordcloud = JSON.parse(JSON.stringify(wordcloud), (k, v) => {
		  if(typeof v == 'string' && v.indexOf('function') > -1){
		    return eval("(function(){return "+v+" })()")
		  }
		  return v;
		})
		wordcloud.option.series[0].data=wordcloudData;
		
		this.myChart0 = echarts.init(document.getElementById(echartsId));
		let myChart = this.myChart0
		let img = wordcloud.maskImage
	
		if (img) {
			var maskImage = new Image();
			maskImage.src = img
			maskImage.onload = function() {
				wordcloud.option.series[0].maskImage = maskImage
				myChart.clear()
				myChart.setOption(wordcloud.option)
			}
		} else {
			delete wordcloud.option.series[0].maskImage
			myChart.clear()
			myChart.setOption(wordcloud.option)
		}
	},
    getTimeStrToDay(game_over_timestamp) {
        if (game_over_timestamp == 0)
            return "";
        var date = new Date(parseInt(game_over_timestamp));
        var now = new Date();
        var hours = date.getHours() >= 10 ? date.getHours().toString() : "0" + date.getHours();
        var minutes = date.getMinutes() >= 10 ? date.getMinutes().toString() : "0" + date.getMinutes();
        var seconds = date.getSeconds() >= 10 ? date.getSeconds().toString() : "0" + date.getSeconds();
        let arr = ["日", "一", "二", "三", "四", "五", "六"];
        let d = arr[date.getDay()]
        return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + '日' + ' ' + ' ' + '星期' + d  + ' ' + "  " + hours + ":" + minutes + ":" + seconds
    },
	times() {
		setInterval(()=>{
            let date = new Date().getTime()
            this.dates = this.getTimeStrToDay(date)
		}, 1000)
	},
	filterTime(time) {
	  const date = new Date(time)
	  const Y = date.getFullYear()
	  const M = date.getMonth() + 1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1 
	  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
	  
	  const H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 小时
	  const I = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 分钟
	  const S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 秒
	  
	  return `${Y}-${M}-${D} ${H}:${I}:${S}`
	},
    getSystemIntroduction() {
        this.$http({
            url: `systemintro/detail/1`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.systemIntroductionDetail = data.data
            }
        })
    },
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
        this.getSystemIntroduction();
    },


































//统计接口1
    baoxiangyudingChat1() {
      this.$nextTick(()=>{

        var baoxiangyudingChart1 = echarts.init(document.getElementById("baoxiangyudingChart1"),'macarons');
        this.$http({
            url: "baoxiangyuding/group/baoxiangleixing",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].baoxiangleixing);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].baoxiangleixing
                    })
                }
                var option = {};
				let titleObj = this.pie.title
				titleObj.text = '包厢类型'
				
				const legendObj = this.pie.legend
				
				let seriesObj = {
					type: 'pie',
					radius: '55%',
					center: ['50%', '60%'],
					data: pArray,
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
				seriesObj = Object.assign(seriesObj , this.pie.series)
				
                option = {
					backgroundColor: this.pie.backgroundColor,
					color: this.pie.color,
					title: titleObj,
					legend: legendObj,
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c} ({d}%)'
					},
					series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                baoxiangyudingChart1.setOption(option);
				

                  //根据窗口的大小变动图表
                window.onresize = function() {
                    baoxiangyudingChart1.resize();
                };
            }
        });
      })
    },

//统计接口2
    baoxiangyudingChat2() {
      this.$nextTick(()=>{

        var baoxiangyudingChart2 = echarts.init(document.getElementById("baoxiangyudingChart2"),'macarons');
        this.$http({
            url: `baoxiangyuding/value/xiadanshijian/zongjine/日`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].xiadanshijian);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].xiadanshijian
                    })
                }
                var option = {};
                let titleObj = this.bar.title
				titleObj.text = '包厢收益'
				
				const legendObj = this.bar.legend
				
				let xAxisObj = this.bar.xAxis
				xAxisObj.type = 'category'
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.bar.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
						data: yAxis,
						type: 'bar'
					}
				seriesObj = Object.assign(seriesObj , this.bar.series)

				option = {
					backgroundColor: this.bar.backgroundColor,
					color: this.bar.color,
					title: titleObj,
					legend: legendObj,
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
					},
					xAxis: xAxisObj,
					yAxis: yAxisObj,
					series: [seriesObj]
				};
                // 使用刚指定的配置项和数据显示图表。
                baoxiangyudingChart2.setOption(option);
				

                  //根据窗口的大小变动图表
                window.onresize = function() {
                    baoxiangyudingChart2.resize();
                };
            }
        });
      })
    },
































//统计接口1
    goumailingshiChat1() {
      this.$nextTick(()=>{

        var goumailingshiChart1 = echarts.init(document.getElementById("goumailingshiChart1"),'macarons');
        this.$http({
            url: `goumailingshi/value/lingshimingcheng/shuliang`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].lingshimingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].lingshimingcheng
                    })
                }
                var option = {};
				let titleObj = this.pie.title
				titleObj.text = '零食销量'
				
				const legendObj = this.pie.legend
				
				let seriesObj = {
					type: 'pie',
					radius: '55%',
					center: ['50%', '60%'],
					data: pArray,
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
				seriesObj = Object.assign(seriesObj , this.pie.series)
				
                option = {
					backgroundColor: this.pie.backgroundColor,
					color: this.pie.color,
					title: titleObj,
					legend: legendObj,
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c} ({d}%)'
					},
					series: [seriesObj]
                };
                // 使用刚指定的配置项和数据显示图表。
                goumailingshiChart1.setOption(option);
				

                  //根据窗口的大小变动图表
                window.onresize = function() {
                    goumailingshiChart1.resize();
                };
            }
        });
      })
    },

//统计接口2
    goumailingshiChat2() {
      this.$nextTick(()=>{

        var goumailingshiChart2 = echarts.init(document.getElementById("goumailingshiChart2"),'macarons');
        this.$http({
            url: `goumailingshi/value/xiadanshijian/zongjine/日`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].xiadanshijian);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].xiadanshijian
                    })
                }
                var option = {};
                let titleObj = this.bar.title
				titleObj.text = '日收益'
				
				const legendObj = this.bar.legend
				
				let xAxisObj = this.bar.xAxis
				xAxisObj.type = 'category'
				xAxisObj.data = xAxis
                xAxisObj.axisLabel.rotate=70
				
				let yAxisObj = this.bar.yAxis
				yAxisObj.type = 'value'
				
				let seriesObj = {
						data: yAxis,
						type: 'bar'
					}
				seriesObj = Object.assign(seriesObj , this.bar.series)

				option = {
					backgroundColor: this.bar.backgroundColor,
					color: this.bar.color,
					title: titleObj,
					legend: legendObj,
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c}'
					},
					xAxis: xAxisObj,
					yAxis: yAxisObj,
					series: [seriesObj]
				};
                // 使用刚指定的配置项和数据显示图表。
                goumailingshiChart2.setOption(option);
				

                  //根据窗口的大小变动图表
                window.onresize = function() {
                    goumailingshiChart2.resize();
                };
            }
        });
      })
    },
































//统计接口1
    maomixinxiChat1() {
      this.$nextTick(()=>{

      })
    },


































































































  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
	





</style>
