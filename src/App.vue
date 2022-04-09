<template>
  <ErrorBoundary id="app">
    <router-view/>
  </ErrorBoundary>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
p {
  margin: 0;
}
#app {
  box-sizing: border-box;
  font-family: "Hiragino Kaku Gothic ProN","メイリオ", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
</style>
