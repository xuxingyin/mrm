<template>
	<section class='todayreal' >
		<div class="order-count">
			<span class="name">今日实时订单数</span>
			<span class="value">
				<animatedInteger v-bind:value="realTimeData.orderCount"></animatedInteger><span class="unit">笔</span>
			</span>
			<span class="button-container">
				<mt-button plain size="small" @click.native="goChina">查看全国情况</mt-button>
			</span>
			<canvas ref="canvas"></canvas>
		</div>
		<div class="bottom-box">
			<div class="left">
				<span class="name">今日实时订购量</span>
				<span class="value">
					<animatedInteger v-bind:value="realTimeData.orderAmount"></animatedInteger><span class="unit">箱</span>
				</span>
			</div>
			<div class="right">
				<span class="name">今日实时订单金额</span>
				<span class="value">
					<animatedInteger v-bind:value="realTimeData.orderMoney"></animatedInteger><span class="unit">万元</span>
				</span>
			</div>
		</div>
	</section>
</template>

<script>
	import box from 'components/follow/box/box'
	import echarts from 'echarts'
	import animatedInteger from 'components/follow/todayreal/animated-integer'

	var random = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	export default {
		props: {
			city: Object,
			swiperIndex: Number
		},
		data() {
				return {
					realTimeData: {
						"orderCount": 1035,
						"orderAmount": 1052,
						"orderMoney": 619
					},
					timer:0
				}
			},
			components: {
				box,
				animatedInteger
			},
			computed: {
			    isMe(){
			      return this.$store.state.follow.activeSwiperIndex == this.swiperIndex
			    }
			},
			watch: {
			    isMe: function (val, oldVal) {
			    	var vm = this;
			    	if(val){
			    		this.getRealTimeData();
			    	}else{
			    		clearInterval(vm.timer);
			    	}
			    }
			},
			methods:{
				getRealTimeData:function() {
					this.timer = setInterval(() =>
						this.realTimeData = {
							"orderCount": this.realTimeData.orderCount + random(1, 10),
							"orderAmount": this.realTimeData.orderAmount + random(1, 3),
							"orderMoney": this.realTimeData.orderMoney + random(1, 3)
						}, 3000);
				},
				canvasGo:function(){
					var now = new Date().getTime();  //获取当前时间毫秒值
					var canvas = this.$refs.canvas;
					canvas.ctx = canvas.getContext('2d');
					var particles = [];
					for(var i=0;i<50;i++){
						var particle = {
							//x,y值都随机一下
							x: random(0,canvas.width),
							y: canvas.height,
							fillStyle:'#ffffff'
						}
						//保存开始坐标
						particle.startX = particle.x;
						particle.startY = particle.y;
						//动画执行时间和结束时间
	                    particle.startTime = now + Math.random() * 20 * 1000;
	                    //x,y方向的移动速度
						particle.speedX = (canvas.width/2 - particle.x)/500;
	                    particle.speedY = -0.2;
	                    particles.push(particle);
					}

					draw();

        	function draw() {
						//清空画布
						canvas.ctx.clearRect(0,0,canvas.width,canvas.height);

						var len = particles.length;

						var curr_particle = null;
						//当前时间毫秒值
						var time = new Date().getTime();
						for(var i = 0; i < len; i++) {

							curr_particle = particles[i];
							//开始漂浮
							if(curr_particle.startTime < time) {
								//改变粒子位置
								curr_particle.x += curr_particle.speedX;
								curr_particle.y += curr_particle.speedY;
							}
							//到达
						    if(curr_particle.y < canvas.height/2) {
						    	//粒子位置复原
						        curr_particle.x = curr_particle.startX;
						        curr_particle.y = curr_particle.startY;
						        //重新计算开始时间和结束时间
						        curr_particle.startTime = time + parseInt(Math.random()*20)*1000;
						    }
						    //设置填充颜色
							canvas.ctx.fillStyle = curr_particle.fillStyle;
							//绘粒子到画布上
							canvas.ctx.fillRect(curr_particle.x,curr_particle.y,1,1);
						}

						//重复绘制
						requestAnimationFrame(draw);
					}

				},
				goChina:function(){
					console.log(1234556);
					this.$router.push({
						path: '/follow/todayreal/todayreal-china'
					})
				}
			},
			mounted: function(){
			    if(this.swiperIndex == 0){
			    	this.getRealTimeData();
			    }
			    this.canvasGo();
			}
	}
</script>

<style lang='stylus' scoped>
.todayreal
	background #ffffff
	margin-bottom 10px
	.order-count
		background #26a2ff
		padding-bottom 20px
		padding-top 20px
		position relative
		.name
			display block
			text-align center
			color #ffffff
			font-size 12px
		.value
			display block
			text-align center
			font-size 48px
			color #ffffff
			margin-top 10px
			font-weight bold
			.unit
				font-size 24px
		.button-container
			display block
			margin-top 15px
			text-align center
			.mint-button--default.is-plain
				border-color #ffffff
				color #ffffff
				z-index 999
		canvas
			position absolute
			width 100%
			height 100%
			top 0
			left 0
			z-index 0
	.bottom-box
		border-top #ccc 1px solid
		display flex
		padding-bottom 10px
		.left
			flex 1
			.name
				display block
				margin-top 15px
				text-align center
				color #999999
				font-size 12px
			.value
				display block
				margin-top 10px
				text-align center
				color #333333
				font-size 30px
				font-weight bold
				.unit
					font-size 14px
		.right
			flex 1
			.name
				display block
				margin-top 15px
				text-align center
				color #999999
				font-size 12px
			.value
				display block
				margin-top 10px
				text-align center
				color #333333
				font-size 30px
				font-weight bold
				.unit
					font-size 14px
</style>
