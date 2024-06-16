import type { App } from "vue";
import { Button } from "./button";
import { Icon } from "./icon";
import { Input } from "./input";

export const registerComponents = (app: App) => {
  app.component("PBtn", Button);
  app.component("PIcon", Icon);
  app.component("PInput", Input);
};
