import Vue from 'vue'
import store from './store'
import App from './App.vue'


new Vue({
  el: '#app',
  store,
  render: h => h(App),
})

window.addEventListener('keydown', (e)=>{
  const key = e.key
  let dX = 0
  let dY = 0
  switch (event.key) {
    case "ArrowDown":
      dY = 1
      break;
    case "ArrowUp":
      dY = -1
      break;
    case "ArrowLeft":
      dX = -1
    break;
    case "ArrowRight":
      dX = 1
      break;
  }
  if (dX || dY) store.commit('moveCursor', {dX, dY})
})