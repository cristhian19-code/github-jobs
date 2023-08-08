<script setup lang="ts">
import { PropType } from "vue";
import { useRouter } from "vue-router";
import { Job } from "../interfaces/index";

const props = defineProps({
  job: {
    type: Object as PropType<Job>,
  },
});

const router = useRouter();

const goToJob = () => {
  if (!props.job) return;

  router.push({ name: "JobPage", params: { id: props.job?.id } });
};

const convertDate = (date: any) => {
  const fechaActual: any = new Date();

  // Supongamos que tienes una fecha específica en el formato YYYY-MM-DD
  const fechaEspecifica: any = new Date(date);

  // Calcular la diferencia en milisegundos
  const diferenciaEnMilisegundos = fechaActual - fechaEspecifica;

  // Convertir la diferencia de milisegundos a días
  const unDiaEnMilisegundos = 1000 * 60 * 60 * 24;
  return Math.floor(diferenciaEnMilisegundos / unDiaEnMilisegundos);
};
</script>
<template>
  <div
    class="flex gap-4 h-fit p-3"
    style="box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1)"
  >
    <img
      class="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-xl"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
    />

    <div class="py-0">
      <span class="font-bold text-sm md:text-md">{{ job?.company }}</span>
      <h2
        @click="goToJob"
        class="text-md w-[200px] md:text-2xl font-medium mb-2 md:w-[500px] text-elipsis truncate hover:underline cursor-pointer"
      >
        {{ job?.title }}
      </h2>
      <div class="flex flex-col items-start md:flex-row w-full">
        <div
          class="px-2 py-1 font-bold text-sm rounded-md border border-blue-950 mb-2"
        >
          {{ job?.type }}
        </div>

        <div
          class="text-gray-400 text-xs md:text-sm flex md:ml-auto gap-4 justify-between w-full md:w-fit"
        >
          <div class="flex items-center gap-2">
            <i class="ri-earth-line text-lg md:text-xl"></i>
            <p class="max-w-[100px] md:max-w-[300px] truncate text-ellipsis">
              {{ job?.location }}
            </p>
          </div>

          <div class="flex items-center gap-2">
            <i class="ri-time-line text-lg md:text-xl"></i>
            <p>{{ convertDate(job?.created_at) }} days ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>