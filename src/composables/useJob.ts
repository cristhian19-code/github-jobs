import { computed, ref } from 'vue';
import data from '../data/data.json'
import { Job } from '../interfaces';

type key = 'title' | 'company' | 'type' | 'location'

export const useJob = () => {
    const jobs = ref<Job[]>();
    const page = ref<number>(1);
    const job = ref<Job>();

    // methods
    const getInitJobs = () => {
        jobs.value = data as Job[];
    }

    const getJobsByType = (value: string, keys: key[]) => {
        page.value = 1;

        let items = [] as Job[];
        let objItems = {} as any;

        keys.forEach(key => {
            items = data.filter(job => job[key].toLowerCase().includes(value.toLowerCase())) as Job[];
            items.forEach(item => {
                objItems[item.id] = item;
            })
        })

        jobs.value = Object.values(objItems);
    }

    const getJobById = (id: string) => {
        job.value = data.find(job => job.id === id) as Job;
    }

    // computed

    const limit = computed(() => !jobs.value ? 0 : Math.ceil(jobs.value?.length / 5));

    const getJobsPerPage = computed(() => jobs.value?.slice((page.value - 1) * 5, page.value * 5));;

    const setPage = (current: number) => {
        page.value = current
    }

    // lifecicle:created
    getInitJobs();

    return {
        getJobsByType,
        getJobsPerPage,
        getJobById,

        job,

        // pagination
        limit,
        page,
        setPage
    }
}