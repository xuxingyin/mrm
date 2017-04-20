<template>
	<div class="sgpone">
		<mt-header fixed title="北京">
			<router-link to="/follow" slot="left">
			    <mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="subhead">
				{{shop.name}}销量前十客户
		</div>
		<div class="sale-content">
    		<div class="sale-item" v-for="item in tableData">
    			<a v-on:click='goOrderMonth'>
					<div class="sale-item-row1">
						<div>{{item.name}}</div>
						<span class='state'>
							<el-tag v-if="item.rate>=60" type="danger">偏高</el-tag>
							<el-tag v-else type="gray">正常</el-tag>
						</span>
						<img src="static/analysis/img/right_arrow.png"/>
					</div>
				</a>
				<div class="sale-item-row2">
					<div>{{item.count}}</div>
					<div class="vertical-divider"></div>
					<div>{{item.one}}</div>
					<div class="vertical-divider"></div>
					<div>{{item.rate}}</div>
				</div>
				<div class="sale-item-row3">
					<div>总订购量<br>（箱）</div>
					<div class="vertical-divider"></div>
					<div>{{shop.name}}<br>（箱）</div>
					<div class="vertical-divider"></div>
					<div>订购比<br>（%）</div>
				</div>
			</div>
    	</div>
	</div>
</template>
<script>
import {Table, TableColumn,Tag} from 'element-ui'
import tableBox from 'components/follow/box/table-box'

let random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export default{
	data() {
		return {
			tableData: [{
		        name: '市中区经十路店',
		        count: random(300, 500),
		        one: random(100, 300),
		        rate: 0
	        },
	        {
	        	name: '迎泽大街32号好再来3号店',
		        count: random(300, 500),
		        one: random(100, 300),
		        rate: 0
	        },{
	        	name: '浪潮路1036号5号楼店',
		        count: random(300, 500),
		        one: random(100, 300),
		        rate: 0
	        },{
	        	name: '银丰唐郡荷花园老李店',
		        count: random(300, 500),
		        one: random(100, 300),
		        rate: 0
	        },{
	        	name: '高新区银座超市店',
		        count: random(300, 500),
		        one: random(100, 300),
		        rate: 0
	        },{
		        name: '高新区万达店',
		        count: random(300, 500),
		        one: random(100, 300),
		        rate: 0
	        },{
	        	name: '科苑路43号店',
		        count: random(300, 500),
		        one: random(100, 300),
		        rate: 0
	        },{
	        	name: '山西科技大学32号店',
		        count: random(300, 500),
		        one: random(100, 300),
		        rate: 0
	        },{
	        	name: '会展东路53号店',
		        count: random(300, 500),
		        one: random(100, 300),
		        rate: 0
	        },{
		        name: '龙凤山路23号王家老店',
		        count: random(300, 500),
		        one: random(100, 300),
		        rate: 0
	        }],
	        shop: {}
		}
	},
	components: {
		'el-table': Table,
		'el-table-column': TableColumn,
		'el-tag':Tag,
		tableBox
	},
	methods: {
		goOrderMonth() {
			this.$router.push({path:'/follow/order/month',query:{'from':'sgpone'}});
		}
	},
	created() {
		this.shop.id = this.$route.query.id
		this.shop.name = this.$route.query.name	
		this.tableData.sort(function(a,b){
            return parseInt(b.one)-parseInt(a.one)
		})
		this.tableData.forEach(function(t, index){
			t.rate = (t.one / t.count *100).toFixed(2)
		})
	}
}
</script>
<style lang="stylus" scoped>
.sgpone{
	padding-top: 40px;
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
	height: 145px;
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
.sale-item-row1 .state {
	display: inline-block;
	height: 50px;
	line-height: 50px;
	color: #999999;
	position: absolute;
	right: 35px;
	top: 0px;
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
	height: 50px;
	line-height: 22px;
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
	height: 15px;
	margin-top: 15px;
}
.sale-item-row3 .vertical-divider{
	height: 35px;
}
</style>
