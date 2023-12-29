<script setup>
import task from "../components/task.vue";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import axios from "axios";
const tasks = ref([]);
const formattedDate = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const store = useStore();
const getTasks = async () => {
  await axios
    .get("/tasks/")
    .then((response) => {
      tasks.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
onMounted(() => {
  if (store.state.isAuthenticated) {
    getTasks();
  }
});
</script>
<template>
  <div>
    <h1>
      Today <span>{{ formattedDate }}</span>
    </h1>
    <task :tasks="tasks" />
  </div>
</template>
