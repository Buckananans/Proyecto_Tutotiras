<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import type { IconVariants } from ".";
import { iconVariants } from ".";
interface Props {
  variant?: IconVariants["variant"];
  size?: IconVariants["size"];
  class?: HTMLAttributes["class"];
  name: string;
}

const props = defineProps<Props>();
</script>

<template>
  <span :class="cn(iconVariants({ variant, size }), props.class)"
    >{{ props.name }}
  </span>
</template>
