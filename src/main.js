import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import router from './router'
import { store } from './store/store'
import  './assets/css/base.css'
import  './assets/css/tumenuya.css'

Vue.config.productionTip = false

var firebaseConfig = {
    apiKey: "AIzaSyBM1F24exZcyfWKvGOuKRH8lVQfqAVWIsE",
    authDomain: "tu-menu-ya.firebaseapp.com",
    databaseURL: "https://tu-menu-ya.firebaseio.com",
    projectId: "tu-menu-ya",
    storageBucket: "tu-menu-ya.appspot.com",
    messagingSenderId: "200493322918",
    appId: "1:200493322918:web:a42d82d91b7471a9355a67",
    measurementId: "G-ZJY0J6NHE5"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
    vuetify,
    firebase,
    router,
    store,
    render: h => h(App)
}).$mount('#app')

