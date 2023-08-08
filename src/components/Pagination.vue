<script setup lang="ts">
interface Props {
  page: number;
  limit: number;
}

const props = defineProps<Props>();
const emit = defineEmits(["setPage"]);

const setPage = (page: number) => {
  emit("setPage", page);
};
</script>

<template>
  <div class="flex gap-1 mt-2">
    <button
      :disabled="page === 1"
      @click="() => setPage(page - 1)"
      class="btn btn-sm md:btn-md"
    >
      <i class="ri-arrow-drop-left-line"></i>
    </button>

    <button
      v-for="i in limit"
      @click="() => setPage(i)"
      :key="i"
      class="hidden md:flex btn btn-sm md:btn-md"
      :class="i === page ? 'btn-primary' : 'btn-outline'"
    >
      {{ i }}
    </button>

    <button
      class="flex md:hidden btn btn-sm md:btn-md btn-primary"
    >
      {{ page }}
    </button>

    <button
      :disabled="page === limit"
      @click="() => setPage(page + 1)"
      class="btn btn-sm md:btn-md"
    >
      <i class="ri-arrow-drop-right-line"></i>
    </button>
  </div>
</template>