export function usePrimaryColor() {
  const route = useRoute()

  const primaryColor = computed(() => {
    if (route.path.includes('/services/pet-health')) return 'blue'
    if (route.path.includes('/services/recipes')) return 'yellow'
    if (route.path.includes('/services/blood-donation')) return 'red'
    return 'blue'
  })

  watch(
    primaryColor,
    (newColor) => {
      const appConfig = useAppConfig()
      appConfig.ui.primary = newColor
    },
    { immediate: true }
  )

  return {
    primaryColor
  }
}
