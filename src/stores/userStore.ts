import api from "@/api";
import { defineStore } from "pinia";
import { ref } from "vue";

export type User = {
  id: number;
  email: string;
  name: string;
  lastName: string;
  userRole: string;
  dateTime: Date;
};

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);
  const removeUser = () => {
    user.value = null;
    localStorage.removeItem("token");
    api.defaults.headers.common["Authorization"] = undefined;
  };
  return {
    user,
    removeUser,
    async getUser() {
      try {
        const response = await api.get("/auth/authUser");
        user.value = response.data.user;
      } catch {
        user.value = null;
        localStorage.removeItem("token");
      }
    }
  };
});
