<template lang="html">
	<div class="followCity">
		<mt-header title="我关注的城市">
			<mt-button slot="left" icon="back" @click="routerBack">返回</mt-button>
			<mt-button slot="right" v-on:click="editFlag = !editFlag">
				<i class="fa fa-pencil-square-o fa-lg"></i>
			</mt-button>
		</mt-header>
		<div class="followCityList">
			<mt-cell v-for="(city,index) in followCitys" :key="city.id" @click.native="onCitySelect(index)">
				<span slot="title">{{city.name}}</span>
				<i slot="icon" class="fa fa-minus-circle animate-fadeInLeft" v-if="editFlag == true"></i>
				<i class="fa fa-bars animate-fadeInRight" v-if="editFlag == true"></i>
			</mt-cell>
		</div>
		<div class="addNewCity" v-on:click="citySelectPopupVisible = true">
			<i class="fa fa-plus-circle"></i>
		</div>
		<mt-popup v-model="citySelectPopupVisible" position="bottom" class="citySelectPopup" :modal=true>
			<div class="picker-toolbar">
				<span class="picker-action cancel-button" v-on:click="citySelectPopupVisible = false">取消</span>
				<span class="picker-action confirm-button" v-on:click="pickerSelectConfirm">确定</span>
			</div>
			<mt-picker :slots="cityPickerSlot" @change="onValuesChange" ref="picker">
			</mt-picker>
		</mt-popup>
	</div>
</template>
<script>
import axios from 'axios'

let newCity ="";

export default {
	methods: {
		onValuesChange(picker, values) {
			picker.setSlotValues(1, this.cityData[values[0]]);
			newCity = values[1];
		},
		routerBack() {
			this.$router.go(-1);
		},
		onCitySelect(index){
			this.$router.push({
				path: '/follow'
			})
			this.$store.commit('setActiveSwiperIndex', {
				index: index
			});

		},
		pickerSelectConfirm() {
			this.citySelectPopupVisible = false;
			this.$router.push({
				path: '/follow'
			})
			this.$store.commit('addNewCity', {
				name: newCity
			});
			this.$store.commit('setActiveSwiperIndex', {
				index: this.$store.state.follow.followCitys.length - 1
			});

		}
	},
	data: function() {
		var provinceData = ["北京", "广东", "上海", "天津", "重庆", "辽宁", "江苏", "湖北", "四川", "陕西", "河北", "山西", "河南", "吉林", "黑龙江", "内蒙古", "山东", "安徽", "浙江", "福建", "湖南", "广西", "江西", "贵州", "云南", "西藏", "海南", "甘肃", "宁夏", "青海", "新疆"];
		return {
			editFlag: false,
			citySelectPopupVisible: false,
			cityData: {},
			cityPickerSlot: [{
				flex: 1,
				values: provinceData,
				className: 'slot1',
				textAlign: 'center'
			}, {
				divider: true,
				content: '-',
				className: 'slot2'
			}, {
				flex: 1,
				values: ["北京"],
				className: 'slot3',
				textAlign: 'center'
			}]
		}
	},
	computed: {
		followCitys() {
			return this.$store.state.follow.followCitys
		}
	},
	created() {
		axios.get('static/city.json').then((res) => {
			this.cityData = res.data
		})
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.followCity
		height 100%
	.mint-cell
		.mint-cell-title
			.fa-minus-circle
				font-size 25px
				color #f44336
				vertical-align middle
		.mint-cell-value
			.fa-bars
				font-size 20px

	.animate-fadeInLeft
		animation: fadeInLeft 0.4s;

	.animate-fadeInRight
		animation: fadeInRight 0.4s;

	.addNewCity
		.fa-plus-circle
			font-size 40px
			color #26a2ff
			position fixed
			bottom 100px
			right 30px
	.citySelectPopup
		width 100%

	.picker-toolbar
		border-bottom 1px solid #eaeaea
		.picker-action
			display inline-block
			width 50%
			text-align center
			line-height 40px
			font-size 16px
			color #26a2ff
		.cancel-button
			float left
		.confirm-button
			float right
</style>
