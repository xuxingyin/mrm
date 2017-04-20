<template>
	<div class="container">
		<mt-header fixed title="全国">
      		<router-link to="/follow" slot="left">
        		<mt-button icon="back">返回</mt-button>
      		</router-link>
    	</mt-header>
      	<table-box title="全国客户构成情况" unit="单位：%">
		    <el-table :data="tableData" stripe style="width: 100%" :default-sort = "{prop: 'percent', order: 'descending'}">
		    	<el-table-column prop="city" width="80px" align="center" label="城市"></el-table-column>
		      	<el-table-column prop="percent"  align="right" sortable label="大户销量">
		      		<template scope="scope" >
				        <span>{{ scope.row.percent }}%</span>
						<el-tag v-if="scope.row.percent>=60" type="danger">偏高</el-tag>
						<el-tag v-else type="gray">正常</el-tag>
					</template>
		      	</el-table-column>
		      	<el-table-column prop="prepercent" width="150px" align="right" sortable label="前1%客户销量">
		      		<template scope="scope" >
				        <span>{{ scope.row.prepercent }}%</span>
					</template>
		      	</el-table-column>
		    </el-table>
		</table-box>
	</div>
</template>
<script>
	import tableBox from 'components/follow/box/table-box'
	import {Table, TableColumn, Tag} from 'element-ui'
	export default {
		data() {
			let vm = this
			return {
          		tableData:[
          			{ city: '苏州', percent: vm.random(30,80,2), prepercent: vm.random(30,80,2)},
          			{ city: '武汉', percent: vm.random(30,80,2), prepercent: vm.random(30,80,2)},
          			{ city: '郑州', percent: vm.random(30,80,2), prepercent: vm.random(30,80,2)},
          			{ city: '成都', percent: vm.random(30,80,2), prepercent: vm.random(30,80,2)},
          			{ city: '西安', percent: vm.random(30,80,2), prepercent: vm.random(30,80,2)},
          			{ city: '厦门', percent: vm.random(30,80,2), prepercent: vm.random(30,80,2)},
          			{ city: '沈阳', percent: vm.random(30,80,2), prepercent: vm.random(30,80,2)},
          			{ city: '青岛', percent: vm.random(30,80,2), prepercent: vm.random(30,80,2)},
          			{ city: '长春', percent: vm.random(30,80,2), prepercent: vm.random(30,80,2)},
          			{ city: '南昌', percent: vm.random(30,80,2), prepercent: vm.random(30,80,2)}
        		]
			}
		},
		components: {
        	'table-box':tableBox,
        	"el-table":Table,
    		"el-table-column":TableColumn,
    		"el-tag":Tag
		}
	}
</script>
<style lang="stylus" scoped>
.container
  	padding-top 40px
  	background #eee
  	
</style>