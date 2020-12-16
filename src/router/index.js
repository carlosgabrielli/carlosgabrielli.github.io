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
import Escanear from '@/views/Escanear'
import MetodoPago from '@/views/MetodoPago'
import Efectivo from '@/views/Efectivo'
import Exito from '@/views/Exito'

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
            name: 'Login',
            component: Login,
            meta: {
                menu: false
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
                menu: false
            }
        },
        {
            path: '/RegistrarLocal',
            name: 'RegistrarLocal',
            component: RegistrarLocal,
            meta: {
                menu: false
            }
        },
        {
            path: '/RecibirPedido',
            name: 'RecibirPedido',
            component: RecibirPedido,
            meta: {
                menu: true
            }
        },
        {
            path: '/Escanear',
            name: 'Escanear',
            component: Escanear,
            meta: {
                menu: true
            }
        },
        {
            path: '/MetodoPago',
            name: 'MetodoPago',
            component: MetodoPago,
            meta: {
                menu: true
            }
        },
        {
            path: '/Efectivo',
            name: 'Efectivo',
            component: Efectivo,
            meta: {
                menu: true
            }
        },
        {
            path: '/Exito',
            name: 'Exito',
            component: Exito,
            meta: {
                menu: true
            }
        },
    ]
})