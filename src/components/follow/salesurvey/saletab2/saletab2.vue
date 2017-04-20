<template>
	<div class="suvery-box">
		<div class='suvery-count'>{{unitprice.count | commaSepNumber}}<span>箱</span></div>
		<div class='suvery-more' :class='unitprice.state'>
			<div class='change-count'>
				{{unitprice.change | commaSepNumber}}元
				<i class='fa' :class="{'fa-arrow-down': unitprice.state==='down','fa-arrow-up': unitprice.state==='up'}"></i>
			</div>
			<div class='change-rate'>
				{{unitprice.rate}}
				<i class='fa' :class="{'fa-arrow-down': unitprice.state==='down','fa-arrow-up': unitprice.state==='up'}"></i>
			</div>
		</div>
		<div class='saleCountChart' ref="suveryUnitpriceChart">

		</div>
	</div>
</template>
<script>
import axios from 'axios'
import echarts from 'echarts'
export default {
	props: {
		sourcekey: String
	},
	data() {
		return{
			unitprice: {
				count: '28650',
				change: '32',
				rate: '0.80%',
				state: 'up'
			}
		}
	},
	mounted() {
		this.initChart();
	},
	methods: {
		initChart() {
			let myChart = echarts.init(this.$refs.suveryUnitpriceChart)
			if( this.sourcekey === 'china'){
				myChart.setOption(this.getChinaChartOption())
			}else{
				myChart.setOption(this.getChartOption())
			}
		},
		getChinaChartOption() {
			let leftColor = '#ffcc00'
			let rightColor ='#ff9966'
			let option = {
			    tooltip : {
			        show:false,
			    },
			    barWidth: '20px',
			    grid: {
			        left: '3%',
			        right: '8%',
			        bottom: '10%',
			        top: '15%',
			        containLabel: true
			    },
			    xAxis : {
			    	show: false
			    },
			    yAxis : {
					axisLine: { //横坐标线是否显示
						show: false
					},
					axisTick: {
						show: false
					},
					type: 'category',
					nameTextStyle: {
						fontSize: '1rem',
						fontFamily: 'inhert',
					},
					boundaryGap: false,
					data : ['五类','四类','三类','二类','一类']
			    },
			    series : [{
			            name:'全国',
			            type:'bar',
			            stack:'1',
			            itemStyle: {
							normal:{
								color:rightColor,//图形的颜色
								label:{
									show:true,//在节点上显示数字
									textStyle:{ //数字的样式
										color: rightColor
									},
									formatter:function(params){//格式化数据避免显示负号
										return params.value.toString().replace("-","")
									}
								}
							}
						},
			            label: {
			            	normal: {
			                    show: true,
		            			position: 'right',
		            			formatter: function(item){
		            				let val = Math.abs(parseInt(item.data))
		            				return /^-?\d+$/.test(val)? parseFloat(val).toLocaleString() : val;
		            			},
		            			textStyle: {
		            				color: rightColor
		            			}
			                }
			            },
			            data:[320, 302, 341, 374, 390]
			        }]
			}
			return option;
		},
		getChartOption() {
			let leftColor = '#ff9966'
			let rightColor ='#ffcc00'
			let option = {
			    tooltip : {
			        show:false,
					trigger: 'axis',
					formatter:function(params,ticket,callback){
						return params[0].name+"</br>"+params[0].seriesName+":"+params[0].value.toString().replace("-","")+unitName;
					}
			    },
			    barWidth: '20px',
			    legend: {
			        data:['北京', '全国'],
			        top: '20px',
							left:'150px'
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : {
			    	show: false,
			    	min:-50000,
			    	max:50000
			    },
			    yAxis : {
					axisLine: { //横坐标线是否显示
						show: false
					},
					axisTick: {
						show: false
					},
					type: 'category',
					nameTextStyle: {
						fontSize: '1rem',
						fontFamily: 'inhert',
					},
					boundaryGap: false,
					data : ['五类','四类','三类','二类','一类']
			    },
			    series : [{
			            name:'北京',
			            type:'bar',
			            stack:'1',
			            itemStyle: {
							normal:{
								color:leftColor,//图形的颜色
								label:{
									show:true,//在节点上显示数字
									textStyle:{ //数字的样式
										color: leftColor
									}
								}
							}
						},
			            label: {
			                normal: {
			                    show: true,
		            			position: 'left',
		            			formatter: function(item){
		            				let val = Math.abs(parseInt(item.data))
		            				return /^-?\d+$/.test(val)? parseFloat(val).toLocaleString() : val;
		            			},
		            			textStyle: {
		            				color: leftColor
		            			}
			                }
			            },
			            data:[-15835, -17953, -21482, -29524, -34625]
			       }, {
			            name:'全国',
			            type:'bar',
			            stack:'1',
			            itemStyle: {
							normal:{
								color:rightColor,//图形的颜色
								label:{
									show:true,//在节点上显示数字
									textStyle:{ //数字的样式
										color: rightColor
									},
									formatter:function(params){//格式化数据避免显示负号
										return params.value.toString().replace("-","")
									}
								}
							}
						},
			            label: {
			            	normal: {
			                    show: true,
		            			position: 'right',
		            			formatter: function(item){
		            				let val = Math.abs(parseInt(item.data))
		            				return /^-?\d+$/.test(val)? parseFloat(val).toLocaleString() : val;
		            			},
		            			textStyle: {
		            				color: rightColor
		            			}
			                }
			            },
			            data:[13835, 15953, 20482, 31524, 35625]
			        }]
			}
				return option;
		}
	}
}
</script>
<style>

</style>
