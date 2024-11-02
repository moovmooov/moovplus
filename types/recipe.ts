export type Recipe = {
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

export type RecipeResponse = {
  recipes: Recipe[]
  total: number
  skip: number
  limit: number
}
