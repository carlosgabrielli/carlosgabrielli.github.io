import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
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