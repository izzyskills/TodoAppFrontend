<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const categories = ref(store.state.categories);

onMounted(async () => {
  if (store.state.isAuthenticated && categories.value.length < 1) {
    await store.dispatch("fetchCategories");
    categories.value = store.state.categories;
  }
});
</script>
<template>
  <nav>
    <template v-if="store.state.isAuthenticated">
      <div class="defaults">
        <router-link to="/tasks/inbox">
          <div class="default-items">
            <i></i>
            <h3>Inbox</h3>
          </div>
        </router-link>
        <router-link to="/tasks/today">
          <div class="default-items">
            <i></i>
            <h3>Today</h3>
          </div></router-link
        >
      </div>
      <div class="categories">
        <h2>Projects</h2>
        <ul>
          <li v-for="project in categories" :key="project">
            <router-link :to="`/tasks/category/${project.name}`">
              <div class="categories-items">
                <h3>{{ project.name }}<span></span></h3>
                <i></i>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <div>
        <div>
          <router-link to="/login">Login</router-link>
        </div>
        <div>
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </template>
  </nav>
</template>

<style scoped>
nav {
  background-color: #282828;
  display: flex;
  flex-direction: column;
  padding: 5px;
}
.defaults {
  margin: 10px 2px 30px;
  padding-left: 10px;
}
span {
  color: rgba(140, 140, 140, 0.817);
  padding: 10px;
  font-size: 0.75em;
}
a {
  all: unset;
  cursor: pointer;
}
</style>
