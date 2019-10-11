import firebase from 'firebase'

// son todas las variables (atributos) del objeto auth
const state = {
    tokenId: null,
    userName: null,
    userEmail: null,
    login: false,
}

// Todas las funciones que me muestren los datos que contienen los state
const getters = {
    getToken (state){
        return state.tokenId
    },
    getUserName (state){
        return state.userName
    },
    getUserEmail (state){
        return state.userEmail
    },
    getlogin (state){
        return state.login
    }
}

// Funciones qeu me permiten alterar los state
const actions = {
    login ({commit}) {
        

        }
    }


const mutations = {

}

export default{
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
