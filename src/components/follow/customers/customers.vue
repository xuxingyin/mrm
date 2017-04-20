<template>
	<box class="customers" title="客户构成" more="查看全国" href="#/follow/customers/custcountry">		
		<div class="important-data">
			<div class="important-left">
				<div class="important-title">{{cust.title}}</div>
				<div class='important-count'>{{cust.count}}<span>户</span></div>
	    		<div class='important-more'>
	    			<div class='change-count'>
	    				{{cust.change}}箱
	    				<i class='fa fa-arrow-down'></i>
	    			</div>
	    			<div class='change-rate'>
	    				{{cust.change_rate}}
	    				<i class='fa fa-arrow-down'></i>
	    			</div>
	    		</div>
			</div>
			<div class="important-right">
				<div class="important-title">{{sale.title}}</div>
				<div class='important-count'>
					<div class="pre-div"></div>
					<div class="rate">{{sale.rate}}<span>%</span></div>
					<div class="state"><div class='high'>偏高</div></div>
				</div>
	    		<div class='important-more'>
	    			<div class='change-count'>
	    				{{sale.change}}
	    				<i class='fa fa-arrow-down'></i>
	    			</div>
	    			<a class="detail" href="#/follow/customers/custdetail">查看明细
	    			<i class='fa fa-angle-right'></i></a>
	    		</div>
			</div>
		</div>
		<div class='custChart' ref="custChart">		
		</div>
	</box>
</template>

<script>
import box from 'components/follow/box/box'
import axios from 'axios'
import echarts from 'echarts'
export default {
	props: {
	    city: Object,
	    swiperIndex: Number
	},
	data() {
		return {
			title: {
				name: ''
			},
			cust: {
				title: '正常经营零售户数',
				count: '65824',
				change: '953',
				change_rate: '1.30%'
			},
			sale: {
				title: '大户销量占比',
				rate: '56.00',
				change: '2.60%',
				url: ''
			}
		}
	},
	components: {
		box
	},
	mounted() {
		if(this.isMe){
			this.initChart();
		}
	},
	computed: {
		isMe() {
			return this.$store.state.follow.activeSwiperIndex == this.swiperIndex
		}
	},
	watch: {
	    isMe: function(isMe) {
	      	this.initChart();
	    }
	},
	methods: {
		initChart() {
			let myChart = echarts.init(this.$refs.custChart)
			myChart.setOption(this.getChartOption())
		},
		getChartOption() {
			let leftColor = '#ffcc00'
			let rightColor ='#ff9966'
			let option = {
			    tooltip : {
			        show:false,
					trigger: 'axis',
					formatter:function(params,ticket,callback){
						return params[0].name+"</br>"+params[0].seriesName+":"+params[0].value.toString().replace("-","")+unitName;
					}
			    },
			    barWidth: '20px',
			    
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        top: '30px',
			        containLabel: true
			    },
			    xAxis : {
			    	show: false,
			    	min:0,
			    	max:40
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
					data : ['5000条以上','2000-5000条','1000-2000条','500-1000条','200-500条','100-200条','50-100条','50条以下']
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
		            				//let val = Math.abs(parseInt(item.data))
		            				let val = item.data.toFixed(2);
		            				return /^-?\d+$/.test(val)? parseFloat(val).toLocaleString()+"%" : val+"%";
		            			},
		            			textStyle: {
		            				color: rightColor
		            			}
			                }
			            },
			            data:[5.10, 8.30, 12.60, 19.40, 28.50,30.90,18.70,12.60]
			        }]
			}
			return option;
		}
	}
}
</script>

<style lang='stylus' rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/config'
.customers
	.important-data
		width:100%
		display:flex
		>div
			flex: 1
			margin-top: 15px
			text-align: center
			.important-title
				color:#999
			.important-count
				font-size: 1.6rem
				padding: 10px
				span
					font-size: 0.8rem
			.important-more
				display: flex
				justify-content: center
				padding-left:10px
				padding-right:10px
				.change-count
					flex:1
					padding: 0px 10px
					color: #f96
					font-size:1.0rem
				.change-rate
					flex:1
					padding: 0px 10px
					font-size:1.0rem
					color: #f96
		>.important-right
			.important-count
				display:flex
				.pre-div
					flex:1
				.rate
					flex:2
				.state
					flex:1
					padding-top:3px
					.high
						width:30px
						float:right
						background-color: #f47761
						padding: 3px 3px 2px 2px
						font-size: 1rem
						border-radius: 4px
						color: #fff
			.important-more
				.detail
					margin-right: 14px
					margin-top: -3px
					padding: 4px
					font-size: 0.8rem
					color: import-font-color
	.custChart
		width: 100%
		height:	300px	
</style>