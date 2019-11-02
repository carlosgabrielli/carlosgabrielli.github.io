import firebase from 'firebase'

const state = {
    locales: [],
    filtrado: null
}

const getters = {
    locales (state) {
        return state.locales
    },
    filtrado (state) {
        return state.filtrado
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
    },
    buscador({commit},val) {
        commit('buscador', val)

      },
      guardar({commit}, local) {
        firebase.auth().createUserWithEmailAndPassword(local.Email, local.Clave).then(result => {
            local.Uid = result.user.uid
            delete local.Clave
            firebase.firestore().collection('locales').add(local).catch(function(error) {
                console.log(error)
            })
        })
    }  
}

const mutations = {
    buscador(state, val){
        if (!val) {
            state.filtrado = state.locales
            return
        }
        let valores = val.split(" ");
        state.filtrado = state.locales.filter(function(item) {
          let busqueda = [];
          let respuesta = null;
          for (let res of valores) {
            busqueda.push(
              item.Nombre.toLowerCase().indexOf(res.toLowerCase()) > -1 ||
                item.Direccion.toLowerCase().indexOf(res.toLowerCase()) > -1
            );
          }
  
          for (let i = 0; i < busqueda.length; i++) {
            if (i == 0) {
              respuesta = busqueda[i];
            } else {
              respuesta = respuesta && busqueda[i];
            }
          }
          return respuesta
        });
    },
    setLocales (state, payload) {
        state.locales = payload
        state.filtrado = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}