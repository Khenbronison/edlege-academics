<script setup>
import Subjects from "@/components/global/Subjects.vue";
import LessonsForm from "@/components/global/LessonsForm.vue";

const dummy = [1, 2, 3, 4];
</script>

<template>
  <div class="">
    <h1 class="blue-text text-xl py-4 font-medium">Lessons</h1>
  </div>
  <div class="w-full md:w-[70%] mb-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="item in dummy">
        <Subjects />
      </div>
    </div>
  </div>
  <div class="w-full md:w-[70%] mb-8">
    <h1 class="text-gray-500 font-medium text-lg mb-4">Today</h1>
    <div class="border-gray-400 border-2 p-4 bg-white rounded-md">
      <div v-for="item in dummy">
        <LessonsForm />
      </div>
    </div>
  </div>
</template>

<style></style>
