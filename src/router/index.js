import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Rubros from '../views/Rubros'

Vue.use (Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/rubros',
            name: 'Rubros',
            component: Rubros
        }
    ]
})