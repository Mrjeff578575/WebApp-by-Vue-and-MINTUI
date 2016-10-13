<template>
    <div class="test-container">
        <ul class="newslist" v-infinite-scroll="loadMore()" infinite-scroll-disabled="loading" infinite-scroll-distance="distance">
            <li v-for="new in news_list">
                <a :href="new.url"></a>
                <img :src="new.picUrl" class="clear">
                <h2>{{ new.title }}</h2>
                <p>来源: {{ new.description}}</p>
                <span>{{ new.ctime}}</span>
            </li>      
        </ul>
        <div class="load-icon">
                <span>正在加载</span><mt-spinner type="fading-circle" color="#26a2ff" :size="30"></mt-spinner>
        </div>
    </div>
</template>
<script type="text/javascript">
    import { MessageBox } from 'mint-ui'
    import { changeSelected } from '../vuex/action'

    export default{
        data(){
            let loading = false
            let news_list = []
            let distance = 300
            let num = 10
            return {loading, news_list, distance, num}
        },
        created:function(){
            if(this.news.length == undefined){
                MessageBox.alert('订单未同步','提示').then(action => {
                    // window.location.href = window.location.origin + window.location.pathname + '#!/index'; //差评实现方法
                    this.$router.go({path:'/index'})
                    this.changeSelected('首页') //改变选中的标签栏
                })
            }
            else{
                for(let i = 0 ; i < 10 ; i++){
                    this.news_list.push(this.news[i])
                }               
            }
        },
        vuex:{
            getters: {
                news: state => state.news
            },
            actions: {
                changeSelected
            }
        },
        methods:{
            loadMore: function(){
                this.loading = true
                  setTimeout(() => {
                    if(this.num < this.news.length){
                        let last = this.news_list.length - 1
                        for(let i = this.num ; i <= last + 10 ; i++){
                            this.news_list.push(this.news[i])
                        }
                        this.num += 10
                    }
                    this.loading = false;
                  }, 2500)
            }
        }           
    }
</script>
<style type="text/css">
    .test-container{
        position: absolute;
        top: 40px;
        height: calc(100% - 95px);
        overflow-y: scroll;
    }
    .newslist li{
        width: 95%;
        margin: 0 auto;
        display: block;
        height: 110px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #efefef;
        position: relative;
    }
    .newslist a{
        display: block;
        position: absolute;
        width: 100%;
        height: 100px;
    }
    .newslist img{
        width: 100px;
        height: 100px;
        border-radius: 5px;
        margin-right: 10px;
        float: left;
    }
    .newslist h2{
        font-size: 14px;
    }
    .newslist p{
        color: #c1c1c1;
        text-align: right;
        padding-right: 20px;
    }
    .newslist span{
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
    .load-icon{
        width: 100px;
        margin: 10px auto 5px auto;
    }
    .load-icon span{
        float: right;
        line-height: 30px;
        margin-left: 5px;
        color: #c1c1c1;
    }
</style>