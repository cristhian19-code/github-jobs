import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('../pages/HomePage.vue')
    },
    {
        path: '/job/:id',
        name: 'JobPage',
        component: () => import('../pages/JobPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router