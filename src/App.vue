<template>
  <div id="app">
    <h1> Tabber </h1>
    <tab></tab>
  </div>
</template>

<script>
import Tab from './Tab.vue'

export default {
  name: 'app',
  components: {
    Tab,
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Noto', Helvetica, Arial, sans-serif;
}

h1, h2 {
  font-weight: normal;
}
</style>
