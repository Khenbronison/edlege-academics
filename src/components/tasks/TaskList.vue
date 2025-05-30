<template>
  <div class="">
    <div class="">
      <div class="flex items-center mb-4">
        <button
          @click="setActiveTab('today')"
          :class="getTabClass('today')"
          class="whitespace-nowrap">
          Today
        </button>
        <button
          @click="setActiveTab('thisWeek')"
          :class="getTabClass('thisWeek')"
          class="whitespace-nowrap">
          This Week
        </button>
        <div class="relative">
          <button
            @click="toggleMonthDropdown"
            :class="getTabClass('month')"
            class="whitespace-nowrap flex items-center">
            {{ monthName }}
            <ChevronDown
              class="w-4 h-4 ml-1.5 text-gray-500"
              :class="{ 'text-blue-600': activeTab === 'month' }" />
          </button>
          <div
            v-if="monthDropdownOpen"
            class="absolute mt-1 left-0 w-36 bg-white rounded-md shadow-lg border border-gray-200 z-10">
            <a
              href="#"
              @click.prevent="selectMonth('May')"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              May
            </a>
            <a
              href="#"
              @click.prevent="selectMonth('June')"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              June
            </a>
            <a
              href="#"
              @click.prevent="selectMonth('July')"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              July
            </a>
          </div>
        </div>
      </div>

      <div class="bg-white border-2 border-gray-400 rounded-md p-4">
        <div v-if="tasks.length > 0">
          <div v-for="(task, index) in tasks" :key="task.id">
            <LessonsForm />
          </div>
        </div>
        <div v-else class="p-10 text-center text-gray-500">
          No tasks for this period.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FileText, ChevronDown } from "lucide-vue-next";
import LessonsForm from "../global/LessonsForm.vue";
import { computed, ref } from "vue";

const activeTab = ref("today"); // 'today', 'thisWeek', 'month'
const monthDropdownOpen = ref(false);
const monthName = ref("May"); // To display on the month tab/button
const tasks = ref([
  {
    id: 1,
    title: "Lesson: Halves",
    strand: "Strand: Fractions",
  },
  {
    id: 2,
    title: "Lesson: Halves",
    strand: "Strand: Fractions",
  },
  {
    id: 3,
    title: "Lesson: Halves",
    strand: "Strand: Fractions",
  },
  {
    id: 4,
    title: "Lesson: Halves",
    strand: "Strand: Fractions",
  },
]);

const currentTasks = computed(() => {
  if (this.activeTab === "month")
    return this.tasksByPeriod[this.monthName] || [];
  return this.tasksByPeriod[this.activeTab] || [];
});

function setActiveTab(tabName) {
  activeTab.value = tabName;
  monthDropdownOpen.value = false; // Close dropdown if another tab is clicked
  // Here you would typically fetch/filter tasks for the selected tab
}

function getTabClass(tabName) {
  const baseClasses =
    "py-3 px-3 sm:px-4 text-base font-medium focus:outline-none transition-colors duration-150 ease-in-out";
  if (this.activeTab === tabName) {
    return `${baseClasses} text-blue-600 border-b-2 border-blue-600`;
  }
  return `${baseClasses} text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300`;
}

function toggleMonthDropdown() {
  monthDropdownOpen.value = !monthDropdownOpen.value;
  if (monthDropdownOpen.value) {
    activeTab.value = "month"; // Set month tab active when dropdown is opened
  }
}

function selectMonth(month) {
  monthName.value = month;
  activeTab.value = "month"; // Keep month tab active
  monthDropdownOpen.value = false; // Close dropdown
  // Here you would typically fetch tasks for the selected month
  console.log("Selected month:", month);
  // Example: this.tasks = this.tasksByPeriod[month] || [];
}
</script>

<style>
/* Tailwind's base, components, and utilities are typically imported globally in main.js or a CSS file */
/* No scoped styles needed here if using Tailwind exclusively */
</style>
