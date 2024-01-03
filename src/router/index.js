import { createRouter, createWebHistory } from "vue-router";
import Today from "../views/Today.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Project from "../views/Project.vue";
import Inbox from "../views/Inbox.vue";
import Logout from "../views/Logout.vue";
import { useStore } from "vuex";
const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/tasks/today", component: Today, meta: { requiresAuth: true } },
    {
      path: "/tasks/category/:categoryName",
      component: Project,
      meta: { requiresAuth: true },
    },
    { path: "/tasks/inbox", component: Inbox, meta: { requiresAuth: true } },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/", redirect: "/register" },
    { path: "/logout", component: Logout },
    { path: "/:catchall(.*)*", redirect: "/login" },
  ],
});
routes.beforeEach((to, from, next) => {
  const store = useStore();
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.isAuthenticated
  ) {
    next("/login");
  } else {
    next();
  }
});

export default routes;
