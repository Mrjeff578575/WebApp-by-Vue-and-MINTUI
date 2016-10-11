<template>
    <div class="login-container">
        <mt-popup
            :visible.sync="popupVisible"
            position="top"
            popup-transition="popup-fade">
         登&nbsp;录&nbsp;成&nbsp;功
        </mt-popup>
        <div class="login-form" v-if="$route.path == '/login'">
            <img class="logo" src="../assets/logo.png">
            <form id="login_form" v-if="show == 'login'"><!-- action="js_form_action.asp" method="post" -->
                <mt-field label="手机号" placeholder="请输入手机号" type="tel" 
                    :value.sync="tel" :attr="{ minlength:11, maxlength:11}" :state="status.tel">
                </mt-field>
                <mt-field label="密码" placeholder="请输入密码(8 - 16位)" type="password" 
                    :value.sync="password" :attr="{ minlength:8, maxlength:16}" :state="status.password">                    
                </mt-field>
            </form>
            <form id="register_form" v-if="show == 'register'"><!-- action="js_form_action.asp" method="post" -->
                <mt-field label="用户名" placeholder="请输入用户名(2 - 4位)" :value.sync="username" 
                    :state="status.user" :attr="{ minlength:2, maxlength:6}"></mt-field>
                <mt-field label="邮箱" placeholder="请输入邮箱" type="email" :value.sync="email"  :state="status.email"></mt-field>
                <mt-field label="密码" placeholder="请输入密码(8 - 16位)" type="password" 
                    :value.sync="password" :attr="{ minlength:8, maxlength:16}" :state="status.password">                    
                </mt-field>
                <mt-field label="手机号" placeholder="请输入手机号" type="tel" 
                    :value.sync="tel" :attr="{ minlength:11, maxlength:11}" :state="status.tel">
                </mt-field>
            </form>  
            <div class="agreement">
                <input type="checkbox" class="checkbox" id="checkbox_a1">
                <label for="checkbox_a1" @click="checked = !checked"></label>
                <span class="left">勾选即表示接收<a href="#" class="agreement-text">《汇旅通使用协议》</a></span>
                <span class="right"><a href="#" class="forget">忘记密码?</a></span>            
            </div> 
            <button class="login submit" @click="Jump('login')" :disabled="!checked">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
            <button class="register submit" @click="Jump('register')" :disabled="!checked">注&nbsp;&nbsp;&nbsp;&nbsp;册</button>    
        </div>
    </div>
</template>
<script type="text/javascript">
    import { changePerson } from '../vuex/action'
    export default{
        data() {
            let username = ''
            let email = ''
            let password = ''
            let tel = ''
            let status = { 'user':'', 'email':'', 'password':'', 'tel':''}
            let checked = false
            let popupVisible = false
            let show = 'login'
            return {username, email, password, tel, status, checked, popupVisible, show}
        },
        methods: {
            Jump: function(show) {
                if(this.password !== ''){
                    this.Check()
                }
                else{
                    this.change(show)
                }
            },
            change: function(show) {
                this.show = show
            },
            Check: function() {
                const email_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
                const tel_filter = /^1[34578]{1}\d{9}$/
                this.username.length >= 2 ? this.status.user = 'success' : this.status.user = 'error'
                email_filter.test(this.email) ? this.status.email = 'success' : this.status.email = 'error'
                this.password.length >= 8 ? this.status.password = 'success' : this.status.password = 'error'
                tel_filter.test(this.tel) ? this.status.tel = 'success' : this.status.tel = 'error'
                this.Submit()
            },
            Submit: function() {
                let j = 0
                for(let i in this.status){
                    if(this.status[i] == 'success'){
                        j++
                    }
                }
                if( j == 4){
                    if(document.getElementById("login_form")){
                        document.getElementById("login_form").submit()  
                    }
                    else{
                        document.getElementById("register_form").submit()
                    }                    
                    let user = {'username':this.username, 'email':this.email, 'password':this.password, 'tel':this.tel}
                    window.localStorage.user = JSON.stringify(user)
                    // {'username':this.user, 'email':this.email, 'password':this.password, 'tel':this.tel}
                    window.location.href = window.location.origin + window.location.pathname + '#!/index'
                    this.changePerson(this.username)
                }
            }
        },
        ready:function(){
            if(window.localStorage.user !== undefined){
                let localuser =  JSON.parse(window.localStorage.user)
                this.username = localuser.username
                this.email = localuser.email
                this.password = localuser.password
                this.tel = localuser.tel
            }
        },
        vuex:{
            actions:{
                changePerson
            }
        }
    }
</script>
<style type="text/css">
    .login-container{
        height: 100%;
        width: 100%;
    }
    .mint-popup{
        background: #56C1F6;
        width: 100%;
        text-align: center;
        height: 30px;
        font-size: 16px;
        color: #ffffff;
    }
    .login-form{
        width: 90%;
        margin: 80px auto 100px auto;
        border-radius: 5px;
    }
    .login-form .logo{
        width: 100%;
        padding-bottom: 40px;
    }
    .submit{
        width: 250px;
        height: 40px;
        display: block;
        margin: 0 auto;
        border-radius: 5px;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
        outline: none;
    }
    .submit:active{
        background: #FC7171;
    }
    .login{
        margin-top: 30px;
        background-color: #6CDFED;
        border: 1px solid #6CDFED;
    }
    .register{
        margin-top: 10px;
        background-color: #34F062;
        border: 1px solid #34F062;
    }
    button:disabled{
        background-color: #B9ABAB;
        border: none;
    }
    .agreement{
        margin-top: 10px;
        height: 28px;
        position: relative;
    }
    .agreement .left{
       position: absolute;
       top: 25%;
    }
    .agreement .right{
       position: absolute;
       top: 20%;
       right: 0;
    }
    .right .forget{
       color: #c1c1c1; 
    }
    .agreement-text{
        color: #0A81F5;
    }
    .checkbox{
        display: none;
    }
    .checkbox + label { 
        background-color: #FFF; 
        border: 1px solid #C1CACA; 
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05); 
        width:20px;
        height: 20px;
        top: 5px; 
        border-radius: 5px; 
        display: inline-block; 
        position: relative; 
        margin-right: 10px; 
    }      
    .checkbox:checked + label { 
        background-color: #ECF2F7; 
        border: 1px solid #92A1AC; 
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1); 
        color: #243441; 
    } 
     
    .checkbox:checked + label:after { 
        content: '\2714'; //勾选符号 
        position: absolute;
        top: 0;
        line-height: 22px;
        display: inline-block;
        height: 22px;
        width: 22px;  
        color: #758794; 
        font-size: 20px;
        color: #73F353; 
    } 
</style>