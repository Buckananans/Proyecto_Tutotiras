<script setup lang="ts">
import * as z from "zod";
import TutorLogo from "../assets/Tutor_link_logo.png";
import { useForm } from "vee-validate";
import api from "@/api";
import router from "@/router";
import { toTypedSchema } from "@vee-validate/zod";
const registerSchema = toTypedSchema(
  z.object({
    name: z.string().trim().min(1, { message: "Required Field" }),
    lastName: z.string().trim().min(1, { message: "Required Field" }),
    email: z.string().email({ message: "Email must be valid" }),
    password: z
      .string()
      .trim()
      .min(8, { message: "Password should be at least 8 characters long" }),
    userRole: z.string().min(1, { message: "Required Field" })
  })
);

const { handleSubmit } = useForm({
  validationSchema: registerSchema
});

const onSubmit = handleSubmit(async val => {
  try {
    await api.post("/auth/signup", val);
    router.push("/login");
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
          name="name"
          ><p-form-item
            ><p-form-control
              ><p-input
                type="text"
                placeholder="Name"
                v-bind="componentField"
            /></p-form-control>
            <p-form-message /> </p-form-item
        ></p-form-field>

        <p-form-field
          v-slot="{ componentField }"
          name="lastName"
          ><p-form-item
            ><p-form-control
              ><p-input
                type="text"
                placeholder="Last Name"
                v-bind="componentField"
            /></p-form-control>
            <p-form-message /> </p-form-item
        ></p-form-field>

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

        <p-form-field
          v-slot="{ componentField }"
          name="userRole"
        >
          <p-form-item>
            <p-select v-bind="componentField">
              <p-form-control>
                <p-select-trigger>
                  <p-select-value placeholder="Role" />
                </p-select-trigger>
              </p-form-control>

              <p-select-content>
                <p-select-group>
                  <p-select-item value="ADVISOR"> Advisor </p-select-item>

                  <p-select-item value="STUDENT"> Student </p-select-item>
                </p-select-group>
              </p-select-content>
            </p-select>
          </p-form-item>
        </p-form-field>

        <p-btn type="submit"> Register </p-btn>
      </form>
    </div>
  </main>
</template>
