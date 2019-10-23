import firebase from 'firebase'

const state = {
    locales: []
}

const getters = {
    locales (state) {
        return state.locales
    }
}

const actions = {
    listar({commit}){
        let lista = []
        firebase.firestore().collection('locales').get().then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                lista.push(childSnapshot.data())
            })
            commit('setLocales', lista)
        })
    }
}

const mutations = {
    setLocales (state, payload) {
        state.locales = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}