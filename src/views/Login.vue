<template>
  <div class="h-screen flex justify-center items-center">
    <div>
      <div class="flex justify-center">
        <img src="../assets/icons/lock.png" width="40" />
      </div>
      <div><p class="text-xs p-2 text-center font-medium">Secure Login</p></div>
      <form
        @submit.prevent="handleSignIn"
        class="min-w-[330px] max-w-[400px] text-sm md:text-base p-4 md:p-8 gray-border">
        <div class="">
          <h2 class="text-center blue-text font-medium text-2xl">Welcome</h2>
          <p class="text-sm mb-4">Login with the ID provided by your school.</p>
        </div>
        <div>
          <div class="py-1">
            <input
              type="password"
              id="password"
              class="form-input"
              placeholder="Enter your ID here"
              required />
          </div>
          <div class="pt-5">
            <div v-if="loading" class="flex justify-center">
              <fwb-spinner color="blue" size="5" />
            </div>
            <button
              v-else
              class="p-2 blue-button w-full flex gap-2 justify-center items-center"
              :disabled="loading">
              <p class="font-semibold uppercase">Sign In</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { FwbSpinner } from "flowbite-vue";
import { useAuthStore } from "@/stores/auth";
import router from "@/router";

const loading = ref(false);
const authStore = useAuthStore();

const handleSignIn = async () => {
  loading.value = true;

  setTimeout(() => {
    authStore.isAuthenticated = true;
    loading.value = false;
    router.push("/");
  }, 2000);
};

onBeforeMount(() => {
  authStore.isAuthenticated = false;
});
</script>
