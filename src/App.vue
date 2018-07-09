<template>
  <div id="app">
    <router-view/>
    <modal-stack :stack="$store.state.modals.stack" />
  </div>
</template>

<script>
import * as components from 'src/components'

export default {
  name: 'app',
  components: {
    ...components,
  },
}
</script>

<style>
  #app {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
