<script setup lang="ts"></script>

<template>
  <main class="p-2">
    <h1 class="text-3xl font-bold underline">{{ $t("Hello World") }}</h1>
    <p-btn :loading="true">Click me</p-btn>
  </main>
</template>
