<template>
  <div id="tab">
    <div class='tunings'>
      <span class='tuning' v-for='string in strings' :key='string'>{{string}}|</span>
    </div><!-- connecting the two elements, 
    because new line would cause unwanted space
 --><measure
      v-for='n in measure'
      :key='n'
      :strings='strings'></measure>
  </div>
</template>

<script>
import Measure from './Measure.vue'

export default {
  name: 'tab',
  components: {
    Measure,
  },
  data () {
    return {
      strings: ['E', 'B', 'G', 'D', 'A', 'E'],
      measure: 8,
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
#tab {
  font-family: monospace;
}
.tunings {
  display: inline-block;
}
.tuning {
  display: block;
}
</style>
