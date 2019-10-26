import firebase from 'firebase'

const state = {
    promos: []
}

const getters = {
    promos (state) {
        return state.promos
    }
}

const actions = {
    listar({commit}){
        let lista = []
        firebase.firestore().collection('promos').get().then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                lista.push(childSnapshot.data())
            })
            commit('setpromos', lista)
        })
    }
}

const mutations = {
    setpromos (state, payload) {
        state.promos = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}