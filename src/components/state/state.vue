<template>
	<transition name="custom-classes-transition">
		<div class='state' name="fadeOutLeft">
				<mt-header fixed title="最新动态"></mt-header>
				<div class='content'>
					<h2 class='subtitle'>
					2016年10月份全行业最新动态
					</h2>
					<section class='sbstract'>
						<p class='sect'>
							<span class='sbs-span'>
								[ 摘要 ]
							</span>
							省级卷烟营销平台本月新增6个上线地市。10月份全国36个重点城市卷烟销售90万箱，
							同15年相比下降12.2%。从1-10月份累计来看，重点城市销售卷烟1063.4万箱，
							同比下降5.32%。从全行业来看，10月份全国销售卷烟90万箱，同比下降6.4%，
							同15相比下降12.02%。从1-10月份累计来看，全国销售卷烟3998.44万箱，同比下降6.16%。
						</p>
					</section>
					<div class='section-box'>
						<section class='box'>
							<h3>
								一、平台上线情况
							</h3>
							<p class='sect'>
								截止到2016年11月15日，省级卷烟营销平台上线200个地市级公司，本月新增加6个。
								覆盖230万零售客户，1990万箱卷烟销量。其中，参与改革试点的63个城市全部上线运行，
								占比达到32%。
							</p>
							<div class='more'>
								<router-link class="state-a" tag="a" to="/state/online">
									查看明细
								</router-link>
							</div>
							<img class='describe' src="./img/news_img1.png">
						</section>
						<section class='box'>
							<h3>
								二、重点城市销售情况
							</h3>
							<p class='sect'>
								10月份，全国36个重点城市销售卷烟90.0万箱，同比下降6.4%，小于全国平均降幅（下降7.3%），同14年相比下降12.02%。
							</p>
							<p class='sect'>
								从1-10月份累计来看，重点城市销售卷烟1063.40万箱，同比下降5.32%，较1-9月累计降幅（下降5.22%）放大，好于全国平均水平(下降6.16%)。
							</p>
							<p class='sect'>
								从各单位来看，36家重点城市中有5家单位1-10月份累计销量同比依然保持增长，与1-9月份持平。
								同比下降的单位中，有17家单位1-10月份累计销量降幅较1-9月份累计销量降幅有所收窄，降幅收窄的单位数量较上个月有所减少。
								其中，累计销量同比增幅前三位的单位是拉萨、贵阳、广州，累计销量同比降幅前三的单位分别是大连、沈阳、天津。

							</p>
							<div class='more'>
								<router-link class="state-a" tag="a" to="/state/keyCity">
									查看明细
								</router-link>
							</div>
							<img class='describe' src="./img/news_img2.png">
						</section>
						<section class='box'>
							<h3>
								三、行业销售情况
							</h3>
							<p class='sect'>
								10月份，全国销售卷烟90.0万箱，同比下降6.4%，同14年相比下降12.02%。
							</p>
							<p class='sect'>
								从1-10月份累计来看，全国销售卷烟3998.44万箱，同比下降6.16%，较1-9月累计降幅（下降5.22%）放大。
							</p>
							<p class='sect'>
								从各单位来看，全国有5家单位1-10月份累计销量同比依然保持增长，与1-9月份持平。
								同比下降的单位中，有17家单位1-10月份累计销量降幅较1-9月份累计销量降幅有所收窄，降幅收窄的单位数量较上个月有所减少。
								其中，累计销量同比增幅前三位的单位是拉萨、贵阳、广州，累计销量同比降幅前三的单位分别是大连、沈阳、天津。

							</p>
							<img class='describe' src="./img/news_img3.png">
						</section>
					</div>
				</div>
		</div>
	</transition>
</template>

<script>
	export default {}
</script>

<style lang="stylus">
@import '../../common/stylus/config'
state-import-font-color = #26a2ff
state-bgcolor = #eeeeee
.page
	padding-bottom: 0px
.state
	padding-top: 40px
	.content
		section
			margin-bottom: 10px
			letter-spacing: 0.01rem
			line-height: 1.5rem
			text-align:justify
		.subtitle
			padding: 1.5rem
			text-align: center
			color: #333333
			font-size: 22px
			font-weight: bold
		.sbstract
			background-color: state-bgcolor
			padding: 18px 8px
			margin-top: .5rem
			color: #333333
			span
				padding 5px
				font-weight: 400
				color: state-import-font-color
		.section-box
			padding-bottom: 60px
			background-color: state-bgcolor
			.box
				padding: 10px
				background-color: #fff
				border-top: 5px solid state-import-font-color
				// box-shadow: 0 3px 6px rgba(0,0,0,.175)
				&:first-child
					margin-top: 0px
				h3
					padding: 12px
					color: state-import-font-color
					font-size: 1.2rem
					font-weight: bold
				.sect
					margin-top: 10px
					.state-a
						color: #26a2ff
				.describe
					margin-top: 18px
					width: 100%
					height: 100%
				.more
					margin-top: 1.5rem
					.state-a
						display: inline-block
						width: 100%
						padding: .5rem 0px
						background-color: state-bgcolor
						text-align: center
						border-radius: 1rem
</style>
