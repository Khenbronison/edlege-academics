<template>
  <div class="flex items-end gap-2 mb-8">
    <Blocks color="blue" size="40" />
    <h1 class="blue-text text-xl font-medium">Home Work</h1>
    <h1 class="blue-text text-2xl font-semibold">Mathematics</h1>
  </div>
  <div class="w-full md:w-[70%] mb-8">
    <TaskList />
  </div>
</template>

<script setup>
import TaskList from "@/components/tasks/TaskList.vue";
import { Blocks } from "lucide-vue-next";
</script>

<style lang="scss" scoped></style>
