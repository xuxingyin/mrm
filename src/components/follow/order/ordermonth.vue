<template>
	<div class="order-container" style="background-color: #f1f1f1;">
		<mt-header fixed title="客户月度订单">
      		<router-link :to="this.back" slot="left">
        		<mt-button icon="back">返回</mt-button>
      		</router-link>
    	</mt-header>
    	<div class="order-title">
    		<div>深圳市罗湖区赛和信商行</div>
    		<div>三十挡</div>
    	</div>
    	<div class="news_tabs">
		    <div class="tabs_name">
		        <div id="order_name1" class="tab_name" style="color: #14b9ef;" @click="toTab1()">订单汇总</div>
		        <div id="order_name2" class="tab_name" @click="toTab2()">订单列表</div>
		    </div>
		    <div class="order-divider"></div>
		    <div class="tab_bottom">
		        <div id="order_tab_bottom1" style="visibility: visible;"></div>
		        <div id="order_tab_bottom2" style="visibility: hidden;"></div>
		    </div>
		</div>
		<div id="order_tab1" style="background-color: #FFFFFF;">
			<table-box title="订单汇总" unit="单位：元/条,条" style="margin-top: 10px;">
			    <el-table :data="tableData" stripe style="width: 100%">
			      	<el-table-column prop="brand" align="center" label="规格"></el-table-column>
			      	<el-table-column prop="price" align="right" sortable label="批发价"></el-table-column>
			      	<el-table-column prop="count" align="right" sortable label="订单数"></el-table-column>
			    </el-table>
			</table-box>
		</div>
		<div id="order_tab2" class="main" style="display: none;">
			<div class="order-item" v-for="item in orderList">
				<div class="order-item-row1" @click="toDetail()">
					<div>订单日期:{{item.order_date}}</div>
					<div>{{item.order_type}}</div>
					<img src="static/analysis/img/right_arrow.png"/>
				</div>
				<div class="order-item-row2">
					<div>{{item.order_data1}}</div>
					<div class="order-vertical-divider"></div>
					<div>{{item.order_data2}}</div>
					<div class="order-vertical-divider"></div>
					<div>{{item.order_data3}}</div>
				</div>
				<div class="order-item-row3">
					<div>订购量（条）</div>
					<div class="order-vertical-divider"></div>
					<div>单条值（元）</div>
					<div class="order-vertical-divider"></div>
					<div>订购规格数（个）</div>
				</div>
			</div>
			<div style="width: 100%;height: 10px;"></div>
		</div>
	</div>
</template>
<script>
	import tableBox from 'components/follow/box/table-box'
	import {Table, TableColumn} from 'element-ui'
	export default {
		data() {
			let vm = this;
			return {
				tableData:[
			    	{
			    		brand:"双喜",
			    		price:vm.random(80,500,2),
			    		count:vm.random(50,1000)
			    	},
			    	{
			    		brand:"红塔山",
			    		price:vm.random(80,500,2),
			    		count:vm.random(50,1000)
			    	},
			    	{
			    		brand:"中华",
			    		price:vm.random(80,500,2),
			    		count:vm.random(50,1000)
			    	},
			    	{
			    		brand:"熊猫",
			    		price:vm.random(80,500,2),
			    		count:vm.random(50,1000)
			    	},
			    	{
			    		brand:"钻石",
			    		price:vm.random(80,500,2),
			    		count:vm.random(50,1000)
			    	},
			    	{
			    		brand:"利群",
			    		price:vm.random(80,500,2),
			    		count:vm.random(50,1000)
			    	},
			    	{
			    		brand:"玉溪",
			    		price:vm.random(80,500,2),
			    		count:vm.random(50,1000)
			    	},
			    	{
			    		brand:"芙蓉王",
			    		price:vm.random(80,500,2),
			    		count:vm.random(50,1000)
			    	}
			    ],
			    orderList: [
			    	{
			    		order_id:"LH0000077232",
			    		order_type:"网上订单",
			    		order_date:"20170101",
			    		order_data1:vm.random(10,500),
			    		order_data2:vm.random(80,500,2),
			    		order_data3:vm.random(5,200)
			    	},
			    	{
			    		order_id:"LH0000077232",
			    		order_type:"网上订单",
			    		order_date:"20170101",
			    		order_data1:vm.random(10,500),
			    		order_data2:vm.random(80,500,2),
			    		order_data3:vm.random(5,200)
			    	},
			    	{
			    		order_id:"LH0000077232",
			    		order_type:"网上订单",
			    		order_date:"20170101",
			    		order_data1:vm.random(10,500),
			    		order_data2:vm.random(80,500,2),
			    		order_data3:vm.random(5,200)
			    	},
			    	{
			    		order_id:"LH0000077232",
			    		order_type:"网上订单",
			    		order_date:"20170101",
			    		order_data1:vm.random(10,500),
			    		order_data2:vm.random(80,500,2),
			    		order_data3:vm.random(5,200)
			    	},
			    	{
			    		order_id:"LH0000077232",
			    		order_type:"网上订单",
			    		order_date:"20170101",
			    		order_data1:vm.random(10,500),
			    		order_data2:vm.random(80,500,2),
			    		order_data3:vm.random(5,200)
			    	}
			    ],
			    back:'/follow/customers/custdetail'
			}
		},
		mounted() {
			if( this.$route.query.from !== undefined && this.$route.query.from === 'sgpone'){
				this.back = '/follow/sgp/sgpone'
			}
		},
		methods:{
		  	toTab1(){
		        document.getElementById("order_tab_bottom1").style.visibility = "visible";
		        document.getElementById("order_tab_bottom2").style.visibility = "hidden";
		        document.getElementById("order_name1").style.color = "#14b9ef";
		        document.getElementById("order_name2").style.color = "#999999";
		
		        document.getElementById("order_tab1").style.display = "block";
		        document.getElementById("order_tab2").style.display = "none";
		   	},
		   	toTab2(){
		        document.getElementById("order_tab_bottom1").style.visibility = "hidden";
		        document.getElementById("order_tab_bottom2").style.visibility = "visible";
		        document.getElementById("order_name1").style.color = "#999999";
		        document.getElementById("order_name2").style.color = "#14b9ef";
		
		        document.getElementById("order_tab1").style.display = "none";
		        document.getElementById("order_tab2").style.display = "block";
		    },
		   	toDetail(){
		   		window.location.href = "#/follow/order/detail";
		   	}
		},
		components:{
			'table-box':tableBox,
	    	"el-table":Table,
	    	"el-table-column":TableColumn
		}
	}
