import { createStore } from 'vuex'

export default createStore({
    state: { // aqui é onde são guardados os dados vindos do backend.
        user: {
            first_name: 'William',
            last_name: 'Tomé',
            email: 'william@teste.com',
        },
        products: [
            {
                id: 1,
                name: 'Bola',
                price: 50,
            },
            {
                id: 2,
                name: 'Tenis',
                price: 250,
            },
            {
                id: 3,
                name: 'Boné',
                price: 73,
            },
        ],
        cart: [],
    },
    mutations: {
        // sync
        updateUser(state, payload) {
            console.log('mutation: updateUser')
            this.state.user = payload
        },
        saveProductInCart(state, payload) {
            this.state.cart.push(payload)
        },
        removeProduct(state, id) {
            const index = state.cart.findIndex(obj => obj.id === id)
            state.cart.splice(index,1)
        }
    },
    actions: {
        // async
        updateUser({ commit }, payload) {
            console.log('action: updateUser')

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                    commit('updateUser', payload)
                }, 3000)
            })
        }
    },
    getters: {},
    modules: {}
})