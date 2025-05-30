<template>
  <div
    class="flex justify-between items-center p-6 md:px-8 md:py-8 lg:w-[80%] lg:mx-auto">
    <div class="flex items-center gap-8">
      <img
        src="../../assets/icons/enterbluegrad.png"
        alt=""
        width="30"
        class="cursor-pointer"
        v-if="isRouteHome"
        @click="$router.push('/login')" />
      <div
        class="p-2 blue-bg rounded-full flex items-center justify-center"
        v-else
        @click="$router.go(-1)">
        <ChevronLeft
          color="white"
          size="20"
          stroke-width="4"
          class="cursor-pointer" />
      </div>
      <div
        class="md:flex gap-2 items-end hidden"
        v-if="$route.name === 'progress'">
        <img src="../../assets/icons/diagram.png" width="30" alt="" />
        <p class="blue-text font-bold text-xl">MY PROGRESS</p>
      </div>
    </div>
    <div class="flex items-center md:items-end gap-6" v-if="!isRouteTask">
      <div>
        <p class="font-semibold text-4xl text-gray-600">
          {{ time }}
          <span class="font-semibold text-sm">{{ meridiem }}</span>
        </p>
      </div>
      <div class="">
        <div class="rounded-full">
          <img src="../../assets/images/yoboy.png" width="40" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowBigLeft, ChartBar, ChevronLeft } from "lucide-vue-next";
import { computed, onMounted, ref, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const time = ref("");
const meridiem = ref("");

let intervalId;

const isRouteHome = computed(() => {
  return route.name === "home";
});

const isRouteTask = computed(() => {
  return route.name === "task";
});

const logout = ()=>{
  if(window.confirm("Logout")){
    
  }
}
const updateTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  meridiem.value = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  time.value = `${pad(hours)}:${pad(minutes)}`;
};

const pad = (num) => (num < 10 ? `0${num}` : num);

onMounted(() => {
  updateTime(); // Initial call
  intervalId = setInterval(updateTime, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style></style>
