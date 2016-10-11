<template>
    <div class="order-container">
        <mt-navbar class="page-part" :selected.sync="selected">
          <mt-tab-item id="all"  @click="changeDisplay">全部</mt-tab-item>
          <mt-tab-item id="untreated" @click="changeDisplay">待处理</mt-tab-item>
        </mt-navbar>
        <ul class="order-list" v-if="display == true">
            <li class="order-item" v-for="order in orders">
                <img :src ="order.img" class="clear">
                <h4>{{ order.title }}</h4>
                <p>{{ order.info }}</p>
            </li>
        </ul>
        <ul class="order-list" v-if="display == false">
            <li class="order-item" v-for="order in orders_untr" track-by="$index">
                <img :src ="order.img" class="clear">
                <h4>{{ order.title }}</h4>
                <p>{{ order.info }}</p>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    import { changeOrder } from '../vuex/action'
    export default{
        data(){
            let selected = "all"
            let display = true 
            return {selected, display}
        },
        vuex:{
            getters: {
                orders: state => state.orders,
                orders_untr: state => state.orders_untreated,
                orders_status: state => state.orders_status
            },
            actions: {
                changeOrder
            }
        },
        methods:{
            changeDisplay: function(){
                if(this.orders_untr.length == 0){
                    this.changeOrder('orders')
                }
                this.display = !this.display
            }
        }
    }
</script>
<style type="text/css">
    .order-container{
        position: absolute;
        top: 40px;
        height: 100%;
        width:100%;
    }
    .page-part{
        z-index: 99;
    }
    .order-list{
        height: 75%;
        overflow: scroll;
    }
    .order-item img{
        width: 100px;
        height: 100px;
        float: left;
    }
    .order-item h4{
        padding-top: 20px;
        margin-left: 110px;
    }
    .order-item{
        height: 100px;
        position: relative;
        top: 5px;
    }
    .order-item p{
        position: absolute;
        bottom: 10%;
        color: #c1c1c1;
        left: 110px;
    }
    .mint-navbar .mint-tab-item.is-selected{
        margin-bottom: 0;
    }
</style>