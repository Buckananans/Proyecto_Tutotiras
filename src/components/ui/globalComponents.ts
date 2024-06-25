import type { App } from "vue";
import { Button } from "./button";
import { Icon } from "./icon";
import { Input } from "./input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./form";

export const registerComponents = (app: App) => {
  app.component("PBtn", Button);
  app.component("PIcon", Icon);
  app.component("PInput", Input);
  app.component("PFormField", FormField);
  app.component("PFormLabel", FormLabel);
  app.component("PFormControl", FormControl);
  app.component("PFormMessage", FormMessage);
  app.component("PFormDescription", FormDescription);
  app.component("PFormItem", FormItem);
};
