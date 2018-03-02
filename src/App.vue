<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
  height: 100%;
}
body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
