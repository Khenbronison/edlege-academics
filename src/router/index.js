import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
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
    },
    {
      path: "/homework",
      name: "homework",
      component: () => import("../views/Homework.vue"),
    },
    {
      path: "/classtest",
      name: "classtest",
      component: () => import("../views/ClassTest.vue"),
    },
    {
      path: "/lessons",
      name: "lessons",
      component: () => import("../views/LessonsView.vue"),
    },
  ],
});

export default router;
