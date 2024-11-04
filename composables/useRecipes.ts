import type { RecipeResponse } from '~/types/recipe'

export function useRecipes(
  page: Ref<number>,
  itemsPerPage: number,
  selectedCategories: Ref<string[]>
) {
  const { data, error } = useFetch<RecipeResponse>('https://dummyjson.com/recipes', {
    params: {
      limit: itemsPerPage,
      skip: computed(() => (page.value - 1) * itemsPerPage)
    }
  })

  const recipes = computed(() => data.value?.recipes || [])
  const totalResults = computed(() => data.value?.total || 0)

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

  return {
    recipes,
    error,
    totalResults,
    categories,
    filteredRecipes
  }
}
