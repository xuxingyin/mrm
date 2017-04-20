<template>
	<div class="mainpage" ref='mainpage'>
		<headerbar :opacity = 'opacity' :active='activehead'></headerbar>
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- 幻灯内容 -->
			<swiper-slide v-for="(city,index) in followCitys" :key="city.id">
				<div class="container">
					<todayreal :city=city :swiperIndex=index :activeSwiperIndex=activeSwiperIndex></todayreal>
					<salesurvey :city=city :swiperIndex=index :activeSwiperIndex=activeSwiperIndex></salesurvey>
					<customers :city=city :swiperIndex=index :activeSwiperIndex=activeSwiperIndex></customers>
					<sgp :city=city :swiperIndex=index :activeSwiperIndex=activeSwiperIndex></sgp>
					<brandplan :city=city :swiperIndex=index :activeSwiperIndex=activeSwiperIndex></brandplan>
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
				},
				opacity: 1,
				activehead: false,
				headHei: 0
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
	    methods: {
	    	onScroll() {
	    		/**
	    		 * 基数高度和滚动高度
	    		 */
	    		let h = 158,
	    			t = document.body.scrollTop
	    		if( t === 0){
	    			this.opacity = 1
	    			this.activehead = false
	    		}else{
	    			this.opacity = (document.body.scrollTop/h).toFixed(1)
	    			this.activehead = this.opacity>=0.1? true : false
	    		}
	    	}
	    },
		mounted() {
			let vm = this , timer;
		    vm.swiper.slideTo(this.activeSwiperIndex, 0, false)
		    /**
		     * 监听鼠标滚动事件
		     */
		    window.addEventListener('scroll', this.onScroll)
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
			bottom 60px
</style>
