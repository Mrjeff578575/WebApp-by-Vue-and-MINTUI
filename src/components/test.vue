<template>
    <div class="test-container">
        <ul class="newslist" v-infinite-scroll="loadMore()" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="new in news_list[0]">
                <a :href="new.url"></a>
                <img :src="new.picUrl" class="clear">
                <h2>{{ new.title }}</h2>
                <p>来源: {{ new.description}}</p>
                <span>{{ new.ctime}}</span>
            </li>      
        </ul>
    </div>
</template>
<script type="text/javascript">
    import { MessageBox } from 'mint-ui'
    export default{
        data(){
            let loading = false
            let news_list = []
            return {loading, news_list}
        },
        ready:function(){
            if(this.news.length == undefined){
                // MessageBox('提示', '订单还未同步');
                MessageBox.alert('订单未同步','提示').then(action => {
                    window.location.href = window.location.origin + window.location.pathname + '#!/index';
                })
            }
            else{               
                this.news_list.push(this.news.slice(0, 10))
                console.log(this.news_list)
            }
        },
        vuex:{
            getters: {
                news: state => state.news
            }
        },
        methods:{
            loadMore: function(){
                this.loading = true
                  setTimeout(() => {
                    this.news_list.push(this.news.slice(10, 20));
                    this.loading = false;
                  }, 2500);
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
</style>