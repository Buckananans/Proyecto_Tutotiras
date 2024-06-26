<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import { User, useUserStore } from "@/stores/userStore";
import { computed, onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import type { DateValue } from "@internationalized/date";
import { getLocalTimeZone, today } from "@internationalized/date";
import InputAvailability from "@/components/app/calendar/InputAvailability.vue";
import api from "@/api";

const route = useRoute();
const { user } = useUserStore();

const selectedDate = ref<DateValue>(today(getLocalTimeZone()));
const dialogOpen = ref(false);

const requestAvailabilities = async () => {
  try {
    const { data } = await api.get(
      `/availability/by-date/${selectedDate.value.toString()}/${route.params.id}`
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(async () => {
  const { data } = await api.get(`/user/${route.params.id}`);
  userData.value = data.user;
});

const userData = ref<User | null>(null);

watch(selectedDate, async () => {
  await requestAvailabilities();
  dialogOpen.value = true;
});

const datesModel = ref([]);

const canModify = computed(
  () => user.id.toString() === route.params.id && user.userRole === "ADVISOR"
);
</script>

<template>
  <div class="h-screen flex flex-col">
    <MainLayout />

    <div class="w-full flex flex-row justify-center mt-10">
      <h5 class="mr-2">{{ userData?.name }} {{ userData?.lastName }}</h5>
      <p-icon
        name="account_circle"
        size="icon"
      />
    </div>
    <main class="w-full flex-1 flex flex-col justify-center items-center">
      <p-calendar
        v-model="selectedDate"
        :minValue="today(getLocalTimeZone())"
      ></p-calendar>
      <p-dialog v-model:open="dialogOpen">
        <p-dialog-content class="h-96">
          <p-dialog-title>
            {{ userData?.name }} {{ userData?.lastName }}
            {{ selectedDate }}</p-dialog-title
          >
          <InputAvailability
            v-model="datesModel"
            :selected-date="selectedDate"
            :disabled="!canModify"
          />
          <p-dialog-footer>
            <p-btn :disabled="!canModify">Save</p-btn>
          </p-dialog-footer>
        </p-dialog-content>
      </p-dialog>
    </main>
  </div>
</template>
