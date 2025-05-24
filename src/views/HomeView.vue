<script setup>
import NavBar from "@/components/navigation/Navbar.vue";
import { ListCollapse } from "lucide-vue-next";
import { Wrench } from "lucide-vue-next";
import ProgressBanner from "@/components/homepage/ProgressBanner.vue";
</script>

<template>
  <ProgressBanner />
  <div class="w-[50%] ml-4 px-6">
    <p class="mb-4 text-gray-500 font-bold">Today</p>
    <div class="flex justify-between">
      <button
        class="bg-blue-600 rounded-full text-white p-2 w-full text-center hover:bg-blue-800 transition ease-out duration-300 font-bold"
      >
        Class work
      </button>
      <button
        class="bg-blue-600 rounded-full text-white p-2 ml-2 w-full text-center hover:bg-blue-800 transition ease-out duration-300 font-bold"
      >
        Class Test
      </button>
      <button
        class="bg-blue-600 rounded-full text-white p-2 ml-2 w-full text-center hover:bg-blue-800 transition ease-out duration-300 font-bold"
      >
        Home Work
      </button>
      <button
        class="bg-blue-600 rounded-full text-white p-2 ml-2 w-full text-center hover:bg-blue-800 transition ease-out duration-300 font-bold"
      >
        Lessons
      </button>
    </div>

    <div
      class="flex justify-between text-center pt-2 pr-6 pb-2 pl-2 bg-white max-w-3xl mt-4 overflow-x-auto whitespace-nowrap"
    >
      <div
        class="w-1/3 h-40 m-2 p-2 bg-blue-600 rounded-lg flex justify-center items-end hover:bg-blue-700 duration-500"
      >
        <button class="bg-white rounded-lg w-full p-2 font-bold">Start</button>
      </div>
      <div
        class="w-1/3 h-40 m-2 p-2 bg-blue-600 rounded-lg flex justify-center items-end hover:bg-blue-700 duration-500"
      >
        <button class="bg-white rounded-lg w-full p-2 font-bold">Start</button>
      </div>
      <div
        class="w-1/3 h-40 m-2 p-2 bg-blue-600 rounded-lg flex justify-center items-end hover:bg-blue-700 duration-500"
      >
        <button class="bg-white rounded-lg w-full p-2 font-bold">Start</button>
      </div>
      <div
        class="w-1/3 h-40 m-2 p-2 bg-blue-600 rounded-lg flex justify-center items-end hover:bg-blue-700 duration-500"
      >
        <button class="bg-white rounded-lg w-full p-2 font-bold">Start</button>
      </div>
    </div>
  </div>

  <div class="mt-4 ml-4 px-6">
    <p class="mb-2 text-gray-500 font-bold">Tasks</p>
    <div class="w-[70%] grid grid-cols-4">
      <div
        class="flex flex-col justify-center items-center bg-white border-2 border-blue-600 rounded-lg text-center shadow-md w-2/3 h-24 tranform hover:scale-105 transition ease-out duration-300 cursor-pointer"
      >
        <ListCollapse />
        <p class="blue-text font-bold">Class Work</p>
      </div>

      <div
        class="flex flex-col justify-center items-center bg-white border-2 border-blue-600 rounded-lg text-center shadow-md w-2/3 h-24 tranform hover:scale-105 transition ease-out duration-300 cursor-pointer"
      >
        <ListCollapse />
        <p class="blue-text font-bold">Home Work</p>
      </div>

      <div
        class="flex flex-col justify-center items-center bg-white border-2 border-blue-600 rounded-lg text-center shadow-md w-2/3 h-24 tranform hover:scale-105 transition ease-out duration-300 cursor-pointer"
      >
        <ListCollapse />
        <p class="blue-text font-bold">Class Test</p>
      </div>

      <div
        class="flex flex-col justify-center items-center bg-white border-2 border-blue-600 rounded-lg text-center shadow-md w-2/3 h-24 tranform hover:scale-105 transition ease-out duration-300 cursor-pointer"
      >
        <ListCollapse />
        <p class="blue-text font-bold">Lessons</p>
      </div>
    </div>
  </div>

  <div class="flex justify-between m-7 p-4">
    <Wrench class="cursor-pointer transform hover:scale-125 transition ease-out duration-300" />
    <ListCollapse
      class="cursor-pointer transform hover:scale-125 transition ease-out duration-300"
    />
  </div>
</template>

<style></style>
