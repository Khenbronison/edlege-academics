<template>
  <div
    class="min-h-[80vh] w-full flex flex-col justify-center items-center gap-8">
    <div class="flex items-center gap-4">
      <p class="uppercase text-5xl font-extrabold">Lesson</p>
      <img src="../../assets/icons/medal(3).png" alt="" width="70" />
    </div>
    <div>
      <div class="blue-bg px-6 py-1 rounded-full flex gap-2 items-center">
        <p class="text-white font-semibold text-base">50 Points</p>
        <Sparkle color="white" size="15" />
      </div>
    </div>
    <div>
      <img src="../../assets/images/lesson-image.svg" alt="" width="200" />
    </div>
    <div class="w-[70%] md:w-[60%] lg:w-[45%] mx-auto">
      <p class="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div>
      <div
        class="bg-emerald-500 hover:bg-emerald-600 duration-300 text-white font-bold text-base px-12 py-2 rounded-md cursor-pointer">
        START
      </div>
    </div>
  </div>
</template>

<script setup>
import { Sparkle } from "lucide-vue-next";
</script>

<style lang="scss" scoped></style>
