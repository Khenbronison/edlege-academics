<template>
  <div>
    <div class="flex justify-end">
      <div class="flex flex-col items-center gap-3">
        <p class="text-2xl blue-text font-semibold">Weekly Star</p>
        <div>
          <img src="../assets/icons/medal(3).png" alt="" width="70" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div class="mb-8">
          <p class="text-xl blue-text font-bold mb-2">MY WEEKLY STATS</p>
          <div class="grid grid-cols-3 gap-4">
            <div
              class="bg-white p-4 flex flex-col items-center justify-center gap-2 border-2 border-gray-400 rounded-md">
              <p class="font-semibold">STREAKS</p>
              <div class="flex items-center gap-1">
                <CircleDot color="red" size="20" />
                <p class="text-2xl font-bold">4</p>
              </div>
            </div>
            <div
              class="bg-white p-4 flex flex-col items-center justify-center gap-2 border-2 border-gray-400 rounded-md">
              <p class="font-semibold">POINTS</p>
              <div class="flex items-center gap-1">
                <Star color="red" size="20" />
                <p class="text-2xl font-bold">3000</p>
              </div>
            </div>
            <div
              class="bg-white p-4 flex flex-col items-center justify-center gap-2 border-2 border-gray-400 rounded-md">
              <p class="font-semibold">STREAKS</p>
              <div class="flex items-center gap-1">
                <Sheet color="red" size="20" />
                <p class="text-2xl font-bold">4</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-8">
          <p class="text-xl blue-text font-bold mb-2">MY PEFORMANCE</p>
          <div class="grid grid-cols-3 gap-4">
            <div
              class="bg-white p-4 text-center border-2 border-gray-400 rounded-md">
              <p class="font-semibold mb-2">CORRECT ATTEMPTS</p>
              <p class="text-2xl font-bold">4</p>
            </div>
            <div
              class="bg-white p-4 text-center border-2 border-gray-400 rounded-md">
              <p class="font-semibold mb-2">WRONG ATTEMPTS</p>
              <p class="text-2xl font-bold">50</p>
            </div>
            <div
              class="bg-white p-4 text-center border-2 border-gray-400 rounded-md">
              <p class="font-semibold mb-2">PERFORMANCE INDICATOR</p>
              <p class="text-2xl font-bold">
                7.3
                <span>/10</span>
              </p>
            </div>
          </div>
        </div>
        <div class="mb-8">
          <p class="text-xl blue-text font-bold mb-2">SUBJECT PEFORMANCE</p>
          <div class="bg-white p-4 border-2 border-gray-400 rounded-md">
            <table class="w-full">
              <thead>
                <tr class="blue-text">
                  <th class="text-left">SUBJECT NAME</th>
                  <th class="text-center">ATTEMPTS</th>
                  <th class="text-center">CORRECT ATTEMPTS</th>
                  <th class="text-center">PI</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b-2" v-for="item in dummy">
                  <td class="text-left">Mathematics</td>
                  <td class="text-center">250</td>
                  <td class="text-center">100</td>
                  <td class="text-center">2.2/15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="md:py-9">
        <div class="bg-white border-2 border-gray-400 p-4">
          <div class="grid grid-cols-3 mb-4">
            <div class="flex flex-col items-center">
              <p class="blue-text text-lg font-semibold">2nd</p>
              <p class="font-medium">Grace</p>
              <div>
                <img src="../assets/images/yoboy.png" width="50" alt="" />
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div>
                <img src="../assets/images/yoboy.png" width="50" alt="" />
              </div>
              <p class="blue-text text-lg font-semibold">1st</p>
              <p class="font-medium">Bernard</p>
            </div>
            <div class="flex flex-col items-center">
              <p class="blue-text text-lg font-semibold">3rd</p>
              <p class="font-medium">Phiphas</p>
              <div>
                <img src="../assets/images/yoboy.png" width="50" alt="" />
              </div>
            </div>
          </div>
          <div>
            <p class="blue-text font-medium text-base mb-3">Ranking</p>
            <div>
              <table class="w-full">
                <tbody>
                  <tr class="border-b-2" v-for="item in dummy">
                    <td class="text-left">
                      <div class="flex items-center gap-2">
                        <img
                          src="../assets/images/yoboy.png"
                          width="30"
                          alt="" />
                        <p>Bernard Lomo</p>
                      </div>
                    </td>
                    <td class="text-center">
                      <div class="flex items-center gap-1">
                        <CircleDot color="red" size="12" />
                        <p>4</p>
                      </div>
                    </td>
                    <td class="text-center">3000 pts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CircleDot, Sheet, Star } from "lucide-vue-next";
const dummy = [1, 2, 3, 4, 5, 6, 0, 0, 0, 0];
</script>

<style scoped>
td {
  @apply py-2;
}
</style>
