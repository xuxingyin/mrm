<template>
	<div class='page'>
		<transition :name="transitionName">
		  <router-view></router-view>
		</transition>
		<m-footnav></m-footnav>
	</div>
</template>

<script>
	import footnav from 'components/footnav/footnav'
	export default {
		name: 'app',
		data(){
			return {
				transitionName:'fadein'
			}
		},
		components: {
			'm-footnav': footnav
		},
		watch: {
		  '$route' (to, from) {
		  	const toDepth = to.path.split('/').length
    		const fromDepth = from.path.split('/').length
		  	if(toDepth == fromDepth){
		  		this.transitionName = 'fadein'
		  	}else{
		  		this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
		  	}
		  }
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import 'common/stylus/base'
	
	.page{
		padding-bottom: 50px;
		height: 100%;
	}
	.slide-right-enter-active {
	  animation: slideInRight 0.3s;
	}
	
	.slide-left-enter-active {
	  animation: slideInLeft 0.3s;
	}
	.fadein-enter-active{
	  animation: fadeIn 0.5s;
	}
</style>

