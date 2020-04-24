import Vue from "vue";
import Router from "vue-router";
import Base from "./Base";
import ModulesRouter from "../modules/main.router.js";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: Base,
      children: ModulesRouter
    }
  ]
});

export default router;
