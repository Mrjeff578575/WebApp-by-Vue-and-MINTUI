import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import login from './components/login.vue'
import index from './components/index.vue'
import order from './components/order.vue'
import goods from './components/goods.vue'
import personinfo from './components/personinfo.vue'
import test from './components/test.vue'
import push from './components/push.vue'
''

//注册VueRouter这个插件
Vue.use(VueRouter)
//注册MintUi
Vue.use(MintUI)
//注册Vue-resource
Vue.use(VueResource)

const router = new VueRouter()

//路由map
router.map({
    '/login': {
        component: login
    },
    '/index': {
        component: index
    },
    '/order': {
        component: order
    },
    '/goods': {
        component: goods
    },
    '/personinfo': {
        component: personinfo
    },
    '/test': {
        component: test
    }
})
//路由重定向(访问不存在的页面时，重定向到这个页面)
router.redirect({
    '*':'/index'
})

router.start(App,'app')//启动一个启用了路由的应用。创建一个 App 的实例并且挂载到元素 'app'
