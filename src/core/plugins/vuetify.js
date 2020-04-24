import Vue from "vue";
import Vuetify, { VBtn, VCard } from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";

Vue.use(Vuetify, {
  components: {
    VBtn,
    VCard
  },
  directives: {
    Ripple
  }
});

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  }
});
