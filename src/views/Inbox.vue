<script setup>
import Task from "../components/task.vue";
import taskCreate from "../components/taskCreate.vue";
import { ref, watch, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const tasksRaw = computed(() => store.getters.taskList);
const tasks = computed(() => {
  return tasksRaw.value.filter((task) => !task.date);
});

onMounted(() => {
  if (store.state.isAuthenticated && !store.state.task_has_been_called) {
    store.dispatch("getTasks");
  }
});
</script>

<template>
  <div>
    <h1>Inbox</h1>
    <Task :tasks="tasks" />
  </div>
  <div id="addTask">
    <img class="add" src="../components/icons/add.svg" alt="" />
    <p>add task</p>
  </div>
  <div>
    <taskCreate />
  </div>
</template>
