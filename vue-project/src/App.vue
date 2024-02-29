<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="app">
    <div class="header">
      <img src="https://docs.mod.io/images/logo.svg" alt="logo" width="80px" height="80px" />
    </div>
    <RouterLink to="/" />
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  background-color: black;
  flex-direction: column;
  width: 80vw;
  max-height: 100vh;
  padding: 20px;
  margin: 0 auto;
}
button {
  background-color: #048383;
  color: white;
}
</style>
