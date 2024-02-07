<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div class="app">
    <div class="header">
      <img src="https://docs.mod.io/images/logo.svg" alt="logo" width="80px" height="80px" />
    </div>
    <div>
      <RouterLink to="/" />
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 100vh;
}
form {
  padding: 20px;
  color: white;
}
label {
  color: white;
  display: flex;
  flex-direction: column;
}
button {
  background-color: #048383;
  color: white;
}
</style>
