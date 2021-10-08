import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import products from './modules/products'
import carts from './modules/carts'

Vue.use(Vuex)

const storeData = {
	modules: {
		products,
		carts
	}
}

const store = new Vuex.Store(storeData)

export default store
