import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersist from 'vuex-persist'

import auth from './modules/auth'
import locales from './modules/locales'
import promos from './modules/promos'
import sliderlocales from './modules/sliderlocales'
import categorias from './modules/categorias'
import categoriastodas from './modules/categoriastodas'
import platos from './modules/platos'
import ingredientes from './modules/ingredientes'
import pedidos from './modules/pedidos'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    key: 'tesisApp',
    storage: window.localStorage
})

export const store = new Vuex.Store({
    plugins: [vuexPersist.plugin],
    modules: {
        auth,
        locales,
        promos,
        sliderlocales,
        categorias,
        categoriastodas,
        platos,
        ingredientes,
        pedidos
    }
})