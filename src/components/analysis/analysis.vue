<template>
	<div>
		<mt-header title="数据查询">
		</mt-header>
		<mt-cell v-on:click.native="goModel" v-for="item in data" :key='item.image' :title="item.name">
		  <span class='fa fa-angle-right'></span>
		  <img slot="icon" v-bind:src="item.image" width="24" height="24">
		</mt-cell>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui'

	export default {
		data() {
			return{
				data:[{
				"image": "static/analysis/img/market_analysis.png",
				"name": "市场分析"
				},
				{
					"image": "static/analysis/img/brand.png",
					"name": "品牌专区"
				},
				{
					"image": "static/analysis/img/customer.png",
					"name": "客户分析"
				},
				{
					"image": "static/analysis/img/report.png",
					"name": "分析报告"
				},
				{
					"image": "static/analysis/img/subject.png",
					"name": "专题研究"
				}]
			}
		},
		methods: {
			goModel: function(){
				MessageBox({
				  title: '提示',
				  message: '正在建设中...',
				  showCancelButton: true
				})
			}
		}

	}
</script>

<style>

</style>
