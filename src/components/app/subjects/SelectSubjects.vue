<script setup lang="ts">
import { ref } from "vue";
const model = defineModel({
  type: Number
});

const { disabled } = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
});
const handleOpen = async () => {};

const options = ref<
  {
    id: number;
    name: string;
  }[]
>([]);

const newSubject = ref("");

const addNewSubject = () => {
  newSubject.value = "";
};
</script>

<template>
  <p-select
    v-model="model"
    :disabled="disabled"
    @update:open="handleOpen"
  >
    <p-select-trigger>
      <p-select-value placeholder="Select Subject" />
    </p-select-trigger>

    <p-select-content class="p-3">
      <p-select-item
        v-for="(item, index) in options"
        :key="index"
        :value="item.id"
      >
        {{ item.name }}
      </p-select-item>

      <p-input
        v-model="newSubject"
        placeholder="New Subject"
        variant="ghost"
        @keyup.enter="addNewSubject"
      ></p-input>
    </p-select-content>
  </p-select>
</template>
