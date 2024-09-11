import { createRouter, createWebHistory } from "vue-router";
import ElectricityPage from "../pages/ElectricityPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: ElectricityPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
