import firebase from 'firebase'

const state = {
    platos: [],
    plato: null
}

const getters = {
    plato (state) {
        return state.plato
    },
    platos (state) {
        return state.platos
    }
}

const actions = {
    ver ({commit}, id) {
        console.log(id)
        firebase.firestore().collection('platos').doc(id).get().then(function(snapshot){
            commit('setplato', snapshot.data())
        })
    },
    listar({commit}){
        let lista = []
        firebase.firestore().collection('platos').get().then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                let dato = childSnapshot.data()
                dato.Id = childSnapshot.id
                lista.push(dato)
            })
            commit('setplatos', lista)
        })
    },
    // Lista los platos en los locales que corresponden en la base de datos
    listarLocal({commit}, id){
        let lista = []
        firebase.firestore().collection('platos').where('Id_Local', '==', id).get().then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                lista.push(childSnapshot.data())
            })
            commit('setplatos', lista)
        })
    },
    listarPlato({commit}, id){
        let lista = []
        firebase.firestore().collection('platos').where('Id_Plato', '==', id).get().then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                lista.push(childSnapshot.data())
            })
            commit('setplatos', lista)
        })
    }
}

const mutations = {
        
        setplato (state, plato) {
            state.plato = plato
        },
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