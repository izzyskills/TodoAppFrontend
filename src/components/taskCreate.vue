<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const categories = computed(() => store.getters.categoriesList);
const form = ref({
  name: "",
  description: "",
  dueDate: "",
  recurrence: "",
  category: "",
}); // Reference the form for resetting
const resetForm = () => {
  form.value.name = "";
  form.value.description = "";
  form.value.dueDate = "";
  form.value.recurrence = "";
  form.value.category = "";
};
const submitForm = async () => {
  try {
    const formData = {
      name: form.value.name,
      description: form.value.description,
      date: form.value.dueDate || null,
      recurrence: form.value.recurrence || 0,
      category: form.value.category || null,
    };

    await store.dispatch("createTask", formData);
    resetForm();
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="task-create">
    <form @submit.prevent="submitForm" method="post">
      <input
        id="taskName"
        type="text"
        placeholder="Task name"
        v-model="form.name"
      />
      <div>
        <input
          id="description"
          type="text"
          placeholder="Description"
          v-model="form.description"
        />
      </div>
      <div class="info">
        <input
          type="date"
          name=""
          id="Date"
          placeholder="Due Date"
          v-model="form.dueDate"
        />
        <select id="recurrence" placeholder="Repeat" v-model="form.recurrence">
          <option value="0">None</option>
          <option value="1">Daily</option>
          <option value="2">Weekly</option>
          <option value="3">Monthly</option>
        </select>
        <select id="Category" placeholder="Category" v-model="form.category">
          <option value="">None</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="submittask">
        <button type="reset">
          <img class="cancel" src="../components/icons/cancel.svg" alt="" />
        </button>
        <button type="submit">
          <img class="send" src="../components/icons/send.svg" alt="" />
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.task-create {
  background-color: #282828;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.info {
  margin-top: 4px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
}
.submittask {
  display: flex;
  justify-content: flex-end;
}
.submittask button {
  margin: 5px;
  all: unset;
  height: 40px;
  width: 40px;
  cursor: pointer;
}
input {
  background-color: #181818;
  color: #757575;
  border: none;
  width: 80%;
  border-radius: 5px;
}
input[type="date"] {
  background-color: #181818;
  color: #757575;
  width: auto;
  border: none;
  outline: none;
  border-radius: 5px;
}
::-webkit-calendar-picker-indicator {
  background-color: #757575;
  cursor: pointer;
  border-radius: 3px;
}
select {
  background-color: #181818;
  border: none;
  color: #757575;
  border-radius: 5px;
}
img {
  height: 80%;
  width: 80%;
  border-radius: 5px;
  fill: white;
}
.send {
  background-color: #f5f5f5;
}
.cancel {
  background-color: rgba(171, 44, 44, 0.897);
  padding: 2px;
}
</style>
