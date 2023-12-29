<script setup>
import Task from "../components/task.vue";
import taskCreate from "../components/taskCreate.vue";
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
const tasks = computed(() => store.getters.taskList);
const actually_empty = ref(false);
const formattedDate = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const store = useStore();
onMounted(() => {
  if (store.state.isAuthenticated && !store.state.task_has_been_called) {
    store.dispatch("getTasks");
  }
});
</script>
<template>
  <div>
    <h1>
      Today <span>{{ formattedDate }}</span>
    </h1>
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
