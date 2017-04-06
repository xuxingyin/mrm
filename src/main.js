// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'

import follow from 'components/follow/follow'
import state from 'components/state/state'
import analysis from 'components/analysis/analysis'
import followCity from 'components/follow/followCity/followCity'
import online from 'components/state/online/online'
import keycity from 'components/state/keycity/keyCity'

import  todayrealChina from 'components/follow/todayreal/china/todayreal-china'

Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(Vuex);
Vue.use(Router)

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
    scrollPosition: 0,
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
  // mode: 'history',  history模式
  routes
});

/**
 *  全局过滤器,将数值类型字符串转换为逗号分隔
 */
Vue.filter('commaSepNumber', function(val) {
  return /^-?\d+$/.test(val) ? parseFloat(val).toLocaleString() : val
})

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
