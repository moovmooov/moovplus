<template>
  <div class="min-h-screen flex flex-col">
    <div class="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">O que vamos cozinhar hoje?</h1>
        <p class="text-xl text-white mb-8 max-w-2xl">
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

      <div class="flex justify-center mt-8">
        <UPagination v-model="page" :total="totalResults" />
      </div>
    </div>

    <RecipeDetailModal v-if="selectedRecipe" v-model="isModalOpen" :recipe="selectedRecipe" />
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from '~/types/recipe'

const page = ref(1)
const itemsPerPage = 12
const selectedCategories = ref<string[]>([])

const { filteredRecipes, error, totalResults, categories } = useRecipes(
  page,
  itemsPerPage,
  selectedCategories
)

const selectedRecipe = ref<Recipe | null>(null)
const isModalOpen = ref(false)

const openRecipeDetails = (recipe: Recipe) => {
  selectedRecipe.value = recipe
  isModalOpen.value = true
}
</script>
