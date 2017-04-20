<template>
	<box title="货源投放">
		<div class='cell title'>
			<div class='left-box'>
				规格
			</div>
			<div class='right-box'>
				订货集中度
			</div>
		</div>
		<div v-on:click="goDetail(item.name)" v-for="item in data" class='cell'>
			<div class='left-box'>
				{{item.name}}
			</div>
			<div class='right-box'>
				<span class='value'>{{item.rate}}</span>
				<span class='state' :class="{high: item.state === '1'}" v-text="item.state === '1' ? '偏高' : '正常' "></span>
				<i class='right-arrow' ></i>
			</div>
		</div>
		<div class='footer' >
			<a class='more-btn' href="#/follow/sgp/sgpall" >查看全部</a>
		</div>
	</box>
</template>

<script>
import box from 'components/follow/box/box'
import axios from 'axios'

export default {
	data() {
		return {
			title: {
				name: '货源投放'
			},
			data:[]
		}
	},
	components: {
		box
	},
	created() {
		this.data = this.getData()

	},
	methods: {
		goDetail(name) {
			this.$router.push({path:'/follow/sgp/sgpone',query:{'id':'1','name':name}});
		},
		getData() {
			return [{
					"name": "黄鹤楼",
					"rate": "89.62%",
					"state": "1"
				},
				{
					"name": "七匹狼",
					"rate": "80.35%",
					"state": "1"
				},
				{
					"name": "红塔山",
					"rate": "73.66%",
					"state": "1"
				},
				{
					"name": "云烟",
					"rate": "56.54%",
					"state": "0"
				},
				{
					"name": "苏烟",
					"rate": "54.93%",
					"state": "0"
				}]
		}
	}
}
</script>

<style lang='stylus' scoped>
@import '../../../common/stylus/config'
@import '../../../common/stylus/mixin'
.cell
	padding: 1.1rem
	display: flex
	align-items: center
	border-1px(#e6e6e6)
	&.title
		color: ignore-font-color
		margin-top: -1.1rem
	.left-box
		flex: 1
	.right-box
		display: flex
		width: 8rem
		min-width: 98px
		*
			display: inline-block
			padding: 0.2rem
		.state
			margin-left: .4rem
			background-color: #cccccc
			border-radius: 4px
			color: #fff
			line-height: 100%
			&.high
				background-color: #f47761
		.right-arrow
			margin-left: .4rem
			width: .4rem
			height: .4rem
			margin-top: .3rem
			border-right: 1px solid #999999
			border-bottom: 1px solid #999999
			transform: rotate(-45deg)
			color: ignore-font-color
.footer
	text-align: center
	padding: 1.5rem
	padding-bottom: 0px
	color: import-font-color
	.more-btn
		padding: .5rem 1.2rem
		border: 1px solid high-color
		border-radius: .4rem
		background-color: #fff
		color: high-color
		&:active
			background-color: high-color
			color: #fff
</style>
