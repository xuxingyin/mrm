<template>
	<section class='box'>
		<div class='title .clearfix'>
			<slot name="name">
				<h3 v-text="title"></h3>
			</slot>
			<slot name="more">
				<a class='more'>
					{{more}}
					<span class='fa fa-angle-right'></span>
				</a>
			</slot>
		</div>
		<div class='content'>
			<slot>
			</slot>
		</div>
	</section>
	
</template>

<script>
	export default {
		props: {
			title: String,
			more: String
		}
	}
</script>

<style lang='stylus' scoped>
.box
	margin-bottom: 10px
	background: #fff
	.title
		padding: 0px 10px
		height: 50px
		line-height: 50px
		border-bottom: 1px solid #ccc
		h3
			float: left
			font-weight: bold
		.more
			float: right
	.content
		padding-top: 10px
		padding-bottom: 10px
</style>