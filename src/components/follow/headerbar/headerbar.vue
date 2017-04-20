<template>
	<div class='headerbar' :class="{active: active}" ref='headdom'>
		<span class="name">
			<span class="gps" v-if="swiperIndex == 0">
				当前位置
			</span>
			{{city.name}}
		</span>
		<span class="edit">
			<router-link to="/follow/followCity">
				<i class="fa fa-bars"></i>
			</router-link>
		</span>
	</div>
</template>

<script>
	export default {
		props: ['opacity','active'],
		computed: {
			city(){
				return this.$store.state.follow.followCitys[this.swiperIndex]
			},
		    swiperIndex () {
		        return this.$store.state.follow.activeSwiperIndex
		    }
		},
		watch: {
    		opacity: function(newValue, oldValue) {
	    		this.$refs.headdom.style.opacity = newValue
    		}
		}
	}
</script>

<style lang='stylus' scoped>
.headerbar
	box-sizing border-box
	display block
	width 100%
	height 50px
	background #ffffff
	color #333333
	text-align center
	position fixed
	z-index 999999
	top 0
	.gps
		color #26a2ff
		font-size 12px
	.name
		font-size 22px
		line-height 50px
	.edit
		.fa-bars
			font-size 22px
			float right
			margin-right 14px
			margin-top 14px
			color #26a2ff
	&.active
		background-color: #00a2f6
		color: #fff
		.gps
			color #fff
		.edit
			.fa-bars
				color: #fff

</style>
