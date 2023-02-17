import { createRouter, createWebHashHistory } from "vue-router";
import NPFPage from "../modules/shared/pages/NoPageFound.vue";

const routes = [
  {
    path: "/",
    redirect: "{name: 'pokemon'}",
  },
  {
    path: "/pokemon",
    name:'pokemon',
    component: () => import("../modules/pokemon/layouts/PokemonLayout.vue"),
    children: [
      {
        path: "",
        name: "pokemon-home",
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ "../modules/pokemon/pages/ListPage.vue"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ "../modules/pokemon/pages/AboutPage.vue"
          ),
      },
      {
        path: ":id",
        name: "pokemon-id",
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */ "../modules/pokemon/pages/PokemonPage.vue"
          ),
      },
    ],
  },

  { path: "/:pathMatch(.*)*", component: NPFPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
