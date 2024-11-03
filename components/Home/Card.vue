<template>
  <div
    class="relative max-w-sm h-[464px] overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/20"
  >
    <img
      :src="image"
      class="h-full w-full object-cover rounded-xl transform transition-transform duration-700 hover:scale-110"
    />

    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90" />

    <div
      class="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-300"
    >
      <h2 class="mb-3 text-3xl font-extrabold tracking-tight transition-colors">
        {{ title }}
      </h2>
      <p class="text-base leading-relaxed text-white/95 font-medium">
        {{ description }}
      </p>
      <div
        :class="`mt-4 w-12 h-1 rounded-full transform transition-all duration-300 group-hover:w-24 ${color}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  color: string
}>()
</script>
