<script setup>
import { Blocks } from "lucide-vue-next";
</script>

<template>
  <div class="blue-bg rounded-md flex flex-col gap-2 items-center p-4">
    <Blocks size="40" color="white" />
    <p class="text-white text-base font-medium">Mathematics</p>
    <button
      class="bg-white w-full rounded-md font-medium py-1"
      @click="$router.push('/subjecttasks')">
      Open
    </button>
  </div>
</template>

<style></style>
