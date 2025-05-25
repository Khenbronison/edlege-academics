<script setup>
import { Blocks } from "lucide-vue-next";
</script>

<template>
  <div class="ml-6 p-1 w-[70%]">
    <div class="flex justify-between gap-2 pl-4 mb-4 w-full">
      <div class="blue-button w-40 h-28 flex flex-col items-center p-4">
        <Blocks />
        <p class="mt-2">Mathematics</p>
        <button class="bg-white text-black w-full rounded-md font-bold mt-2">Open</button>
      </div>

      <div class="blue-button w-40 h-28 flex flex-col items-center justify-center p-4">
        <Blocks />
        <p class="mt-2">English</p>
        <button class="bg-white text-black w-full rounded-md font-bold mt-2">Open</button>
      </div>

      <div class="blue-button w-40 h-28 flex flex-col items-center justify-center p-4">
        <Blocks />
        <p class="mt-2">Computing</p>
        <button class="bg-white text-black w-full rounded-md font-bold mt-2">Open</button>
      </div>

      <div class="blue-button w-40 h-28 flex flex-col items-center justify-center p-4">
        <Blocks />
        <p class="mt-2">Science</p>
        <button class="bg-white text-black w-full rounded-md font-bold mt-2">Open</button>
      </div>
    </div>
  </div>
</template>

<style></style>
