import firebase from 'firebase'

const state = {
    sliderlocales: []
}

const getters = {
    sliderlocales (state) {
        return state.sliderlocales
    }
}

const actions = {
    listar({commit}){
        let lista = []
        firebase.firestore().collection('sliderlocales').get().then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                lista.push(childSnapshot.data())
            })
            commit('setsliderlocales', lista)
        })
    }
}

const mutations = {
    setsliderlocales (state, payload) {
        state.sliderlocales = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}