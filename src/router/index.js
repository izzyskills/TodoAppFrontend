import { createRouter, createWebHistory } from "vue-router";
import Today from "../views/Today.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Project from "../views/Project.vue";
import Inbox from "../views/Inbox.vue";
const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/tasks/today", component: Today },
    { path: "/", redirect: "/tasks/today" }, // Redirect root to today's tasks
    { path: "/tasks/category/:categoryName", component: Project },
    { path: "/tasks/inbox", component: Inbox },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/:catchall(.*)*", redirect: "/tasks/today" },
  ],
});

export default routes;
