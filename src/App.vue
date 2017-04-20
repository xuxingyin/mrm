<template>
<div class='page'>
  <transition :name="transitionName">
    <router-view></router-view>
  </transition>
  <m-footnav></m-footnav>
</div>
</template>

<script>
import footnav from 'components/common/footnav/footnav'
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'fadein'
    }
  },
  components: {
    'm-footnav': footnav
  },
  watch: {
    '$route' (to, from) {
      let vm = this;
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth == fromDepth) {
        this.transitionName = 'fadein'
      } else {
        this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
      }
      //当往路径深的页面跳转时,目标页面滚动条在最上边
      //当往路径浅的页面跳转时,目标页面滚动条使用之前的位置
      if(toDepth < fromDepth){
        setTimeout(function(){
          document.body.scrollTop = vm.$store.state.app.pageScrollPosition[to.path]
        },100)
      }else{
        setTimeout(function(){
          document.body.scrollTop = 0;
        },100)
      }
    }
  },
  mounted: function() {
    let vm = this;
    let timer;
    window.onscroll = function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        vm.$store.commit('setPageScrollPosition', {
          page: vm.$route.path,
          scrollTop: document.body.scrollTop
        });
      }, 300)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import 'common/stylus/base'

	.page{
		padding-bottom: 60px;
		height:100%;
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
