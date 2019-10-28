import firebase from 'firebase'

const state = {
    categorias: []
}

const getters = {
    categorias (state) {
        return state.categorias
    }
}

const actions = {
    listar({commit}){
        let lista = []
        firebase.firestore().collection('categorias').get().then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                lista.push(childSnapshot.data())
            })
            commit('setcategorias', lista)
        })
    }
}

const mutations = {
    setcategorias (state, payload) {
        state.categorias = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}