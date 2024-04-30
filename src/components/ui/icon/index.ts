import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
export { default as Icon } from "./IconVue.vue";

export const iconVariants = cva("", {
  variants: {
    variant: {
      default: "material-symbols-outlined", // This is the default value
      rounded: "material-symbols-rounded",
      sharp: "material-symbols-sharp"
    },
    size: {
      default: "text-base",
      xs: "text-xs",
      sm: "text-sm",
      lg: "text-lg",
      icon: "text-xl"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});

export type IconVariants = VariantProps<typeof iconVariants>;
