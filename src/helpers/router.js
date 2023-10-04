import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import NotFoundView from "../views/NotFoundView.vue"
import AboutView from "../views/AboutView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView
        }
    ]
})

export default router