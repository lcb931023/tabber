import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const MEASURE_INIT_LENGTH = 8

export default new Vuex.Store({
  state: {
    cursorX: 0,
    cursorY: 0,
    strings: ['E', 'B', 'G', 'D', 'A', 'E'],
    measure: 7,
    
  },
  
  mutations: {
    moveCursor (state, payload) {
      state.cursorX += payload.dX
      state.cursorY += payload.dY
      if (state.cursorX < 0) state.cursorX = 0
      if (state.cursorY < 0) state.cursorY = 0
      // TODO check for cursor maxing out
    },
  },
})
