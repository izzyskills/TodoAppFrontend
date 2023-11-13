<script setup>
import Nav from "./components/nav.vue";
import { RouterView } from "vue-router";
import axios from "axios";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
const store = useStore();
onBeforeMount(() => {
  const token = store.state.token;
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
});
</script>
<template>
  <div class="container">
    <Nav class="nav-container" />
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100vh;
}
.nav-container {
  grid-column: 1fr;
}
.main {
  grid-column: 5fr;
  padding: 20px;
}
</style>
