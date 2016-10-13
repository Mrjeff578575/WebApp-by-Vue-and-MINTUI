<template>
    <div class="order-container">
        <mt-navbar class="page-part" :selected.sync="selected" fixed>
          <mt-tab-item id="all"  @click="changeDisplay">全部</mt-tab-item>
          <mt-tab-item id="untreated" @click="changeDisplay">未入库</mt-tab-item>
        </mt-navbar>
        <ul class="order-list" v-if="display == true">
            <li class="order-item" v-for="good in goods">
                <img :src ="good.img" class="clear">
                <h4>{{ good.title }}</h4>
                <p>{{ good.info }}</p>
            </li>
        </ul>
        <ul class="order-list" v-if="display == false">
            <li class="order-item" v-for="good in goods_unstorage" track-by="$index">
                <img :src ="good.img" class="clear">
                <h4>{{ good.title }}</h4>
                <p>{{ good.info }}</p>
                <button class="btn" @click="changeStatus(this.good)">入库</button>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    import { changeOrder, changeStatus} from '../vuex/action'
    export default{
        data(){
            let selected = "all"
            let display = true 
            return {selected, display}
        },
        vuex:{
            getters: {
                goods: state => state.goods,
                goods_unstorage: state => state.goods_unstorage
            },
            actions: {
                changeOrder,
                changeStatus
            }
        },
        methods:{
            changeDisplay: function(){
                if(this.goods_unstorage.length == 0){
                    this.changeOrder('goods')
                }
                this.display = !this.display
            }
        }
    }
</script>
<style type="text/css">
    .btn{
        position: absolute;
        width: 20px;
        bottom: 20px;
        right: 10px;
        background-color: #BFF8B7;
        color: #090808;
        border: 1px solid #bff8b7;
        border-radius: 3px;
        box-shadow: 2px 2px 2px #000000;
        font-weight: bold;
    }
</style>