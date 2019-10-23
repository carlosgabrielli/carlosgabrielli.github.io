import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersist from 'vuex-persist'

import auth from './modules/auth'
import locales from './modules/locales'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    key: 'tesisApp',
    storage: window.localStorage
})

export const store = new Vuex.Store({
    plugins: [vuexPersist.plugin],
    modules: {
        auth,
        locales
    }
})