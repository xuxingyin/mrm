<template>
	<box class="brand" title="品牌规划" >
		<div class='container'>
			<div class="b-content">
				<div class='left-content'>
					<img src="static/brandplan/img/icon-25.png"/>
				</div>
				<div class='right-content'>
					<div class='b-title first'><div class="flag"></div><p>2017年规划品规个数<span>213</span>个，在销品规个数<span>344</span>个</p></div>
					<div class='b-title'><div class="flag"></div><p>2016年销量低于50箱且2017年仍在销品规个数<span>13</span>个</p></div>
				</div>
			</div>
		</div>
	</box>
</template>

<script>
import box from 'components/follow/box/box'

export default {
	data() {
		return {
		}
	},
	components: {
		box
	}
}
</script>

<style lang='stylus' scoped>
@import '../../../common/stylus/config'
.brand
	.container
		margin-bottom: 0px
		padding-top: 0px
		background:#fff
		.b-content
			display: flex
			padding-bottom:20px
			border-bottom: 1px solid #e6e6e6
			.left-content
				flex: 1
				display: flex
				margin-top:20px
				margin-bottom: 20px
				justify-content:center
				img
					width:100px
					height:100px
			.right-content
				flex: 1.5
				display:flex
				flex-direction:column
				.b-title
					flex: 1
					display:flex
					align-items: center
					color:font-color
					padding-right:10px
					p
						flex: 1
						line-height:1.4rem
					&.first
						border-bottom: 1px solid #e6e6e6	
					span
						color:#f47761
						font-weight:500
					.flag
						background:import-font-color
						width: 5px
						height: 5px
						border-radius:100%
						margin-right:10px
</style>