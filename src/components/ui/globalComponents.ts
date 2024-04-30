import type { App } from "vue";
import { Button } from "./button";
import { Icon } from "./icon";

export const registerComponents = (app: App) => {
  app.component("PBtn", Button);
  app.component("PIcon", Icon);
};
