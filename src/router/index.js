import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import InventoryView from "../views/InventoryView.vue";
import CustomerView from "../views/CustomerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/games",
      name: "game",
      component: GameView,
    },
    {
      path: "/inventories",
      name: "inventory",
      component: InventoryView,
    },
    {
      path: "/customers",
      name: "customer",
      component: CustomerView,
    },
    {
      path: "/customer/create",
      name: "create",
      component: () => import("../components/customer/Create.vue"),
    },
  ],
});

export default router;
