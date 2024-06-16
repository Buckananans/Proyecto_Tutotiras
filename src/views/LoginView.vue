<script setup lang="ts">
import TutorLogo from "../assets/Tutor_link_logo.png";
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
    <div class="flex-1"></div>
  </main>
</template>
