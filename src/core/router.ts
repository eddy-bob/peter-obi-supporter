import { createWebHistory, createRouter } from "vue-router";

// layout


const Home = () => import("../pages/home.vue");
const NotFoundPage = () => import("../pages/Not-Found.vue");
// import store
// import store from "./store/index.js";

const routes = [
  {
    path: "/",
    name: "page.home",
    component: Home,
  },
  {
    path: "/home",
    name: "page.landing",
    component: Home,
  },


  //add sellers routes below-------
  {
    path: "/:catchAll(.*)",
    component: NotFoundPage,
  },

];

const history = createWebHistory();

// create router instance
const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
