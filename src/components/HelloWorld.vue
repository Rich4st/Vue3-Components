<script setup lang="ts">
import { useMainStore } from '@/store/inedx';
import { storeToRefs } from 'pinia';

const main = useMainStore();
const { counter, doubleCount } = storeToRefs(main);

defineProps<{ msg: string }>();
</script>

<template>
  <img class="bg-blue-300" src="@/assets/logo.png" alt="" />
  <h1>{{ counter }}</h1>
  <a-button type="primary">Primary Button</a-button>
</template>

<style scoped></style>
