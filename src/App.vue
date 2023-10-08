<script setup>
import Nav from "./components/nav.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <div class="container">
    <Nav class="nav-container" />
    <RouterView class="main" />
  </div>
</template>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
}
.nav-container {
  grid-column: 1fr;
}
.main {
  grid-column: 2fr;
  padding: 20px;
}
</style>
