export const changePerson = ({dispatch}, name) => {
	dispatch('CHANGE_PERSON', name)
}

export const changePop = ({dispatch}) => {
	dispatch('CHANGE_POP')
}

export const changeOrder = ({dispatch}, item) => {
    dispatch('CHANGE_ORDER', item)
}

export const changeStatus = ({dispatch}, item) => { //改变订单的入库和未入库状态
    dispatch('CHANGE_STATUS', item)
}

export const displayStatus = ({dispatch}) => { //显示订单的同步成功和同步失败状态
    dispatch('DISPLAY_STATUS')
}

export const changeSelected = ({dispatch}, item) => {
    dispatch('CHANGE_SELECTED', item)
}

export const synchroOrder = ({dispatch}, that) => {
    const url = 'http://apis.baidu.com/txapi/weixin/wxhot?num=10&rand=1&word=%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0&page=1&src=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5'
    const options = {
        'url': url,
        'method':'GET',
        'params':{
            'num': 50,
            'rand': 1,
            'word': '大疆',
            'src' : '人民日报'
        },
        'headers':{
            'apikey':'2ff8a937112606bdb6b2f56dcc509900'
        }
    }
    that.$http.get(url, options).then(function(response){
        console.log(response.data.newslist);
        dispatch('SYNCHRO_ORDER', response.data.newslist)
    }, function(){
        console.log('Error Code is: ' + response.data.code)
    })
}