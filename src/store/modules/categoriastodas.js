import firebase from 'firebase'

const state = {
    categoriastodas: []
}

const getters = {
    categoriastodas (state) {
        return state.categoriastodas
    }
}

const actions = {
    listar({commit}){
        let lista = []
        firebase.firestore().collection('categoriasTodas').get().then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                lista.push(childSnapshot.data())
            })
            commit('setcategoriastodas', lista)
        })
    }
}

const mutations = {
    setcategoriastodas (state, payload) {
        state.categoriastodas = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}