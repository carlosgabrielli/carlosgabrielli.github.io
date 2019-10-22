import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
<<<<<<< HEAD
import router from './router'
import { store } from './store/store'

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
=======
import router from './router/'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

var firebaseConfig = {
  apiKey: "AIzaSyAm597FCzyDQu-lNvtcE79LhzI3uFeBY2A",
  authDomain: "tesis-b214c.firebaseapp.com",
  databaseURL: "https://tesis-b214c.firebaseio.com",
  projectId: "tesis-b214c",
  storageBucket: "",
  messagingSenderId: "634526123704",
  appId: "1:634526123704:web:73558123f4b961f3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
>>>>>>> 8144f179c22b4746a773804167526bfd0d713082
