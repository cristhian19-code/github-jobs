<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

import { convertDate } from "../helpers/format";
import { useJob } from "../composables/useJob";

const { params } = useRoute();
const router = useRouter();
const { getJobById, job } = useJob();

const goToHome = () => {
  router.push({ name: "HomePage" });
};

if (params.id) {
  getJobById(params.id as string);
} else {
  goToHome();
}
</script>

<template>
  <div class="grid grid-cols-6 gap-3 container-job">
    <div class="col-span-6 md:col-span-2">
      <button
        @click="goToHome"
        class="text-blue-400 font-medium flex gap-2 text-md mb-5"
      >
        <i class="ri-arrow-left-line"></i>
        <span>Back to search</span>
      </button>

      <p class="text-md font-bold text-gray-300 mb-4">HOW TO APPLY</p>
      <p v-html="job?.how_to_apply" class="font-semibold"></p>
    </div>

    <div class="col-span-6 md:col-span-4 text-sky-900">
      <div class="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center">
        <h1
          class="max-w-[500px] text-2xl font-bold mb-2 md:text-elipsis md:truncate hover:underline cursor-pointer"
        >
          {{ job?.title }}
        </h1>

        <div
          class="px-2 py-1 font-bold text-sm rounded-md border border-blue-950 mb-2 w-fit"
        >
          {{ job?.type }}
        </div>
      </div>

      <div
        class="flex items-center gap-2 text-gray-300 font-bold text-sm mb-10"
      >
        <i class="ri-time-line text-lg"></i>
        <p>{{ convertDate(job?.created_at) }} days ago</p>
      </div>

      <div class="flex gap-3">
        <div>
          <img
            class="w-[60px] h-[60px] rounded-lg"
            src="https://kasisto.com/wp-content/uploads/2014/06/kas-card-k-2.jpg"
          />
        </div>

        <div>
          <span class="font-bold text-lg">{{ job?.company }}</span>
          <div
            class="flex items-center gap-2 text-gray-300 font-semibold text-sm"
          >
            <i class="ri-earth-line text-lg"></i>
            <p>
              {{ job?.location }}
            </p>
          </div>
        </div>
      </div>
      <p class="mt-7" v-html="job?.description"></p>
    </div>
  </div>
</template>

<style>
.container-job a {
  color: #1e86ff;
  word-wrap: break-word;
}

.container {
  color: #334680;
}
</style>