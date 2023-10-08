<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import categories from "../data/projects.json";
const router = useRouter();
const projects = reactive(categories);

const selectProject = (project) => {
  router.push(`/tasks/category/${project.category}`);
};
</script>
<template>
  <nav>
    <div class="defaults">
      <router-link to="/tasks/inbox">
        <div class="default-items">
          <i></i>
          <h3>Inbox <span>10</span></h3>
        </div>
      </router-link>
      <router-link to="/tasks/today">
        <div class="default-items">
          <i></i>
          <h3>Today <span>10</span></h3>
        </div></router-link
      >
    </div>
    <div class="projects">
      {{ console.log(projects) }}
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.category">
          <router-link :to="`/tasks/category/${project.category}`">
            <div class="projects-items">
              <h3>
                {{ project.category }}<span>{{ project.counts }}</span>
              </h3>
              <i></i>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
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
