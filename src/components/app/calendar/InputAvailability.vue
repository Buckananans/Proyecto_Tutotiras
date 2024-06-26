<script setup lang="ts">
import type { PropType } from "vue";
import { computed, ref, watch } from "vue";
import SelectSubjects from "../subjects/SelectSubjects.vue";
import { useUserStore } from "@/stores/userStore";

const model = defineModel({
  type: Object as PropType<{
    id?: number;
    start: number;
    end: number;
    subject: number;
  }>,
  required: true
});

const props = defineProps({
  disabled: { type: Boolean, default: false }
});

const dates = ref<
  {
    id?: number;
    start?: number;
    end?: number;
    subject?: number;
  }[]
>([]);

const ocuppiedDates = computed(() => {
  const allOcuppieds: number[] = [];
  dates.value.forEach(val => {
    for (let i = val.start; i <= val.end; i++) {
      allOcuppieds.push(i);
    }
  });
  return allOcuppieds;
});

const startHours = computed(() =>
  Array.from({ length: 24 }, (_, idx) => ({
    label: `${idx}:00 hrs`,
    value: idx,
    disabled: ocuppiedDates.value.some(num => num === idx)
  }))
);

const endHours = computed(() =>
  Array.from({ length: 24 }, (_, idx) => ({
    label: `${idx + 1}:00 hrs`,
    value: idx + 1,
    disabled: ocuppiedDates.value.some(num => num === idx + 1)
  }))
);

watch(dates, () => {
  model.value = dates.value.filter(
    item => item.end && item.start && item.subject
  );
});
</script>

<template>
  <div class="w-full flex flex-col gap-3 overflow-auto">
    <p-card
      class="p-4 flex flex-row justify-between gap-2"
      v-for="(dateItem, index) in dates"
      :key="index"
    >
      <p-select
        v-model="dateItem.start"
        :disabled="dateItem.id || disabled"
      >
        <p-select-trigger>
          <p-select-value placeholder="Start" />
        </p-select-trigger>

        <p-select-content>
          <p-select-item
            v-for="(startHour, index) in startHours"
            :key="index"
            :value="startHour.value"
            :disabled="startHour.disabled"
          >
            {{ startHour.label }}
          </p-select-item>
        </p-select-content>
      </p-select>

      <p-select
        v-model="dateItem.end"
        :disabled="dateItem.id || disabled"
      >
        <p-select-trigger>
          <p-select-value placeholder="End" />
        </p-select-trigger>

        <p-select-content>
          <p-select-item
            v-for="(endHour, index) in endHours"
            :key="index"
            :value="endHour.value"
            :disabled="endHour.disabled || endHour.value <= dateItem.start"
          >
            {{ endHour.label }}
          </p-select-item>
        </p-select-content>
      </p-select>

      <SelectSubjects
        v-model="dateItem.subject"
        :disabled="!!dateItem.id || disabled"
      />
    </p-card>

    <p-btn
      class="w-full"
      variant="outline"
      :disabled="disabled"
      @click="dates.push({})"
    >
      <p-icon name="add" />
    </p-btn>
  </div>
</template>
