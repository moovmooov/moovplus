<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-600"> Passo {{ currentStep + 1 }} de {{ totalSteps }} </span>
    </div>
    <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentStep: number
  totalSteps: number
  title: string
}>()
</script>
