import { createStore } from 'vuex'
import tabModule from "./tab.js"

const store = createStore({
    modules:{
        tab : tabModule
    }
    }
  )
export default store;