</script>
<style scoped>
.news_tabs{
    width:100%;
    height: 48px;
    position: relative;
    background-color: #FFFFFF;
}
.tabs_name{
    display: -webkit-box;
    width: 100%;
    height: 100%;
}
.tab_name{
    -webkit-box-flex: 1;
    text-align: center;
    line-height: 48px;
    color: #999999;
	font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
}
.tab_bottom{
    display: -webkit-box;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 2px;
}
.tab_bottom div{
    -webkit-box-flex: 1;
    height: 100%;
    background-color: #14b9ef;
}
.news_tabs .divider{
    position: absolute;
    bottom: 0;
}
.main{
    width: 100%;
    height: auto;
}
.order-divider{
    width: 100%;
    height: 1px;
    background-color: #e9e9e9;
}
.order-title{
	width: 100%;
	margin-top: 40px;
	height: 50px;
	position: relative;
	background-color: #FFFFFF;
}
.order-title div:nth-child(1){
	position: absolute;
	height: 100%;
	line-height: 50px;
	left: 10px;
	font-family: '微软雅黑';
    font-weight: 550;
    font-style: normal;
    font-size: 14px;
    color: #333333;
}
.order-title div:nth-child(2){
	position: absolute;
	height: 100%;
	line-height: 50px;
	right: 10px;
	color: #999999;
	font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
}
.order-block1{
	width: 100%;
	height: 15px;
	background-color: #FFFFFF;
	margin-top: 10px;
}
.order-table-header{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 20px;
    color: #999999;
	font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
}
.order-table-header div{
    float: left;
}
.order-cell1{
    width: 40%;
    height: 100%;
    border-right: 1px solid #e9e9e9;
}
.order-cell2{
    width: 29%;
    height: 100%;
    border-right: 1px solid #e9e9e9;
}
.order-cell3{
    width: 29%;
    height: 100%;
}
.order-table-row{
    width: 100%;
    height: 60px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
}
.order-table-row div{
    float: left;
}
.order-table-row span{
    display: block;
    width: auto;
    height: 100%;
}

.order-cell1 span{
	height: 48px;
	margin-top: 8px;
    text-align: center;
    line-height: 20px;
}
.order-cell2 span{
    text-align: right;
    margin-right: 14px;
    line-height: 60px;
}
.order-cell3 span{
    text-align: right;
    margin-right: 14px;
    line-height: 60px;
}
.odd_row{
    background-color: #fafafa;
}
.order-item{
	width: 100%;
	height: 125px;
	margin-top: 10px;
	margin-right: 10px;
	background-color: #FFFFFF;
	border-radius: 5px;
}
.order-item-row1{
	width: 100%;
	height: 50px;
	position: relative;
	font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
}
.order-item-row1 div:nth-child(1){
	height: 50px;
	line-height: 50px;
	color: #333333;
	position: absolute;
	left: 10px;
}
.order-item-row1 div:nth-child(2){
	height: 50px;
	line-height: 50px;
	color: #999999;
	position: absolute;
	right: 40px;
}
.order-item-row1 img{
	width: 16px;
	height: 16px;
	position: absolute;
	top: 17px;
	right: 10px;
}
.order-item-date{
	width: 50%;
	height: 12px;
	line-height: 0px;
	margin-left: 10px;
	font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
	color: #999999;
}
.order-item-row2{
	width: 100%;
	height: 30px;
	line-height: 30px;
	margin-top: 5px;
    text-align: center;
	font-family: '微软雅黑';
    font-weight: 550;
    font-style: normal;
    font-size: 16px;
}
.order-item-row2 div:nth-child(1){
	width: 30%;
	height: 100%;
	float: left;
}
.order-item-row2 div:nth-child(3){
	width: 35%;
	height: 100%;
	float: left;
}
.order-item-row3{
	width: 100%;
	height: 30px;
	line-height: 30px;
    text-align: center;
	font-family: '微软雅黑';
    font-weight: 400;
    color: #999999;
    font-style: normal;
    font-size: 12px;
}
.order-item-row3 div:nth-child(1){
	width: 30%;
	height: 100%;
	float: left;
}
.order-item-row3 div:nth-child(3){
	width: 35%;
	height: 100%;
	float: left;
}
.order-vertical-divider{
	width: 1px;
	height: 100%;
	float: left;
	background-color: #e9e9e9;
}
.order-item-row2 .order-vertical-divider{
	height: 20px;
	margin-top: 10px;
}
.order-item-row3 .order-vertical-divider{
	height: 20px;
}
</style>