import "./assets/main.css";
import "material-symbols";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { registerComponents } from "./components/ui/globalComponents";
import { createI18n } from "vue-i18n";
import messages from "./translates/messages";

const app = createApp(App);
const i18n = createI18n({
  locale: "es",
  messages
});

app.use(createPinia());
app.use(router);
app.use(i18n);
registerComponents(app);
app.mount("#app");
