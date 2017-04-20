<template>
	<div class="container">
		<mt-header fixed title="北京">
      		<router-link to="/follow" slot="left">
        		<mt-button icon="back">返回</mt-button>
      		</router-link>
    	</mt-header>
    	<div class="subhead">
				销量前十名大户
		</div>
    	<div class="sale-content">
    		<div class="sale-item" v-for="item in saleList">
    			<a href="#/follow/order/month">
				<div class="sale-item-row1">
					<div>{{item.name}}</div>
					<div>{{item.type}}</div>
					<img src="static/analysis/img/right_arrow.png"/>
				</div>
				</a>
				<div class="sale-item-row2">
					<div>{{item.data1}}</div>
					<div class="vertical-divider"></div>
					<div>{{item.data2}}</div>
					<div class="vertical-divider"></div>
					<div>{{item.data3}}</div>
				</div>
				<div class="sale-item-row3">
					<div>订购量（条）</div>
					<div class="vertical-divider"></div>
					<div>单条值（元）</div>
					<div class="vertical-divider"></div>
					<div>订购规格数（个）</div>
				</div>
			</div>
    	</div>
	</div>
</template>
<script>
	export default {
		data() {
			let vm = this;
			return {
				saleList:[
					{
			    		name:"北京市海淀区赛和信商行",
			    		type:"三十档",
			    		data1:vm.random(50,1000),
			    		data2:vm.random(80,500,2),
			    		data3:vm.random(1,100)
			   		},
			   		{
			    		name:"北京市海淀区红星商店",
			    		type:"三十档",
			    		data1:vm.random(50,1000),
			    		data2:vm.random(80,500,2),
			    		data3:vm.random(1,100)
			   		},
			   		{
			    		name:"北京市海淀区永盛商行",
			    		type:"三十档",
			    		data1:vm.random(50,1000),
			    		data2:vm.random(80,500,2),
			    		data3:vm.random(1,100)
			   		},
			   		{
			    		name:"北京市海淀区赛和信商行",
			    		type:"三十档",
			    		data1:vm.random(50,1000),
			    		data2:vm.random(80,500,2),
			    		data3:vm.random(1,100)
			   		},
			   		{
			    		name:"北京市海淀区赛和信商行",
			    		type:"三十档",
			    		data1:vm.random(50,1000),
			    		data2:vm.random(80,500,2),
			    		data3:vm.random(1,100)
			   		},
			   		{
			    		name:"北京市海淀区赛和信商行",
			    		type:"三十档",
			    		data1:vm.random(50,1000),
			    		data2:vm.random(80,500,2),
			    		data3:vm.random(1,100)
			   		}
				]
			}
		},
		components: {
		}
	}
</script>
<style lang="stylus" scoped>
.container{
	padding-top: 40px;
	padding-bottom: 40px;
	background: #eee;
}
.subhead{
	height 40px
	line-height 40px
	background #fff
	padding-left 10px
}
.sale-item{
	width: 100%;
	height: 125px;
	margin-top: 12px;
	background-color: #FFFFFF;
	border-radius: 5px;
}
.sale-item-row1{
	width: 100%;
	height: 50px;
	position: relative;
	font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
}
.sale-item-row1 div:nth-child(1){
	height: 50px;
	line-height: 50px;
	color: #333333;
	position: absolute;
	left: 10px;
}
.sale-item-row1 div:nth-child(2){
	height: 50px;
	line-height: 50px;
	color: #999999;
	position: absolute;
	right: 40px;
}
.sale-item-row1 img{
	width: 16px;
	height: 16px;
	position: absolute;
	top: 17px;
	right: 10px;
}

.sale-item-row2{
	width: 100%;
	height: 30px;
	line-height: 30px;
	margin-top: 0px;
	text-align: center;
	font-family: '微软雅黑';
    font-weight: 550;
    font-style: normal;
    font-size: 16px;
}
.sale-item-row2 div:nth-child(1){
	width: 30%;
	height: 100%;
	float: left;
}
.sale-item-row2 div:nth-child(3){
	width: 38%;
	height: 100%;
	float: left;
}
.sale-item-row3{
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
.sale-item-row3 div:nth-child(1){
	width: 30%;
	height: 100%;
	float: left;
}
.sale-item-row3 div:nth-child(3){
	width: 38%;
	height: 100%;
	float: left;
}
.vertical-divider{
	width: 1px;
	height: 100%;
	float: left;
	background-color: #e9e9e9;
}
.sale-item-row2 .vertical-divider{
	height: 20px;
	margin-top: 10px;
}
.sale-item-row3 .vertical-divider{
	height: 20px;
}
</style>