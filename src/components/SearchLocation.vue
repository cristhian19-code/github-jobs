<script setup lang="ts">
import { useVModel } from "../composables/useVModel";

interface Props {
  modelValue: string;
}

const props = defineProps<Props>();

const model = useVModel(props);
</script>

<template>
  <p class="mt-7 font-bold text-gray-400/80">LOCATION</p>

  <div class="flex items-center relative my-4">
    <input
      type="text"
      placeholder="City"
      v-model="model"
      class="outline-none w-full border-none pl-12 pr-6 py-4"
      style="box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1)"
    />

    <i class="absolute left-3 ri-earth-line text-xl text-gray-400"></i>
  </div>
</template>