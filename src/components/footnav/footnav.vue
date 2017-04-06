<template>
	<div>
		<mt-tabbar :fixed=true v-model="selected">
			<mt-tab-item id="tab1" >
				关注
				<i slot="icon" class="tabicon fa fa-bandcamp"></i>
			</mt-tab-item>
			<mt-tab-item id="tab2">
				动态
				<i slot="icon" class="tabicon fa fa-bandcamp"></i>
			</mt-tab-item>
			<mt-tab-item id="tab3">
				分析
				<i slot="icon" class="tabicon fa fa-bandcamp"></i>
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script>

export default {
	data: function() {
		return {
			selected: "tab1"
		}
	},
	watch:{
		selected:function(val,oldVal){
			switch(val) {
			   case "tab1":
			      this.$router.push({path:'/'})
			      break;
			   case "tab2":
			      this.$router.push({path:'/state'})
			      break;
			   case "tab3":
			   		this.$router.push({path:'/analysis'})
			      break;
			   default:
			      this.$router.push({path:'/'})
			      break;
			}
		}
	}
	
}
</script>
<style lang="stylus" scoped>
	.tabicon
		font-size 24px
</style>
