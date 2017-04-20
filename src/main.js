// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import fastclick from 'fastclick'
import 'mint-ui/lib/style.css'
import 'font-awesome-webpack'
import 'animate.css/animate.min.css'
import {
  Indicator
} from 'mint-ui';
import follow from 'components/follow/follow'

/**
 * 需要异步加载的模块
 */
const state = resolve => require(['components/state/state'], resolve)
const analysis = resolve => require(['components/analysis/analysis'], resolve)
const followCity = resolve => require(['components/follow/followCity/followCity'], resolve)
const online = resolve => require(['components/state/online/online'], resolve)
const keycity = resolve => require(['components/state/keycity/keyCity'], resolve)
const custdetail = resolve => require(['components/follow/customers/custdetail/custdetail'], resolve)
const custcountry = resolve => require(['components/follow/customers/custcountry/custcountry'], resolve)
const ordermonth = resolve => require(['components/follow/order/ordermonth'], resolve)
const orderdetail = resolve => require(['components/follow/order/orderdetail'], resolve)
const saledetail = resolve => require(['components/follow/salesurvey/saledetail/saledetail'], resolve)
const todayrealChina = resolve => require(['components/follow/todayreal/china/todayreal-china.vue'], resolve)
const saleprovinces = resolve => require(['components/follow/salesurvey/saledetail/saleprovinces/saleprovinces'], resolve)
const salecitys = resolve => require(['components/follow/salesurvey/saledetail/salecitys/salecitys'], resolve)
const sgpall = resolve => require(['components/follow/sgp-distribution/sgpall/sgpall'], resolve)
const sgpone = resolve => require(['components/follow/sgp-distribution/sgpone/sgpone'], resolve)


Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(Vuex);
Vue.use(Router)

const appModule = {
  state: {
    //记录每个页面用户操作后的滚动条位置
    pageScrollPosition: {}
  },
  mutations: {
    setPageScrollPosition(state, data) {
      state.pageScrollPosition[data.page] = data.scrollTop
    }
  }
}

const followModule = {
  state: {
    followCitys: [{
      name: '北京'
    }, {
      name: '上海'
    }, {
      name: '广州'
    }, {
      name: '深圳'
    }],
    activeSwiperIndex: 0
  },
  mutations: {
    addNewCity(state, newCity) {
      state.followCitys.push(newCity);
    },
    setActiveSwiperIndex(state, data) {
      state.activeSwiperIndex = data.index;
    }
  }
}

const store = new Vuex.Store({
  modules: {
    app: appModule,
    follow: followModule
  }
})

const routes = [{
    path: '/follow',
    name: 'follow',
    component: follow,
  },
  {
    path: '/follow/followCity',
    name: 'followCity',
    component: followCity
  },
  {
    path: '/follow/todayreal/todayreal-china',
    name: 'todayrealChina',
    component: todayrealChina
  },
  {
    path: '/follow/customers/custcountry',
    name: 'custcountry',
    component: custcountry
  },
  {
    path: '/follow/customers/custdetail',
    name: 'custdetail',
    component: custdetail
  },
  {
    path: '/follow/order/month',
    name: 'ordermonth',
    component: ordermonth
  },
  {
    path: '/follow/order/detail',
    name: 'orderdetail',
    component: orderdetail
  },
  {
    path: '/follow/sale/saledetail',
    name: 'saledetail',
    component: saledetail
  },
  {
    path: '/follow/sale/saledetail/allprovince',
    name: 'saleprovinces',
    component: saleprovinces
  },
  {
    path: '/follow/sale/saledetail/allcity',
    name: 'salecitys',
    component: salecitys
  },
  {
    path: '/follow/sgp/sgpall',
    name: 'sgpall',
    component: sgpall
  },
  {
    path: '/follow/sgp/sgpone',
    name: 'sgpone',
    component: sgpone
  },
  {
    path: '/state',
    name: 'state',
    component: state
  },
  {
    path: '/state/online',
    name: 'online',
    component: online
  }, {
    path: '/state/keyCity',
    name: 'keyCity',
    component: keycity
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: analysis
  }
]

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'double-bounce'
  });
  setTimeout(function() {
    Indicator.close();
    next();
  }, 500)

})

/**
 *  全局过滤器,将数值类型字符串转换为逗号分隔
 */
Vue.filter('commaSepNumber', function(val) {
  return /^-?\d+$/.test(val) ? parseFloat(val).toLocaleString() : val
})


/**
 *    全局获取随机数方法
 */
Vue.prototype.random = function(min, max, scale) {
  scale = scale == undefined ? 0 : scale;
  var ret = (Math.random() * (max - min) + min).toFixed(scale)
  return ret;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})


router.push('/follow');
