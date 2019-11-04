import firebase from 'firebase'

const state = {
    platos: []
}

const getters = {
    platos (state) {
        return state.platos
    }
}

const actions = {
    listar({commit}){
        let lista = []
        firebase.firestore().collection('platos').get().then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                lista.push(childSnapshot.data())
            })
            commit('setplatos', lista)
        })
    }
}

const mutations = {
    setplatos (state, payload) {
        state.platos = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}