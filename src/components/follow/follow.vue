<template>
	<div class="mainpage">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- 幻灯内容 -->
			<swiper-slide v-for="(city,index) in followCitys" :key="city.id">
				<div class="container">
					<headerbar :city=city :swiperIndex=index :activeSwiperIndex=activeSwiperIndex></headerbar>
					<todayreal :city=city :swiperIndex=index :activeSwiperIndex=activeSwiperIndex></todayreal>
					<salesurvey></salesurvey>
					<customers></customers>
					<sgp></sgp>
					<brandplan></brandplan>
				</div>
			</swiper-slide>
			<!-- ... -->
			<!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import Vue from 'vue'
	import headerbar from 'components/follow/headerbar/headerbar'
	import todayreal from 'components/follow/todayreal/todayreal'
	import salesurvey from 'components/follow/salesurvey/salesurvey'
	import customers from 'components/follow/customers/customers'
	import sgp from 'components/follow/sgp-distribution/sgp'
	import brandplan from 'components/follow/brandplan/brandplan'
	
	//https://github.com/surmon-china/vue-awesome-swiper
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	Vue.use(VueAwesomeSwiper);

	export default {
		data() {
			return {
				swiperOption: {
					notNextTick: true,
					pagination: '.swiper-pagination',
					onSlideChangeEnd :(swiper) =>{
						this.$store.commit('setActiveSwiperIndex', {
							index: swiper.activeIndex
						});
					}
				}
			}
		},
		computed: {
		    followCitys () {
		      return this.$store.state.follow.followCitys
		    },
		    swiper() {
		      return this.$refs.mySwiper.swiper
		    },
		    scrollPosition(){
		      return this.$store.state.follow.scrollPosition
		    },
		    activeSwiperIndex(){
		      return this.$store.state.follow.activeSwiperIndex
		    }
		},
		components: {
	    	headerbar,
	    	todayreal,
			salesurvey,
			customers,
			sgp,
			brandplan
	    },
		mounted: function(){
		    this.swiper.slideTo(this.activeSwiperIndex, 0, false);
		}
	    
	   
	}
</script>

<style lang="stylus" scoped>
	.mainpage
		background #eeeeee
		height 100%
		.container
			padding-top 50px
			height 100%
	
		.swiper-pagination
			position fixed
			bottom 100px 
</style>