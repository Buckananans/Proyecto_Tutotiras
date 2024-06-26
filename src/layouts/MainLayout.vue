<script setup lang="ts">
import { useUserStore } from "@/stores/userStore";
import { useDark, useToggle } from "@vueuse/core";
import { computed, nextTick } from "vue";
import router from "@/router";

const dark = useDark();
const toggleDark = useToggle(dark);
const themeModeButtonName = computed(() =>
  dark.value ? "light_mode" : "dark_mode"
);

const { user, removeUser } = useUserStore();

const menuItems = [
  { title: "My Account", icon: "account_circle", route: "/account" },
  { title: "My Calendar", icon: "event", route: "/calendar" },
  { title: "My Ratings", icon: "star", route: "/ratings" }
];

const handlePush = (route: string) => {
  router.push(`${route}/${user?.id}`);
};

const signOut = async () => {
  removeUser();
  router.push("/login");
};
</script>
<template>
  <header
    class="px-2 py-3 flex flex-row justify-between items-center rounded-b-lg border-2 bg-card text-card-foreground shadow-sm gap-10"
  >
    <div class="w-60"></div>

    <div class="w-1/2">
      <div class="relative w-full items-center">
        <p-input
          id="search"
          type="text"
          placeholder="Search"
          class="pl-10"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <p-icon
            name="search"
            size="icon"
          />
        </span> </div
    ></div>

    <div class="flex flex-row gap-3">
      <p-btn
        variant="ghost"
        size="icon"
        @click="toggleDark()"
      >
        <p-icon :name="themeModeButtonName" />
      </p-btn>
      <p-dropdown-menu>
        <p-dropdown-menu-trigger>
          <p-btn
            variant="ghost"
            size="icon"
            class="rounded-xl"
          >
            <p-icon
              name="person"
              size="icon"
            />
          </p-btn>
        </p-dropdown-menu-trigger>
        <p-dropdown-menu-content class="mx-3">
          <p-dropdown-menu-item
            v-for="(item, index) in menuItems"
            :key="index"
            @click="handlePush(item.route)"
          >
            <div
              class="flex flex-row justify-between items-center px-3 py-1 min-w-40"
            >
              <div>{{ item.title }}</div>
              <div>
                <p-icon
                  :name="item.icon"
                  size="icon"
                />
              </div>
            </div>
          </p-dropdown-menu-item>
        </p-dropdown-menu-content>
      </p-dropdown-menu>

      <p-btn
        size="icon"
        variant="destructive"
        @click="signOut"
      >
        <p-icon name="logout" />
      </p-btn>
    </div>
  </header>
</template>
