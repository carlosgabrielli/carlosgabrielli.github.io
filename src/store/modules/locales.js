import firebase from 'firebase'

const state = {
    locales: [],
    filtrado: null,
    local: null
}

const getters = {
    local (state) {
        return state.local
    },
    locales (state) {
        return state.locales
    },
    filtrado (state) {
        return state.filtrado
    }
}

const actions = {
    // Permite ver los locales en su correspondiente página con su Id como link
    ver ({commit}, id) {
        console.log(id)
        firebase.firestore().collection('locales').doc(id).get().then(function(snapshot){
            commit('setLocal', snapshot.data())
        })
    },
    // Lista los locales
    listar({commit}){
        let lista = []
        firebase.firestore().collection('locales').get().then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
                let dato = childSnapshot.data()
                dato.Id = childSnapshot.id
                lista.push(dato)
            })
            commit('setLocales', lista)
        })
    },
    // Permite buscar los locales
    buscador({commit},val) {
        commit('buscador', val)

      },
      // Guarda los locales que se registran en la base de datos
      guardar({commit}, local) {
        firebase.auth().createUserWithEmailAndPassword(local.Email, local.Clave).then(result => {
            local.Uid = result.user.uid
            firebase.firestore().collection('usuarios').add({
                uid: result.user.uid,
                nombre: result.user.displayName,
                telefono: null,
                rol: 'resto'
            })
            delete local.Clave
            firebase.firestore().collection('locales').add(local).catch(function(error) {
                console.log(error)
            })
        })
    }  
}

const mutations = {
    setLocal (state, local) {
        state.local = local
    },
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