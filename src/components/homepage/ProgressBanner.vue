<script setup>
import { ChevronRight, CircleDot, ListCollapse } from "lucide-vue-next";
</script>

<template>
  <div
    class="flex flex-col md:flex-row md:justify-between md:items-center py-4 md:py-6">
    <div class="mb-6 md:mb-0">
      <h1 class="blue-text text-3xl font-medium mb-2">Hi, Bernard Matic</h1>
      <div class="flex gap-2">
        <span class="text-2xl">❝</span>
        <p class="text-xl md:text-2xl font-medium">
          Knowledge is love, light, and vision.
          <span class="text-2xl">❞</span>
        </p>
      </div>
      <p class="text-gray-600 font-medium">- Helen Keller</p>
    </div>

    <div class="border-2 border-gray-400 rounded-md">
      <div class="flex md:justify-between bg-white rounded-t-md">
        <div
          class="border-r-2 border-gray-400 px-4 py-2 flex flex-col justify-between items-center">
          <h3 class="font-bold">Streak</h3>
          <div>
            <div class="flex items-center gap-1">
              <CircleDot size="15" color="red" />
              <p class="text-2xl font-bold">1</p>
            </div>
            <p class="text-gray-600 font-medium">Day</p>
          </div>
        </div>

        <div class="px-4 py-2 flex flex-col justify-between w-full">
          <h3 class="text-center font-bold">Weekly Progress</h3>
          <div class="grid grid-cols-3 gap-1">
            <div class="text-center">
              <h1 class="font-bold text-2xl">500</h1>
              <p class="text-gray-600 font-medium">Score</p>
            </div>

            <div class="text-center">
              <h1 class="font-bold text-2xl">260</h1>
              <p class="text-gray-600 font-medium">Minutes</p>
            </div>

            <div class="text-center">
              <h1 class="font-bold text-2xl">12</h1>
              <p class="text-gray-600 font-medium">Lessons Done</p>
            </div>
          </div>
        </div>
      </div>
      <div
        @click="$router.push('/progress')"
        class="flex justify-between items-center blue-bg hover:bg-blue-600 cursor-pointer p-2 rounded-b-md">
        <div class="px-4"></div>
        <h1 class="font-medium tracking-wider text-white">MY PROGRESS</h1>
        <ChevronRight size="20" color="white" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
