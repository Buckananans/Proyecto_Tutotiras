<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { computed } from "vue";

const dark = useDark();
const toggleDark = useToggle(dark);
const themeModeButtonName = computed(() =>
  dark.value ? "light_mode" : "dark_mode"
);
</script>
<template>
  <header
    class="p-2 flex flex-row justify-between items-center rounded-b-lg border-2 bg-card text-card-foreground shadow-sm"
  >
  </header>
</template>
