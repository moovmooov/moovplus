<template>
  <div class="min-h-screen flex flex-col">
    <div class="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-6xl font-bold text-orange-900 mb-6">
          O que vamos cozinhar hoje?
        </h1>
        <p class="text-xl text-orange-700 mb-8 max-w-2xl">
          Explore nossa coleção de receitas deliciosas e encontre sua próxima inspiração culinária.
        </p>

        <div class="bg-white p-6 rounded-2xl shadow-sm max-w-4xl">
          <RecipeCategoryFilter v-model="selectedCategories" :categories="categories" />
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12">
      <div v-if="error" class="flex flex-col items-center justify-center py-16 text-center">
        <span class="text-6xl mb-4">💥</span>
        <h3 class="text-2xl font-medium text-gray-800 mb-2">Ops! Algo deu errado</h3>
        <p class="text-gray-600">
          Não foi possível carregar as receitas. Tente novamente mais tarde.
        </p>
      </div>
      <div
        v-else-if="filteredRecipes.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <RecipeCard
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
          :recipe="recipe"
          @click="openRecipeDetails(recipe)"
        />
      </div>
      <div v-else class="flex flex-col items-center justify-center py-16 text-center">
        <span class="text-6xl mb-4">😞</span>
        <h3 class="text-2xl font-medium text-gray-800 mb-2">Nenhuma receita foi encontrada</h3>
        <p class="text-gray-600">Tente selecionar diferentes categorias</p>
      </div>
    </div>

    <RecipeDetailModal v-if="selectedRecipe" v-model="isModalOpen" :recipe="selectedRecipe" />
  </div>
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

type RecipeResponse = {
  recipes: Recipe[]
}

const { data, error } = await useFetch<RecipeResponse>('https://dummyjson.com/recipes')

const recipes = computed(() => data.value?.recipes || [])
const selectedCategories = ref<string[]>([])

const categories = computed(() => {
  const uniqueCategories = new Set(recipes.value.flatMap((recipe) => recipe.tags))
  return Array.from(uniqueCategories).sort()
})

const filteredRecipes = computed(() => {
  if (selectedCategories.value.length === 0) {
    return recipes.value
  }

  return recipes.value.filter((recipe) =>
    selectedCategories.value.every((category) => recipe.tags.includes(category))
  )
})

const selectedRecipe = ref<Recipe | null>(null)
const isModalOpen = ref(false)

const openRecipeDetails = (recipe: Recipe) => {
  selectedRecipe.value = recipe
  isModalOpen.value = true
}
</script>
