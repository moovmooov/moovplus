import type { RecipeResponse } from '~/types/recipe'

export function useRecipes() {
  const { data, error } = useFetch<RecipeResponse>('https://dummyjson.com/recipes')

  const recipes = computed(() => data.value?.recipes || [])

  return {
    recipes,
    data,
    error
  }
}
