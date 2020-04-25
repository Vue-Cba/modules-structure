import Vue from 'vue'
import Vuex from 'vuex'

// Import modules stores
import modules from '../modules/main.store'


// Define store

Vue.use(Vuex)


// Export

const store = new Vuex.Store({ modules })

export default store