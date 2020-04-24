import Vue from "vue";
import App from "./App.vue";
import router from "./core/router";
import store from "./core/store";
import { i18n } from "./core/i18n";
import vuetify from "./core/plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
