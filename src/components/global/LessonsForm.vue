<script setup>
import router from "@/router";
import { Blocks, LucideBookOpenCheck } from "lucide-vue-next";

const openTask = () => {
  router.push({ name: "task", params: { type: "mathematics" } });
};
</script>

<template>
  <div class="flex justify-between items-center p-4 border-b border-gray-400">
    <div class="flex gap-3 items-center">
      <LucideBookOpenCheck size="40" color="brown" />
      <div>
        <h1 class="font-semibold">
          Lesson:
          <span class="font-normal">Halves</span>
        </h1>
        <h2 class="font-semibold">
          Strand:
          <span class="font-normal">Fractions</span>
        </h2>
      </div>
    </div>
    <div>
      <button class="px-6 py-2 blue-button font-medium" @click="openTask">
        START
      </button>
    </div>
  </div>
</template>
