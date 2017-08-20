<template>
  <div class='measure'>
    <div class='string' v-for='string in strings' :key='string'>
      <span class='notes' v-for='n in size' :key='n'>-</span><span class='divider'>|</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'measure',
  props: ['strings'],
  data () {
    return {
      size: 16,
    }
  }
}
</script>

<style lang="scss">
.measure {
  display: inline-block;
  margin-bottom: 1em;
}
.notes, .divider {
  display: inline-block;
}
</style>
