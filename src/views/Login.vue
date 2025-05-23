<template>
  <div class="h-screen bg-gray-100 flex justify-center items-center">
    <form
      class="p-4 border border-black shadow-md rounded-md flex flex-col w-full md:max-w-[300px]"
    >
      <h1 class="text-center">Edlege Login</h1>
      <div>
        <p class="text-center">Please enter your code here</p>
      </div>
      <div>
        <input type="text" class="w-full bg-transparent border border-black rounded-md p-1" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(false);
</script>
