<template>
	<div class='saledetail'>
		<mt-header fixed title="全国">
			<router-link to="/follow" slot="left">
			    <mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class='navbox'>
			<div class='tabnav'>
				<a @click="tabToggle(tab.saletab1)" class='nav first' :class="{isActive: this.currentView==='saletab1'}">销量</a>
				<a @click="tabToggle(tab.saletab2)" class='nav' :class="{isActive: this.currentView==='saletab2'}">单箱值</a>
				<a @click="tabToggle(tab.saletab3)" class='nav last' :class="{isActive: this.currentView==='saletab3'}">库存</a>
			</div>
			<div class="tabcontent">
				<component :is='currentView' :sourcekey='sourcekey' keep-alive></component>
			</div>
		</div>
		<tablebox  title="年累销量增幅前五省" unit="单位：万箱" >
		    <el-table :data="tableData" stripe style="width: 100%" :default-sort = "{prop: 'rate', order: 'descending'}">
		      <el-table-column prop="province" sortable label="省份"></el-table-column>
		      <el-table-column prop="count" sortable label="销售数量"></el-table-column>
		      <el-table-column prop="rate" width="130" sortable label="同比增幅">
				  <template scope="scope" >
			        <span>{{ scope.row.rate }}%</span>
					<el-tag type="success">{{scope.row.rateTag}}</el-tag>
			      </template>
			  </el-table-column>
		    </el-table>
		    <div class='footer' >
				<!-- <a class='more-btn' href='#/follow/sale/saledetail/allprovince' >查看全部</a> -->
				<router-link class='more-btn' :to="{name:'saleprovinces',query:{sort: 'descending'}}">查看全部</router-link>
			</div>
		</tablebox>
		<tablebox  title="年累销量增幅后五省" unit="单位：万箱" >
			<el-table :data="tableData1" stripe style="width: 100%" :default-sort = "{prop: 'rate', order: 'ascending'}">
		      <el-table-column prop="province" sortable label="省份"></el-table-column>
		      <el-table-column prop="count" sortable label="销售数量"></el-table-column>
		      <el-table-column prop="rate" width="140" sortable label="同比增幅">
				  <template scope="scope" >
			        <span>{{ scope.row.rate }}%</span>
					<el-tag type="danger">{{scope.row.rateTag}}</el-tag>
			      </template>
			  </el-table-column>
		    </el-table>
		    <div class='footer' >
				<router-link class='more-btn' :to="{name:'saleprovinces',query:{sort: 'ascending'}}">查看全部</router-link>
			</div>
		</tablebox>
		<tablebox  title="年累销量增幅前10城市" unit="单位：万箱" >
			<el-table :data="tableData2" stripe style="width: 100%" :default-sort = "{prop: 'rate', order: 'descending'}">
		      <el-table-column prop="city" sortable label="城市"></el-table-column>
		      <el-table-column prop="count" sortable label="销售数量"></el-table-column>
		      <el-table-column prop="rate" sortable label="同比增幅">
				  <template scope="scope" >
			        <span>{{ scope.row.rate }}%</span>
			      </template>
			  </el-table-column>
		    </el-table>
		    <div class='footer' >
				<router-link class='more-btn' :to="{name:'salecitys',query:{sort: 'descending'}}">查看全部</router-link>
			</div>
		</tablebox>
		<tablebox  title="年累销量增幅后10城市" unit="单位：万箱" >
			<el-table :data="tableData3" stripe style="width: 100%" :default-sort = "{prop: 'rate', order: 'ascending'}">
		      <el-table-column prop="city" sortable label="城市"></el-table-column>
		      <el-table-column prop="count" sortable label="销售数量"></el-table-column>
		      <el-table-column prop="rate" sortable label="同比增幅">
				  <template scope="scope" >
			        <span>{{ scope.row.rate }}%</span>
			      </template>
			  </el-table-column>
		    </el-table>
		    <div class='footer' >
				<router-link class='more-btn' :to="{name:'salecitys',query:{sort: 'ascending'}}">查看全部</router-link>
			</div>
		</tablebox>
	</div>
</template>
<script>
import tablebox from 'components/follow/box/table-box'
import saletab1 from '../saletab1/saletab1.vue'
import saletab2 from '../saletab2/saletab2.vue'
import saletab3 from '../saletab3/saletab3.vue'
import {Table, TableColumn, Tag} from 'element-ui'

