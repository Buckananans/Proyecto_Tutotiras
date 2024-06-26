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
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./dropdown-menu";
import DropdownMenuContent from "./dropdown-menu/DropdownMenuContent.vue";
import { Calendar } from "./calendar";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "./dialog";

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
  app.component("PDropdownMenu", DropdownMenu);
  app.component("PDropdownMenuTrigger", DropdownMenuTrigger);
  app.component("PDropdownMenuItem", DropdownMenuItem);
  app.component("PDropdownMenuContent", DropdownMenuContent);
  app.component("PCalendar", Calendar);
  app.component("PDialog", Dialog);
  app.component("PDialogContent", DialogContent);
  app.component("PDialogFooter", DialogFooter);
  app.component("PDialogHeader", DialogHeader);
  app.component("PDialogTitle", DialogTitle);
};
