import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyD3H2Naqy-fltEfFUhMOIDbR56gnELJRYE",
  authDomain: "peludos-prueba.firebaseapp.com",
  databaseURL: "https://peludos-prueba.firebaseio.com",
  projectId: "peludos-prueba",
  storageBucket: "peludos-prueba.appspot.com",
  messagingSenderId: "453754979025",
  appId: "1:453754979025:web:2fb39da0a8651c1e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')