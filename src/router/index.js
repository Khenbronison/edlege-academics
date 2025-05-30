import { useAuthStore } from "@/stores/auth";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/classwork",
      name: "classwork",
      component: () => import("../views/ClassWork.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/homework",
      name: "homework",
      component: () => import("../views/Homework.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/classtest",
      name: "classtest",
      component: () => import("../views/ClassTest.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/lessons",
      name: "lessons",
      component: () => import("../views/LessonsView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/progress",
      name: "progress",
      component: () => import("../views/Progress.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/subjecttasks",
      name: "subjecttasks",
      component: () => import("../views/Task.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/task/:type",
      name: "task",
      component: () => import("../components/tasks/Task.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
  window.scrollTo(0, 0);
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) return "/";
});

export default router;
