<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { PrimitiveProps } from "radix-vue";
import { Primitive } from "radix-vue";
import type { ButtonVariants } from ".";
import { buttonVariants } from ".";
import { cn } from "@/lib/utils";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button"
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <p-icon
      v-if="loading"
      name="progress_activity"
      class="animate-spin p-1"
    />
    <slot />
  </Primitive>
</template>
