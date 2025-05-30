import { ref, computed } from "vue";
import { defineStore } from "pinia";

const initialState = {
  isAuthenticated: false,
};

export const useAuthStore = defineStore("auth", {
  state: () => ({ ...initialState }),
  mutations: {
    resetState() {
      Object.assign(this, initialState);
    },
  },
  actions: {
    resetState() {
      Object.assign(this, initialState);
    },
    async loginUser() {
      try {
        //run login function here
      } catch (error) {
        console.log("error");
        throw new Error(error);
      }
    },
  },
  persist: true,
});
