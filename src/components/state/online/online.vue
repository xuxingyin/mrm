<template>
	<div class='online'>
			<mt-header fixed title="平台上线情况">
				<router-link to="/state" slot="left">
				    <mt-button icon="back">返回</mt-button>
				</router-link>
			</mt-header>
			<div class='content'>
				<el-table :data="tableData" stripe style="width: 100%" :default-sort = "{prop: 'no1', order: 'descending'}">
				    <el-table-column prop="city" width="85px" sortable label="省份"></el-table-column>
				    <el-table-column prop="no1" sortable label="地市公司个数"></el-table-column>
				    <el-table-column prop="no2" sortable label="上线运行个数"></el-table-column>
				</el-table>
			</div>
	</div>
</template>

<script>
import {Table, TableColumn} from 'element-ui'
export default {
	data() {
		return{
			selected: "online-table",
			tableData: this.getTableData()
		}
	},
	methods: {
		getTableData: function(){
			var arr = [{'city':'北京','no1':1,'no2':1},
	        {'city':'天津','no1':1,'no2':1},
	        {'city':'河北','no1':11,'no2':11},
	        {'city':'陕西','no1':11,'no2':1},
	        {'city':'内蒙古','no1':14,'no2':1},
	        {'city':'辽宁','no1':13,'no2':1},
	        {'city':'大连','no1':1,'no2':1},
	        {'city':'吉林','no1':9,'no2':1},
	        {'city':'黑龙江','no1':21,'no2':21},
	        {'city':'江苏','no1':14,'no2':1},
	        {'city':'浙江','no1':11,'no2':0},
	        {'city':'安徽','no1':16,'no2':1},
	        {'city':'福建','no1':9,'no2':2},
	        {'city':'江西','no1':1,'no2':1},
	        {'city':'山东','no1':1,'no2':1},
	        {'city':'河南','no1':1,'no2':1},
	        {'city':'湖北','no1':1,'no2':1},
	        {'city':'湖南','no1':1,'no2':1}];
		    var toDecimal = function(x) {
		        var f = parseFloat(x);
		        if (isNaN(f)) {
		            return;
		        }
		        f = Math.round(x*10)/10;
		        return f;
		    }
		    for(var i=0; i<arr.length; i++){
		        var percent = toDecimal(arr[i].no2*100/arr[i].no1);
		        arr[i].percent = percent;
		    }
		    return arr
		}
	},
	components: {
		'el-table': Table,
		'el-table-column': TableColumn
	}
}
</script>

<style lang='stylus'>
.online{
	padding-top: 40px;
}		
.online > .content > .mint-tab-container{
	margin-top: 3px;
}
.divider{
    width: 100%;
    height: 1px;
    background-color: #e9e9e9;
}
.table_header{
    width: 100%;
    height: 28px;
    margin-top: 20px;
    text-align: center;
    line-height: 28px;
    color: #999999;
	font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
}
.table_header div{
    float: left;
}
.cell1{
    width: 30%;
    height: 100%;
    border-right: 1px solid #e9e9e9;
}
.cell2{
    width: 39%;
    height: 100%;
    border-right: 1px solid #e9e9e9;
}
.cell3{
    width: 29%;
    height: 100%;
}
.table_row{
    width: 100%;
    height: 46px;
    font-size: 14px;
    color: #333;
    line-height: 46px;
    font-weight: 600;
}
.table_row div{
    float: left;
}
.table_row span{
    display: block;
    width: auto;
    height: 100%;
}

.cell1 span{
    margin-left: 14px;
}
.cell2 span{
    text-align: right;
    margin-right: 14px;
}
.cell3 span{
    text-align: right;
    margin-right: 14px;
}
.odd_row{
    background-color: #fafafa;
}
.shape_item .bar_left{
    float:left;
    margin-left: 3%;;
    width: 40%;
    height: 36px;
    font-size: 1.2rem;
    text-align: left;
    line-height: 36px;
    color: #333333;
}
.shape_item .bar_right{
    float:right;
    margin-right: 3%;;
    width: 40%;
    height: 36px;
    font-size: 1.2rem;
    text-align: right;
    line-height: 36px;
    color: #999999;
}
.shape_item .bar{
    float:left;
    width: 94%;
    margin-left: 3%;
    height: 16px;
    position: relative;
}
.shape_item .progress{
    position: absolute;
    top: 0px;
    width: 10%;
    height: 3px;
    background-color: #14b9ef;
    border: 1px solid #14b9ef;
}
.shape_item .progress_bg{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 3px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
}
.shape_item{
    width: 100%;
    height: 62px;
    position: relative;
    margin-top: 10px;
}
</style>