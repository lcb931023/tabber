<template>
  <div class='measure'>
    <!-- <div class='string' v-for='string in strings' :key='string'>
      <span class='notes' v-for='note in notes' :key='note'>{{note}}</span>|
    </div> -->

    <div class='string' v-for='(string, stringIndex) in notes' :key='stringIndex'>
      <span
        class='notes'
        v-for='(note, noteIndex) in string'
        :key='noteIndex'
        :data-string='stringIndex'
        :data-position='noteIndex'
      >{{note}}</span>|<!-- | is the dividing bar -->
    </div>
  </div>
</template>

<script>
let initNotes = [
        Array(17).fill('-'),
        Array(17).fill('-'),
        Array(17).fill('-'),
        Array(17).fill('-'),
        Array(17).fill('-'),
        Array(17).fill('-'),
      ]

export default {
  name: 'measure',
  props: ['strings'],
  data () {
    return {
      notes: initNotes,
    }
  },
}
</script>

<style lang="scss">
.measure {
  display: inline-block;
  margin-bottom: 1em;
}
.notes{
  display: inline-block;
}
</style>
