<template>
<box class='salesurvey' title="销售概况" more="查看全国" href="#/follow/sale/saledetail">
  <div class='tabnav'>
    <a @click="tabToggle(tab.saletab1)" class='nav first' :class="{isActive: this.currentView==='saletab1'}">销量</a>
    <a @click="tabToggle(tab.saletab2)" class='nav' :class="{isActive: this.currentView==='saletab2'}">单箱值</a>
    <a @click="tabToggle(tab.saletab3)" class='nav last' :class="{isActive: this.currentView==='saletab3'}">库存</a>
  </div>
  <div class="tabcontent">
    <component :is='currentView' keep-alive sourcekey="city"></component>
  </div>
</box>
</template>
<script>
import box from 'components/follow/box/box'
import saletab1 from './saletab1/saletab1.vue'
import saletab2 from './saletab2/saletab2.vue'
import saletab3 from './saletab3/saletab3.vue'

export default {
	props: {
    city: Object,
    swiperIndex: Number
  },
  data() {
    return {
      selected: 'saletab1',
      currentView: '',
      tab: {
        saletab1: 'saletab1',
        saletab2: 'saletab2',
        saletab3: 'saletab3'
      }
    }
  },
	computed: {
		isMe() {
			return this.$store.state.follow.activeSwiperIndex === this.swiperIndex
		}
	},
	watch: {
    isMe: function(isMe) {
      var vm = this;
      if ( isMe && vm.currentView==='' ){
      	vm.currentView = "saletab1"
      }
    }
  },
  components: {
    box,
    saletab1,
    saletab2,
    saletab3
  },
  methods: {
    tabToggle: function(tabText, event) {
      this.currentView = tabText
      this.selected = tabText
    }
  },
  mounted: function() {
    if (this.isMe) {
      this.currentView = "saletab1";
    }
  }
}
</script>
<style lang='stylus'>
@import '../../../common/stylus/config'
.salesurvey
	.tabnav
		display: flex
		justify-content: center
		.nav
			padding: 10px 20px
			border: 1px solid high-color
			background-color: #fff
			color: high-color
			&.first
				padding: 10px 27px
				border-right:0px
				border-radius: .4rem 0px 0px .4rem
			&.last
				padding: 10px 27px
				border-left:0px
				border-radius: 0px .4rem .4rem 0px
			&.isActive
				background-color: high-color
				color: #fff
	.tabcontent
		height: 264px
		.suvery-box
			margin-top: 0.3rem
			text-align: center
			.suvery-count
				flex 1
				padding: 10px
				font-size: 30px
				span
					font-size: 1rem
			.suvery-more
				display: flex
				justify-content: center
				&.up
					color: #33cc99
				&.down
					color: #ff9966
				.change-rate
					padding: 0px 10px
				.change-count
					padding: 0px 10px
				i
					margin-left: .3rem
			.saleCountChart
				height: 200px
				width: 100%
</style>
