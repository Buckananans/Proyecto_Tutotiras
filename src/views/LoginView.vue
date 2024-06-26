<script setup lang="ts">
import * as z from "zod";
import TutorLogo from "../assets/Tutor_link_logo.png";
import { useForm } from "vee-validate";
import api from "@/api";
import router from "@/router";
import { toTypedSchema } from "@vee-validate/zod";
const registerSchema = toTypedSchema(
  z.object({
    email: z.string().email({ message: "Email must be valid" }),
    password: z
      .string()
      .trim()
      .min(8, { message: "Password should be at least 8 characters long" })
  })
);

const { handleSubmit } = useForm({
  validationSchema: registerSchema
});

const onSubmit = handleSubmit(async val => {
  try {
    const { data } = await api.post("/auth/login", val);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    localStorage.setItem("token", data.token);
    router.push("/");
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <main class="flex flex-row h-screen">
    <div class="flex-1 flex flex-col justify-center">
      <div class="w-full h-full px-32 flex flex-col justify-center bg-teal-950">
        <img
          :src="TutorLogo"
          alt="Tutor Link Logo"
          class="bg-white"
        />
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-center w-full px-5">
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col justify-center w-full gap-3"
      >
        <p-form-field
          v-slot="{ componentField }"
          name="email"
          ><p-form-item
            ><p-form-control
              ><p-input
                type="text"
                placeholder="Email"
                v-bind="componentField"
            /></p-form-control>
            <p-form-message /> </p-form-item
        ></p-form-field>

        <p-form-field
          v-slot="{ componentField }"
          name="password"
          ><p-form-item
            ><p-form-control
              ><p-input
                type="password"
                placeholder="Password"
                v-bind="componentField"
            /></p-form-control>
            <p-form-message /> </p-form-item
        ></p-form-field>

        <p-btn type="submit"> Login </p-btn>
      </form>

      <div class="w-full p-5">
        <p-btn
          variant="link"
          @click="router.push('/register')"
          >Register</p-btn
        >
      </div>
    </div>
  </main>
</template>
