<script setup lang="ts">
// components
import JobCard from "../components/JobCard.vue";
import ListCity from "../components/ListCity.vue";
import FormSearch from "../components/FormSearch.vue";
import SearchLocation from "../components/SearchLocation.vue";
import Pagination from "../components/Pagination.vue";

// composables
import { useJob } from "../composables/useJob";
import { ref } from "vue";

// variables
const { getJobsPerPage, getJobsByType, limit, page, setPage } = useJob();
const city = ref("");

const changeType = (e: any) => {
  getJobsByType(e.target.checked ? "Full Time" : "", ["type"]);
};

const onSearch = (value: string) => {
  getJobsByType(value || "", ["title", "company"]);
};

const onSelectedCity = (city: string) => {
  getJobsByType(city || "", ["location"]);
};
</script>

<template>
  <div
    class="hero rounded-xl overflow-hidden bg-cover"
    style="background-image: url(/backgroundImg.png)"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center w-full py-10">
      <form-search @search="onSearch" />
    </div>
  </div>

  <div class="grid grid-cols-6 gap-10 mt-5">
    <div class="col-span-6 md:col-span-2">
      <div class="form-control w-24">
        <label class="label cursor-pointer">
          <input
            @change="changeType"
            type="checkbox"
            class="checkbox checkbox-primary"
          />
          <span class="label-text">Full time</span>
        </label>
      </div>
      <search-location v-model="city" />

      <list-city :city="city" @selected="onSelectedCity" />
    </div>
    <div class="col-span-6 md:col-span-4 flex flex-col gap-4">
      <job-card v-for="job in getJobsPerPage" :job="job" :key="job.id" />

      <div class="flex justify-center">
        <pagination :page="page" :limit="limit" @setPage="setPage" />
      </div>
    </div>
  </div>
</template>