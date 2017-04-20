<template>
	<div class="saleprovinces">
		<mt-header fixed title="全国">
			<router-link to="/follow/sale/saledetail" slot="left">
			    <mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<tablebox :title=text unit="单位：万箱">
			<el-table :data="tableData" stripe style="width: 100%" :default-sort = "{prop: 'rate', order: sort}">
			    <el-table-column prop="province" sortable label="省份"></el-table-column>
			    <el-table-column prop="count" sortable label="销售数量"></el-table-column>
			    <el-table-column prop="rate" sortable label="同比增幅"></el-table-column>
			</el-table>
		</tablebox>
	</div>
</template>
<script>
import tablebox from 'components/follow/box/table-box'
import {Table, TableColumn} from 'element-ui'

export default{
	data() {
		return {
			tableData: [{
		        province: '山东',
		        count: this.random(80, 210),
		        rate: this.random(1,9,2)+'%'
	        },
	        {
	        	province: '辽宁',
		        count: this.random(80, 210),
		        rate: this.random(1,9,2)+'%'
	        },{
	        	province: '河南',
		        count: this.random(80, 210),
		        rate: this.random(1,9,2)+'%'
	        },{
	        	province: '河北',
		        count: this.random(80, 210),
		        rate: this.random(1,9,2)+'%'
	        },{
	        	province: '黑龙江',
		        count: this.random(80, 210),
		        rate: this.random(1,9,2)+'%'
	        },{
		        province: '海南',
		        count: this.random(80, 210),
		        rate: this.random(1,9,2)+'%'
	        },
	        {
	        	province: '新疆',
		        count: this.random(80, 210),
		        rate: this.random(1,9,2)+'%'
	        },{
	        	province: '内蒙古',
		        count: this.random(80, 210),
		        rate: this.random(1,9,2)+'%'
	        },{
	        	province: '深圳',
		        count: this.random(80, 210),
		        rate: this.random(1,9,2)+'%'
	        },{
	        	province: '上海',
		        count: this.random(80, 210),
		        rate: this.random(1,9,2)+'%'
	        }]
		}
	},
	computed: {
    sort() {
      return this.$route.query.sort
    },
		text() {
			if(this.sort == "ascending"){
				return "各城市销量增幅情况(增幅从小到大)"
			}else{
				return "各城市销量增幅情况(增幅从大到小)"
			}
		}
  },
	components: {
		'el-table': Table,
		'el-table-column': TableColumn,
		tablebox
	}
}
</script>
<style lang="stylus">
.saleprovinces
	padding-top: 40px
</style>
