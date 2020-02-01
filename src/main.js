import $ from 'jquery'

$(function () {
    $('.box').css({
        'background': 'yellow',
        'fontSize': '30px',
        'text-align':'center'
    })
    $('.box').click(function () {
        $(this).css({
            'background': 'skyblue'
        })
    })
})

class Person {
    static info = 'aaa'
}
console.log(Person.info)


//-------------------------------------------------

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/style/reset.css'
import './assets/style/app.scss'
import './assets/style/icon.css'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


//刷新保存vuex状态
if (sessionStorage.getItem("store")) {
    store.replaceState(
        Object.assign(
            {},
            store.state,
            JSON.parse(sessionStorage.getItem("store"))
        )
    );
    sessionStorage.removeItem("store")
  }
  
//监听，在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("store", JSON.stringify(store.state));
  });