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
@import url('https://fonts.googleapis.com/css?family=Roboto');
html, body {
  height: 100%;
}
body {
  margin: 0;
  font-family: Roboto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
