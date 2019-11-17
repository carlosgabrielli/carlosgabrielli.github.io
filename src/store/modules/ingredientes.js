import firebase from 'firebase'

const state = {
    ingredientes: []
}

const getters = {
    ingredientes (state) {
        return state.ingredientes
    }
}

const actions = {
    listar({commit}){
        let lista = []
        firebase.firestore().collection('ingredientes').get().then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                lista.push(childSnapshot.data())
            })
            commit('setingredientes', lista)
        })
    }
}

const mutations = {
    setingredientes (state, payload) {
        state.ingredientes = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}