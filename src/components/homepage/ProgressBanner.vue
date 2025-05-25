<script setup>
import { ListCollapse } from "lucide-vue-next";
</script>

<template>
  <div class="flex justify-between p-6">
    <div class="ml-4">
      <h1 class="blue-text text-2xl">Hi, Benard Matic</h1>
      <p class="text-2xl">"Knowledge is love,light, and Vision"</p>
      <p class="text-gray-400">-Helen Keller</p>
    </div>

    <div class="mr-5">
      <div class="flex justify-between border border-black">
        <div class="border-r border-black p-2 text-center">
          <h3 class="font-bold">Streak</h3>
          <div class="flex items-center gap-1">
            <ListCollapse />
            <p>1</p>
          </div>
          <p>Day</p>
        </div>

        <div class="p-1">
          <h3 class="text-center font-bold">Weekly Progress</h3>
          <div class="grid grid-cols-3">
            <div class="text-center">
              <h1 class="font-bold text-lg">500</h1>
              <p>Score</p>
            </div>

            <div class="text-center">
              <h1 class="font-bold text-lg">260</h1>
              <p class="text-sm">Minutes</p>
            </div>

            <div class="text-center">
              <h1 class="font-bold text-lg">12</h1>
              <p>Lessons Done</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between bg-blue-800 text-white">
        <div></div>
        <h1 class="font-bold p-2">MY PROGRESS</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </div>
  </div>
</template>
