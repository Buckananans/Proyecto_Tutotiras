import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import { useUserStore } from "@/stores/userStore";
import RegisterView from "@/views/RegisterView.vue";

export const RouteTypes = {
  COMMON: "COMMON",
  AUTH: "AUTH",
  ADVISOR: "ADVISOR",
  STUDENT: "STUDENT"
} as const;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: {
        type: RouteTypes.COMMON
      }
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
      meta: {
        type: RouteTypes.AUTH
      }
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterView,
      meta: {
        type: RouteTypes.AUTH
      }
    }
  ]
});

router.beforeEach(async to => {
  const userStore = useUserStore();
  await userStore.getUser();
  const { user } = userStore;
  if (user) {
    if (to.meta.type !== RouteTypes.COMMON && to.meta.type !== user.userRole)
      return { name: "Home" };
  } else {
    if (to.meta.type !== RouteTypes.AUTH) return { name: "Login" };
  }
});

export default router;
