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
    class="p-2 flex flex-row justify-between items-center rounded-lg border bg-card text-card-foreground shadow-sm"
  >
    <div class="text-lg">{{ $t("Proyect Title") }}</div>
    <p-btn
      variant="ghost"
      @click="toggleDark()"
      size="icon"
    >
      <p-icon :name="themeModeButtonName" />
    </p-btn>
  </header>
</template>
