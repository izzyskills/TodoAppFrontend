<script setup>
import Task from "../components/task.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch, computed, onMounted } from "vue";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter(); // Add for potential navigation
const store = useStore();

const category = ref(route.params.categoryName);
const tasks = ref([]);
const tasksRaw = computed(() => store.getters.taskList);
const categoryNamesMap = computed(() => store.getters.categoryNamesMap); // Include categoryNamesMap
console.log(tasksRaw.value);
console.log(categoryNamesMap.value);

watch(category, filterTasks); // Use direct function reference for clarity

function filterTasks() {
  tasks.value = tasksRaw.value.filter((task) => {
    return categoryNamesMap.value[task.category] === category.value;
  });
}

filterTasks(); // Initial filtering

onMounted(() => {
  if (store.state.isAuthenticated && !store.state.task_has_been_called) {
    store.dispatch("getTasks");
  }
});
</script>

<template>
  <div>
    <h1>{{ category }}</h1>
    <Task :tasks="tasks" />
    <div id="addTask">
      <img class="add" src="../components/icons/add.svg" alt="" />
      <p>add task</p>
    </div>
    <div>
      <taskCreate />
    </div>
  </div>
</template>
