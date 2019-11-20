import firebase from 'firebase'

const state = {
    pedido: {
        local: null,
        items: []
    },
    localActual: null
}

const getters = {
    pedidos (state) {
        return state.pedido
    },
    pedido (state) {
        return state.pedido
    }
}

const actions = {
    localActual ({commit}, payload) {
        commit('localActual', payload)
    },
    guardar ({commit}, payload) {
        commit('setPedido', payload)
    },
    eliminar ({commit}, payload) {
        commit('eliminarPedido', payload)
    }
}

const mutations = {
    localActual (state, payload) {
        state.localActual = payload
    },
    setPedido (state, payload) {
        if (state.pedido.local !== state.localActual && state.pedido.local) {
            return
        }

        state.pedido.local = state.localActual

        payload.total = payload.cantidad * payload.Precio
        for (let ingrediente of payload.Ingredientes) {
            if (ingrediente.agregado) {
                payload.total += ingrediente.Precio
            }
        }
        state.pedido.items.push(payload)
    },
    eliminarPedido (state, payload) {
        state.pedido.items.splice(payload, 1)
        if (state.pedido.items.length === 0) {
            state.pedido = {
                local: null,
                items: []
            }
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}