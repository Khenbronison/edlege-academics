<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/navigation/Navbar.vue";
import { useAuthStore } from "./stores/auth";
import { computed, onMounted } from "vue";
import router from "./router";

const authStore = useAuthStore();

const isAuthenticated = computed(() => {
  return authStore.isAuthenticated;
});

onMounted(() => {
  if (!isAuthenticated.value) {
    router.push("/login");
  }
});
</script>

<template>
  <NavBar v-if="isAuthenticated" />
  <div class="p-6 md:px-12 lg:w-[80%] lg:mx-auto">
    <RouterView />
  </div>
</template>

<style scoped></style>
