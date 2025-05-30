<script setup>
import { CircleDot, ListCollapse, Settings } from "lucide-vue-next";
import { Wrench } from "lucide-vue-next";
import ProgressBanner from "@/components/homepage/ProgressBanner.vue";
import Subjects from "@/components/global/Subjects.vue";
const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
</script>

<template>
  <ProgressBanner />
  <div class="w-full md:w-[75%] lg-[w-70%] xl:w-[60%] mb-8">
    <p class="mb-4 text-gray-500 font-semibold text-xl">Today</p>
    <div class="flex gap-4 flex-wrap mb-6">
      <div class="blue-bg blue-pill">Class work</div>
      <div class="blue-bg blue-pill">Class Test</div>
      <div class="blue-bg blue-pill">Home Work</div>
      <div class="blue-bg blue-pill">Lessons</div>
    </div>

    <div
      class="flex gap-4 justify-between text-center bg-white overflow-x-auto p-4 border-2 border-gray-400 rounded-md">
      <div v-for="item in dummyArray">
        <Subjects />
      </div>
    </div>
  </div>

  <div class="mb-8">
    <p class="mb-4 text-gray-500 font-semibold text-xl">Tasks</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-16">
      <div class="task-card" @click="$router.push('/classwork')">
        <div>
          <img src="../assets/icons/gentest.png" width="40" alt="" />
        </div>
        <p class="blue-text font-medium text-lg">Class Work</p>
      </div>

      <div class="task-card" @click="$router.push('/homework')">
        <div>
          <img src="../assets/icons/gentest.png" width="40" alt="" />
        </div>
        <p class="blue-text font-medium text-lg">Home Work</p>
      </div>

      <div class="task-card" @click="$router.push('/classtest')">
        <div>
          <img src="../assets/icons/gentest.png" width="40" alt="" />
        </div>
        <p class="blue-text font-medium text-lg">Class Test</p>
      </div>

      <div class="task-card" @click="$router.push('/lessons')">
        <div>
          <img src="../assets/icons/gentest.png" width="40" alt="" />
        </div>
        <p class="blue-text font-medium text-lg">Lessons</p>
      </div>
    </div>
  </div>

  <div class="flex justify-between">
    <Wrench class="cursor-pointer" color="blue" size="30" />
    <Settings class="cursor-pointer" color="orange" size="30" />
  </div>
</template>

<style scoped>
.blue-pill {
  @apply rounded-full text-white px-6 py-2 hover:bg-blue-600 transition ease-out duration-300 font-medium cursor-pointer;
}
.task-card {
  @apply flex flex-col gap-2 justify-center items-center bg-white border-2 border-[#0053D3] rounded-lg cursor-pointer py-6;
}
</style>
