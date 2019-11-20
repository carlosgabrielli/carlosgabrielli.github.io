import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import BaresRestaurantes from '@/views/BaresRestaurantes'
import Carta from '@/views/Carta'
import Producto from '@/views/Producto'
import CarritoEditar from '@/views/CarritoEditar'
import Registrar from '@/views/Registrar'
import RegistrarLocal from '@/views/RegistrarLocal'
import RecibirPedido from '@/views/RecibirPedido'
import ListaPedidos from '@/views/ListaPedidos'
import Pedido from '@/views/Pedido'
import MensajePedido from '@/views/MensajePedido'


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
            path: '/',
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
                menu: true
            }
        },
        {
            path: '/Carta/:id',
            name: 'Carta',
            component: Carta,
            meta: {
                menu: true
            }
        },
        {
            path: '/Producto/:id',
            name: 'Producto',
            component: Producto,
            meta: {
                menu: true
            }
        },
        {
            path: '/CarritoEditar',
            name: 'CarritoEditar',
            component: CarritoEditar,
            meta: {
                menu: true
            }
        },
        {
            path: '/Registrar',
            name: 'Registrar',
            component: Registrar,
            meta: {
                menu: true
            }
        },
        {
            path: '/RegistrarLocal',
            name: 'RegistrarLocal',
            component: RegistrarLocal,
            meta: {
                menu: true
            }
        },
        {
            path: '/RecibirPedido',
            name: 'RecibirPedido',
            component: RecibirPedido,
            meta: {
                menu: true
            }
        }
    ]
})