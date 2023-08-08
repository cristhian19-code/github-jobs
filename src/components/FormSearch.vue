<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["search"]);
const input = ref<HTMLInputElement | null>(null);
const onSearch = () => {
  if (!input.value) return;

  emit("search", input.value.value);
  input.value.value = "";
};
</script>

<template>
  <div class="w-full md:w-2/3 flex items-center gap-2 bg-white py-1 pl-5 pr-1 rounded-lg">
    <i class="ri-suitcase-line text-gray-400 text-xl"></i>
    <input
      type="text"
      ref="input"
      placeholder="Title, companies, expertise or benefits"
      class="outline-none w-full pl-2 pr-4 border-none"
    />
    <button class="btn btn-primary px-7 md:px-14" @click="onSearch">Search</button>
  </div>
</template>