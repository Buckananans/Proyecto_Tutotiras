import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import { useUserStore } from "@/stores/userStore";
import RegisterView from "@/views/RegisterView.vue";
import CalendarView from "@/views/CalendarView.vue";

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
    },
    {
      path: "/calendar/:id",
      name: "Calendar",
      component: CalendarView,
      meta: {
        type: RouteTypes.COMMON
      }
    }
  ]
});

router.beforeEach(async to => {
  const userStore = useUserStore();
  await userStore.getUser();

  console.log(userStore.user);
  if (userStore.user) {
    if (
      to.meta.type !== RouteTypes.COMMON &&
      to.meta.type !== userStore.user.userRole
    )
      return { name: "Home" };
  } else {
    if (to.meta.type !== RouteTypes.AUTH) return { name: "Login" };
  }
});

export default router;
