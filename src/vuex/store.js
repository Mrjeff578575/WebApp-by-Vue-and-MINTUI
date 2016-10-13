import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    login_person:'',
    persons: {
        Jeff: {
            'name':'Jeff',
            'position':'总经理',
            'store':'SteelSeries赛睿专卖店',
            'phoneNumber':'13666666666',
            'call':'028-88888888',
            'email':'liu123456789@gmail.com',
            'companyName':'四川XXXX科技有限公司'
        },
        Alice: {
            'name':'Alice',
            'position':'技术总监',
            'store':'SteelSeries赛睿专卖店',
            'phoneNumber':'13666666666',
            'call':'028-88888888',
            'email':'liu123456789@gmail.com',
            'companyName':'四川XXXX科技有限公司'
        },
        Joe: {
            'name':'Joe',
            'position':'执行总裁',
            'store':'SteelSeries赛睿专卖店',
            'phoneNumber':'13666666666',
            'call':'028-88888888',
            'email':'liu123456789@gmail.com',
            'companyName':'四川XXXX科技有限公司'
        }       
    },
    orders:{
        'fir': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/TB2XwrgipXXXXXKXpXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 APEX M260 背光游戏机械键盘 霜冻之蓝 狂热之橙',
            'info':'按键背光 多种轴体可选 高性价比 霜冻狂热配色',
            'treated':false
        },
        'sec': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/TB2XwrgipXXXXXKXpXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 APEX M260 背光游戏机械键盘 霜冻之蓝 狂热之橙',
            'info':'按键背光 多种轴体可选 高性价比 霜冻狂热配色',
            'treated':true
        },
        'thi': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/TB2XwrgipXXXXXKXpXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 APEX M260 背光游戏机械键盘 霜冻之蓝 狂热之橙',
            'info':'按键背光 多种轴体可选 高性价比 霜冻狂热配色',
            'treated':false           
        },
        'fou': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/TB2XwrgipXXXXXKXpXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 APEX M260 背光游戏机械键盘 霜冻之蓝 狂热之橙',
            'info':'按键背光 多种轴体可选 高性价比 霜冻狂热配色',
            'treated':true           
        },
        'fiv': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/TB2XwrgipXXXXXKXpXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 APEX M260 背光游戏机械键盘 霜冻之蓝 狂热之橙',
            'info':'按键背光 多种轴体可选 高性价比 霜冻狂热配色',
            'treated':true           
        },
        'six': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/TB2XwrgipXXXXXKXpXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 APEX M260 背光游戏机械键盘 霜冻之蓝 狂热之橙',
            'info':'按键背光 多种轴体可选 高性价比 霜冻狂热配色',
            'treated':true           
        },
        'seven': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/TB2XwrgipXXXXXKXpXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 APEX M260 背光游戏机械键盘 霜冻之蓝 狂热之橙',
            'info':'按键背光 多种轴体可选 高性价比 霜冻狂热配色',
            'treated':true           
        },
        'eight': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/TB2XwrgipXXXXXKXpXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 APEX M260 背光游戏机械键盘 霜冻之蓝 狂热之橙',
            'info':'按键背光 多种轴体可选 高性价比 霜冻狂热配色',
            'treated':true           
        }       
    },
    goods:{
        'fir': {
            'img':'https://img.alicdn.com/imgextra/i2/1043759434/TB2UM0vbFXXXXbfXXXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 Sensei 激光有线电竞 游戏鼠标 对称式设计',
            'info':'为胜利而生 多色彩灯 对称式设计',
            'storage':true
        },
        'sec': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/TB2XwrgipXXXXXKXpXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 APEX M260 背光游戏机械键盘 霜冻之蓝 狂热之橙',
            'info':'按键背光 多种轴体可选 高性价比 霜冻狂热配色',
            'storage':false
        },
        'thi': {
            'img':'https://img.alicdn.com/bao/uploaded/i4/1043759434/T2E1gcXctXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'steelseries/赛睿 siberia 100 Headset 头戴式 游戏耳机 耳麦',
            'info':'轻便佩戴 隐藏式麦克风',
            'storage':true           
        },
        'fou': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/T2CMayXslaXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 QcK XXL 加长专业游戏大鼠标垫电脑键盘垫桌垫',
            'info':'长900mm 宽400mm 厚4mm 稳定顺滑',
            'storage':false           
        },
        'fiv': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/TB2XwrgipXXXXXKXpXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 APEX M260 背光游戏机械键盘 霜冻之蓝 狂热之橙',
            'info':'按键背光 多种轴体可选 高性价比 霜冻狂热配色',
            'storage':true           
        },
        'six': {
            'img':'https://img.alicdn.com/imgextra/i4/1043759434/TB2XwrgipXXXXXKXpXXXXXXXXXX_!!1043759434.jpg_430x430q90.jpg',
            'title':'SteelSeries赛睿 APEX M260 背光游戏机械键盘 霜冻之蓝 狂热之橙',
            'info':'按键背光 多种轴体可选 高性价比 霜冻狂热配色',
            'storage':true           
        },
    },
    news:{},
    orders_status:false,
    orders_untreated:[],
    goods_unstorage:[],
    currentName: 'Jeff',
    popupVisible: false,
    selected:{}
}
const mutations = {
    CHANGE_PERSON(state, name){
        state.currentName = name
    },
    CHANGE_POP(state){
        state.popupVisible = !state.popupVisible
    },
    CHANGE_ORDER(state, item){
        if(item == 'orders'){
            if(state.orders_untreated.length !== 0) return
            for( var i in state.orders){
                if( !state.orders[i].treated){
                    state.orders_untreated.push(state.orders[i])
                }
            }
        }
        else{
            if(state.goods_unstorage.length !== 0) return
            for( var i in state.goods){
                if( !state.goods[i].storage){
                    state.goods_unstorage.push(state.goods[i])
                }
            }
        }

    },
    CHANGE_STATUS(state, item){
        item.storage = true
        let i = state.goods_unstorage.indexOf(item)
        state.goods_unstorage.splice(i, 1);
    },
    SYNCHRO_ORDER(state, items){
        state.news = items
        if(state.news.length != undefined){
            state.orders_status = true
        }
    },
    DISPLAY_STATUS(state){
        state.orders_status = !orders_status
    },
    CHANGE_SELECTED(state, item){
        state.selected = item
    }
}
export default new Vuex.Store({
    state,
    mutations
})