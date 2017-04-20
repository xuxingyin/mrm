<template>
	<div class="order-container" style="background-color: #f1f1f1;">
		<mt-header fixed title="订单明细">
      		<router-link to="/follow/order/month" slot="left">
        		<mt-button icon="back">返回</mt-button>
      		</router-link>
    	</mt-header>
    	<table-box :title="custName+orderDate+'订单'" unit="单位：条" style="margin-top: 40px;">
		    <el-table :data="tableData" stripe style="width: 100%">
		      	<el-table-column prop="brand" align="center" label="规格"></el-table-column>
		      	<el-table-column prop="data1" align="right" sortable label="需求数"></el-table-column>
		      	<el-table-column prop="data2" align="right" sortable label="订单数"></el-table-column>
		    </el-table>
		</table-box>
   	</div>
</template>
<script>
import tableBox from 'components/follow/box/table-box'
import {Table, TableColumn} from 'element-ui'
var random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
export default{
	data(){
		return {
			custName:"深圳市罗湖区赛和信商行",
			orderDate:"20170301",
			tableData: [{
				brand:"双喜",
				data1:random(400, 800),
				data2:random(10, 400),
			},
			{
				brand:"红塔山",
				data1:random(400, 800),
				data2:random(10, 400),
			},
			{
				brand:"中华",
				data1:random(400, 800),
				data2:random(10, 400),
			},
			{
				brand:"熊猫",
				data1:random(400, 800),
				data2:random(10, 400),
			},
			{
				brand:"钻石",
				data1:random(400, 800),
				data2:random(10, 400),
			},
			{
				brand:"利群",
				data1:random(400, 800),
				data2:random(10, 400),
			},
			{
				brand:"玉溪",
				data1:random(400, 800),
				data2:random(10, 400),
			}]
		}
	},
	components:{
		'table-box':tableBox,
    	"el-table":Table,
    	"el-table-column":TableColumn
	}
}
</script>