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
        updateUser(state, payload) {
            this.state.user = payload
            console.log(this.state.user)
        },
        saveProductInCart(state, payload) {
            this.state.cart.push(payload)
        },
        removeProduct(state, id) {
            const index = state.cart.findIndex(obj => obj.id === id)
            state.cart.splice(index,1)
        }
    },
    actions: {},
    getters: {},
    modules: {}
})