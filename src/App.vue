<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/navigation/Navbar.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style scoped></style>
