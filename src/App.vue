<template>
  <div class="container">
    <mt-header fixed :title = "selected" class="header" v-if="$route.path !== '/login'">
        <mt-button slot="left">
            <i class="iconfont" v-if="$route.path == '/index'" @click="sideVisible = !sideVisible">&#xe677;</i>
        </mt-button>
        <mt-button slot="right">
            <i class="iconfont" v-if="$route.path == '/order'">&#xe639;</i>
        </mt-button>
    </mt-header>
    <mt-popup
      :visible.sync="sideVisible"
      position="left" class="sidebar">
      <div class="userinfo">
          <img src="./assets/logo.png" style="width:250px; height:50px;">
          <h4></h4>
          <p></p>
      </div>
      <ul class="sideinfo">
          <li><i class="iconfont"></i></li>
          <li><i class="iconfont"></i></li>
          <li><i class="iconfont"></i></li>
          <li><i class="iconfont"></i></li>
      </ul>
    </mt-popup>
    <mt-tabbar :selected.sync="selected" class="bottom_tabs" fixed v-if="$route.path !== '/login'">
        <mt-tab-item id="首页" v-link="'/index'">
            <i class="iconfont tabs-icon" slot="icon">&#xe622;</i>
            首页
        </mt-tab-item>
        <mt-tab-item id="订单管理" v-link="'/order'">
            <i class="iconfont tabs-icon" slot="icon">&#xe6e1;</i>
            订单
        </mt-tab-item>
        <mt-tab-item id="商品管理" v-link="'/goods'">
            <i class="iconfont tabs-icon" slot="icon">&#xe624;</i>
            商品
        </mt-tab-item>
        <mt-tab-item id="个人信息" v-link="'/personinfo'">
            <i class="iconfont tabs-icon" slot="icon">&#xe677;</i>
            我
        </mt-tab-item>
        <mt-tab-item id="测试" v-link="'/test'">
            <i class="iconfont tabs-icon" slot="icon">&#xe677;</i>
            测试页面
        </mt-tab-item>
    </mt-tabbar>
    <router-view transition="fade"></router-view>
  </div>
</template>
<script type="text/javascript">
    import store from './vuex/store'
    export default{
        store,
        data(){
            let selected = '首页'
            let sideVisible = false
            return { selected, sideVisible }
        }
    }
</script>
<style type="text/css">
    html{
        overflow: hidden;
    }
    html,body{
        height: 100%;
    }
    .container{
        height: 100%;
    }
    .bottom_tabs .fa{
        font-size: 22px;
    }
    .search_bar{
        margin-top: 35px;
        border-radius: 2px;
        border: 1px solid #efefef;
        outline: none;
        width: 100%;
    }
    .fade-transition {
        transition: all 0.2s ease;
    }
    .fade-enter{
        transform: translateX(500px);
    }
    .fade-leave{
        opacity: 0;
    }
    .tabs-icon{
        color: #999898;
    }
    .is-selected .tabs-icon{
        color: #26a2ff;
    }
    .container .sidebar{
        height: 100%;
        width: 70%;
    }
</style>