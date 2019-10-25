import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import BaresRestaurantes from '@/views/BaresRestaurantes'
import Filtros from '@/views/Filtros'
import Carta from '@/views/Carta'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/Home',
            name: 'Home',
            component: Home,
            meta: {
                menu: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                menu: false
            }
        },
        {
            path: '/Admin',
            name: 'Admin',
            component: Admin,
            meta: {
                menu: false
            }
        },
        {
            path: '/BaresRestaurantes',
            name: 'BaresRestaurantes',
            component: BaresRestaurantes,
            meta: {
                menu: false
            }
        },
        {
            path: '/Filtros',
            name: 'Filtros',
            component: Filtros,
            meta: {
                menu: false
            }
        },
        {
            path: '/Carta',
            name: 'Carta',
            component: Carta,
            meta: {
                menu: true
            }
        }
    ]
})