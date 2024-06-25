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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "./select";

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
  app.component("PSelect", Select);
  app.component("PSelectTrigger", SelectTrigger);
  app.component("PSelectValue", SelectValue);
  app.component("PSelectItem", SelectItem);
  app.component("PSelectContent", SelectContent);
  app.component("PSelectGroup", SelectGroup);
  app.component("PSelectLabel", SelectLabel);
};
