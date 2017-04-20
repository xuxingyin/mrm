<template>
	<div class='keycity'>
		<mt-header fixed title="重点城市">
			<router-link to="/state" slot="left">
			    <mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class='content'>
			<tablebox title="年度销售情况" unit="单位：万箱">
				<el-table :data="tableData" stripe style="width: 100%" :default-sort = "{prop: 'no2', order: 'descending'}">
				    <el-table-column prop="city" width="100px" sortable label="城市"></el-table-column>
				    <el-table-column prop="no1" sortable label="1-10月销量"></el-table-column>
				    <el-table-column prop="no2" sortable label="增幅"></el-table-column>
				</el-table>
			</tablebox>
		</div>
	</div>
</template>

<script>
import tablebox from 'components/follow/box/table-box'
import {Table, TableColumn} from 'element-ui'
import axios from 'axios'
export default {
	data() {
		return {
			selected: 'year-count',
			tableData: []
		}
	},
	methods: {
		testLay: function(){
			console.log(12121212);
		}
	},
	created() {
		axios.get('static/keycity.json').then((res) => {
			console.log(res)
			this.tableData = res.data
		})
	},
	components: {
		'el-table': Table,
		'el-table-column': TableColumn,
		tablebox
	}
}
</script>

<style lang='stylus'>
	.keycity
		padding-top: 40px
		>.content 
			>.mint-tab-container
				margin-top: 3px
			
</style>