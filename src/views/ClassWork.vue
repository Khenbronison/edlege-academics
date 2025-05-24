<script setup>
import NavBar from "@/components/navigation/Navbar.vue";
import Subjects from "@/components/classwork/Subjects.vue";
import Lessons from "@/components/classwork/LessonsForm.vue";
import LessonsForm from "@/components/classwork/LessonsForm.vue";
</script>

<template>
  <div class="ml-5 p-2 w-1/3">
    <h1 class="blue-text text-lg p-4">Class Work</h1>
  </div>
  <Subjects />
  <LessonsForm />
</template>

<style></style>
