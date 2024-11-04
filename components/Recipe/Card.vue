<template>
  <div
    class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
  >
    <div class="relative h-56 overflow-hidden">
      <img
        :src="recipe.image"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        :alt="recipe.name"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div class="absolute bottom-0 left-0 right-0 p-6">
        <h3 class="text-white text-xl font-bold mb-2">{{ recipe.name }}</h3>
        <div class="flex items-center gap-4 text-white/90">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-clock" class="w-4 h-4" />
            <span class="text-sm font-medium">{{ totalTime }}min</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-fire" class="w-4 h-4" />
            <span class="text-sm font-medium">{{ recipe.caloriesPerServing }} cal</span>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in recipe.tags.slice(0, 3)"
          :key="tag"
          class="text-xs font-medium px-2 py-1 rounded-full bg-orange-100 text-orange-700"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Recipe = {
  id: number
  name: string
  prepTimeMinutes: number
  cookTimeMinutes: number
  image: string
  caloriesPerServing: number
  tags: string[]
}

const props = defineProps<{
  recipe: Recipe
}>()

const totalTime = computed(() => props.recipe.prepTimeMinutes + props.recipe.cookTimeMinutes)
</script>