let random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
	data() {
	    return {
	    	sourcekey: 'china',
		    selected: 'saletab1',
		    currentView: '',
		    tab: {
		        saletab1: 'saletab1',
		        saletab2: 'saletab2',
		        saletab3: 'saletab3'
		    },
		    tableData: [{
		        province: '山东',
		        count: (random(100, 300)),
		        rate: 5.32,
				rateTag:"第一名"
	        },
	        {
	        	province: '辽宁',
		        count: (random(100, 300)),
		        rate: 5.12,
				rateTag:"第二名"
	        },{
	        	province: '河南',
		        count: (random(100, 300)),
		        rate: 4.85,
				rateTag:"第三名"
	        },{
	        	province: '河北',
		        count: (random(100, 300)),
		        rate: 4.22,
				rateTag:"第四名"
	        },{
	        	province: '黑龙江',
		        count: (random(100, 300)),
		        rate: 3.26,
				rateTag:"第五名"
	        }],
	        tableData1: [{
		        province: '海南',
		        count: (random(100, 300)),
		        rate: -3.26,
				rateTag:"第一名"
	        },
	        {
	        	province: '新疆',
		        count: (random(100, 300)),
		        rate: -2.85,
				rateTag:"第二名"
	        },{
	        	province: '内蒙古',
		        count: (random(100, 300)),
		        rate: -1.54,
				rateTag:"第三名"
	        },{
	        	province: '深圳',
		        count: (random(100, 300)),
		        rate: -0.33,
				rateTag:"第四名"
	        },{
	        	province: '上海',
		        count: (random(100, 300)),
		        rate: 0.16,
				rateTag:"第五名"
	        }],
	        tableData2: [{
		        city: '济南',
		        count: (random(100, 300)),
		        rate: 0.34
	        },
	        {
	        	city: '沈阳',
		        count: (random(100, 300)),
		        rate: 0.15
	        },{
	        	city: '青岛',
		        count: (random(100, 300)),
		        rate: 0.36
	        },{
	        	city: '长春',
		        count: (random(100, 300)),
		        rate: 0.02
	        },{
	        	city: '南昌',
		        count: (random(100, 300)),
		        rate: 0.24
	        },{
		        city: '武汉',
		        count: (random(100, 300)),
		        rate: 0.16
	        },
	        {
	        	city: '郑州',
		        count: (random(100, 300)),
		        rate: 0.35
	        },{
	        	city: '成都',
		        count: (random(100, 300)),
		        rate: 0.21
	        },{
	        	city: '西安',
		        count: (random(100, 300)),
		        rate: 0.13
	        },{
	        	city: '厦门',
		        count: (random(100, 300)),
		        rate: 0.18
	        }],
	        tableData3: [{
		        city: '海口',
		        count: (random(100, 300)),
		        rate: 0.16
	        },
	        {
	        	city: '三亚',
		        count: (random(100, 300)),
		        rate: 0.09
	        },{
	        	city: '东莞',
		        count: (random(100, 300)),
		        rate: 0.08
	        },{
	        	city: '长平',
		        count: (random(100, 300)),
		        rate: 0.13
	        },{
	        	city: '邯郸',
		        count: (random(100, 300)),
		        rate: 0.17
	        },{
		        city: '济阳',
		        count: (random(100, 300)),
		        rate: 0.25
	        },
	        {
	        	city: '济宁',
		        count: (random(100, 300)),
		        rate: 0.22
	        },{
	        	city: '洛阳',
		        count: (random(100, 300)),
		        rate: 0.11
	        },{
	        	city: '丹东',
		        count: (random(100, 300)),
		        rate: -0.21
	        },{
	        	city: '哈尔滨',
		        count: (random(100, 300)),
		        rate: -0.22
	        }]
	    }
	},
	components: {
		tablebox,
	    saletab1,
	    saletab2,
	    saletab3,
	    "el-table":Table,
    	"el-table-column":TableColumn,
		"el-tag":Tag
	},
	methods: {
	    tabToggle: function(tabText, event) {
	      this.currentView = tabText
	      this.selected = tabText
	    }
	},
	mounted: function() {
	    this.currentView = "saletab1";
	}
}
</script>
<style lang="stylus">
@import '../../../../common/stylus/config'
.saledetail
	background-color: #f2f2f2
	padding-bottom: 40px
	.navbox
		padding-top: 60px
		margin-bottom: 10px
		background-color: #fff
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

	.footer
		text-align: center
		padding: 1.5rem
		padding-bottom: 0px
		color: import-font-color
		.more-btn
			padding: .3rem 1rem
			border: 1px solid high-color
			border-radius: .4rem
			background-color: #fff
			color: high-color
			&:active
				background-color: high-color
				color: #fff
</style>
