<template>
<section class='box'>
  <div class='title .clearfix'>
    <slot name="name">
      <h3 v-text="title"></h3>
    </slot>
    <span class="unit">
			<slot name="unit">
				{{unit}}
			</slot>
		</span>
  </div>
  <div class='content'>
    <slot></slot>
  </div>
</section>
</template>

<script>
export default {
  props: {
    title: String,
    unit: String
  }
}
</script>

<style lang='stylus' scoped>
@import '../../../common/stylus/config'
.box
	margin-bottom: 10px
	background: #fff
	> .title
		padding: 0px 10px
		height: 50px
		line-height: 50px
		h3
			float: left
			font-size: 1rem
		.unit
			float: right
			font-size: 0.8rem
			color: #999999
	.content
		padding-bottom: 20px
</style>
