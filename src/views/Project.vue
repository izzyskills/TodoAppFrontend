<script setup>
import Task from "../components/task.vue";
import taskCreate from "../components/taskCreate.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch, computed, onMounted } from "vue";
import { useStore } from "vuex";

const route = useRoute();

const store = useStore();

const category = computed(() => route.params.categoryName);
const tasks = ref([]);
const tasksRaw = computed(() => store.getters.taskList);
const categoryNamesMap = computed(() => store.getters.categoryNamesMap);
const filterTasks = () => {
  tasks.value = tasksRaw.value.filter((task) => {
    return categoryNamesMap.value[task.category] === category.value;
  });
};

watch(category, filterTasks);
filterTasks();

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
