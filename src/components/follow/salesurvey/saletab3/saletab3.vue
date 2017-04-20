<template>
	<div class="suvery-box">
		<div class='suvery-count'>{{stock.count | commaSepNumber}}<span>箱</span></div>
		<div class='suvery-more' :class='stock.state'>
			<div class='change-count'>
				{{stock.change | commaSepNumber}}箱
				<i class='fa' :class="{'fa-arrow-down': stock.state==='down','fa-arrow-up': stock.state==='up'}"></i>
			</div>
			<div class='change-rate'>
				{{stock.rate}}
				<i class='fa' :class="{'fa-arrow-down': stock.state==='down','fa-arrow-up': stock.state==='up'}"></i>
			</div>
		</div>
		<div class='saleCountChart' ref="suveryStockChart">
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
			stock: {
				count: '63521',
				change: '1526',
				rate: '7.80%',
				state: 'up'
			}
		}
	},
	mounted() {
		this.initChart();
	},
	methods: {
		initChart() {
			let myChart = echarts.init(this.$refs.suveryStockChart);
			myChart.setOption(this.getChartOption());
		},
		getChartOption() {
					var dataObj = this.getChartData();

					var option = {
						tooltip: {
							show: false
						},
						legend: {
					        data:['存销比'],
					        top: '0px',
					        right: '10px',
					        borderColor: '#ff9966',
					        textStyle:{
					        	color: '#999999'
					        }
					    },
						grid: {
							left: '0px',
							right: '22px',
							containLabel: true,
							bottom: '10px',
							top: '30px'
						},
						xAxis: {
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
								color: '#abbae1'
							},
							boundaryGap: false,
							data: dataObj.month
						},
						yAxis: {
							show: false,
							min: 0
						},
						lineStyle: {
							normal: {
								color: '#ff9966',
								shadowColor: '#ff9966',
								width: 4
							}
						},
						textStyle: {
							color: '#999999'
						},
						series: [{
							name: '存销比',
							type: 'line',
							label: {
								normal: {
									show: true,
									offset: [0, -5]
								}
							},
							lineStyle: {
								color: '#ff9966'
							},
							symbolSize: 10,
							color: '#ff9966',
							itemStyle: {
								normal: {
									borderColor: '#ff9966'
								}
							},
							data: dataObj.data
						}]
					}

				return option;
		},
		getChartData() {
				var month = ['10月','11月','12月','1月','2月'];
				var data = [];
				var random = function (min,max) {
				    return (Math.random()*(max-min)+min).toFixed(2);
				};
				for(var i=0;i<12;i++){
					data.push(random(0.5,1.4));
				}

				return {
					month:month,
					data:data
				}
		}
	}
}
</script>
<style>

</style>
