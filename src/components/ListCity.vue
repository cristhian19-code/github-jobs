<script setup lang="ts">
import { computed, ref } from "vue";

// contants
const cities = [
  "London",
  "Amsterdam",
  "New York",
  "Berlin",
  "San Francisco",
  "Tokyo",
];

// interfaces

interface Props {
  city: string;
}

interface Emit {
  (event: "selected", city: string): void;
}

// definitions
const cityAux = ref<string>("");

const props = defineProps<Props>();

const emit = defineEmits<Emit>();

const filterListCities = computed(() => {
  return cities.filter((city) =>
    city.toLowerCase().includes(props.city.toLowerCase())
  );
});

// methods
const onSelected = (e: any) => {
  if (e === cityAux.value) {
    cityAux.value = "";
    emit("selected", "");
    return;
  }

  cityAux.value = e;
  emit("selected", e);
};
</script>

<template>
  <ul>
    <li v-for="city in filterListCities" :key="city">
      <div class="form-control">
        <label class="label cursor-pointer w-fit gap-4">
          <input
            @click="onSelected(city)"
            type="radio"
            :checked="city === cityAux"
            name="city"
            class="radio radio-primary radio-sm"
          />
          <span class="label-text font-medium text-lg text-blue-950">{{
            city
          }}</span>
        </label>
      </div>
    </li>
  </ul>
</template>