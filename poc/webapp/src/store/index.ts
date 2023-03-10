import Vue from 'vue'
import Vuex from 'vuex'
import { getModule } from 'vuex-module-decorators'

import StateModule, { IState } from './state.module'

Vue.use(Vuex)

const store = new Vuex.Store<IState>({
  modules: {
    state: StateModule
  }
})

export default store
export const stateModule = getModule(StateModule, store)
