<template>
  <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-[95vw] lg:max-w-[1200px]' }">
    <div class="flex flex-col md:flex-row h-[90vh] md:h-[80vh]">
      <div class="md:w-2/5 h-48 md:h-full relative md:rounded-l-xl overflow-hidden">
        <img :src="recipe.image" :alt="recipe.name" class="w-full h-full object-cover" />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:hidden"
        />
      </div>

      <div class="md:w-3/5 flex flex-col h-full">
        <div class="p-4 md:p-8 flex-1 overflow-auto">
          <div class="mb-6 md:mb-8">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-800">
                {{ recipe.name }}
              </h2>

              <UIcon
                name="i-heroicons-x-mark"
                class="w-6 h-6 text-gray-500 cursor-pointer"
                @click="isOpen = false"
              />
            </div>

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

          <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
            <div class="bg-orange-50 rounded-xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <UIcon name="i-heroicons-clock" class="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p class="text-sm text-gray-600">Tempo</p>
                <p class="font-medium text-gray-800">{{ totalTime }}min</p>
              </div>
            </div>

            <div class="bg-orange-50 rounded-xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <UIcon name="i-heroicons-fire" class="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p class="text-sm text-gray-600">Calorias</p>
                <p class="font-medium text-gray-800">{{ recipe.caloriesPerServing }}</p>
              </div>
            </div>

            <div class="bg-orange-50 rounded-xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <UIcon name="i-heroicons-user-group" class="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p class="text-sm text-gray-600">Porções</p>
                <p class="font-medium text-gray-800 flex items-center gap-1">
                  {{ servingsDisplay }}
                </p>
              </div>
            </div>
          </div>

          <div class="mb-8 md:mb-10">
            <h3
              class="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6 flex items-center gap-3"
            >
              <UIcon
                name="i-heroicons-shopping-cart"
                class="w-5 md:w-6 h-5 md:h-6 text-orange-500"
              />
              Ingredientes
            </h3>
            <ul class="space-y-3 md:space-y-4">
              <li
                v-for="(ingredient, index) in recipe.ingredients"
                :key="index"
                class="flex items-start gap-3 md:gap-4 text-gray-700"
              >
                <span
                  class="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm md:text-base font-medium"
                >
                  {{ index + 1 }}
                </span>
                <span class="text-sm md:text-base">{{ ingredient }}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3
              class="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6 flex items-center gap-3"
            >
              <UIcon name="i-heroicons-book-open" class="w-5 md:w-6 h-5 md:h-6 text-orange-500" />
              Modo de Preparo
            </h3>
            <ol class="space-y-4 md:space-y-6">
              <li
                v-for="(instruction, index) in recipe.instructions"
                :key="index"
                class="flex gap-3 md:gap-5 text-gray-700"
              >
                <span
                  class="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm md:text-base font-medium"
                >
                  {{ index + 1 }}
                </span>
                <p class="text-sm md:text-base leading-relaxed">{{ instruction }}</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </UModal>
</template>

<script setup lang="ts">
type Recipe = {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  caloriesPerServing: number
  tags: string[]
  image: string
}

const props = defineProps<{
  modelValue: boolean
  recipe: Recipe
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const totalTime = computed(() => {
  return props.recipe.prepTimeMinutes + props.recipe.cookTimeMinutes
})

const servingsDisplay = computed(() => {
  const fullPairs = Math.floor(props.recipe.servings / 2)
  const hasSingle = props.recipe.servings % 2 === 1
  return '👥'.repeat(fullPairs) + (hasSingle ? '👤' : '')
})
</script>
