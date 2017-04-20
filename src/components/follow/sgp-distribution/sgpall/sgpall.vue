<template>
	<div class="sgpall">
		<mt-header fixed title="货源投放">
			<router-link to="/follow" slot="left">
			    <mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<tableBox unit="单位：箱" title="各规格订货集中度">
			<el-table :data="tableData" stripe style="width: 100%" :default-sort = "{prop: 'rate', order: 'descending'}">
			    <el-table-column prop="name" sortable label="规格"></el-table-column>
			    <el-table-column prop="count" sortable label="订购量"></el-table-column>
			    <el-table-column prop="rate" sortable label="集中度">
			    	<template scope="scope" >
				        <span>{{ scope.row.rate }}%</span>
						<el-tag v-if="scope.row.rate>=60" type="danger">偏高</el-tag>
						<el-tag v-else type="gray">正常</el-tag>
					</template>
			    </el-table-column>
			</el-table>
		</tableBox>
	</div>
</template>
<script>
import {Table, TableColumn, Tag} from 'element-ui'
import tableBox from 'components/follow/box/table-box'
let random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export default{
	data() {
		return {
			tableData: [{
		        name: '中南海',
		        count: random(100, 500),
		        rate: this.random(10,90)
	        },
	        {
	        	name: '好猫',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        },{
	        	name: '中华（硬）',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        },{
	        	name: '人民大会堂',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        },{
	        	name: '中南海（硬）',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        },{
		        name: '苏烟（软）',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        },{
		        name: '苏烟（软）',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        },{
		        name: '苏烟（软）',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        },{
		        name: '苏烟（软）',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        },{
		        name: '苏烟（软）',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        },{
		        name: '苏烟（软）',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        },{
		        name: '苏烟（软）',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        },{
		        name: '苏烟（软）',
		        count: random(1000, 5000),
		        rate: this.random(10,90)
	        }]
		}
	},
	components: {
		'el-table': Table,
		'el-table-column': TableColumn,
		"el-tag":Tag,
		tableBox
	}
}
</script>
<style lang="stylus">
.sgpall
	padding-top: 40px

</style>
