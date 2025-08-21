import { createRouter, createWebHistory } from "vue-router";
import ProductOverview from "./pages/ProductOverview.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import Basket from "./pages/Basket.vue";
import OrderSuccess from "./pages/OrderSuccess.vue";

const routes = [
  { path: "/", redirect: "/products" },
  { path: "/products", component: ProductOverview },
  { path: "/product/:id", component: ProductDetail, props: true },
  { path: "/basket", component: Basket },
  { path: "/success", name: "OrderSuccess", component: OrderSuccess },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
