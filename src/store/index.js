import { createStore } from 'vuex'

export default createStore({
    state: { // aqui é onde são guardados os dados vindos do backend.
        user: {
            first_name: 'William',
            last_name: 'Tomé',
            email: 'william@teste.com',
        },
        products: [],
        cart: [],
    },
    mutations: {
        updateUser(state, payload) {
            this.state.user = payload
            console.log(this.state.user)
        }
    },
    actions: {},
    getters: {},
    modules: {}
})