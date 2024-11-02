<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-2 flex-wrap">
      <UButton
        v-for="category in mainCategories"
        :key="category"
        :variant="isSelected(category) ? 'solid' : 'outline'"
        :color="isSelected(category) ? 'orange' : 'gray'"
        class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
        :class="{
          'bg-orange-500 text-white hover:bg-orange-600': isSelected(category),
          'hover:bg-orange-50': !isSelected(category)
        }"
        @click="toggleCategory(category)"
      >
        {{ category }}
        <UIcon
          v-if="isSelected(category) && category !== 'Todos'"
          name="i-heroicons-x-mark"
          class="w-4 h-4 ml-1"
        />
      </UButton>
    </div>

    <div v-if="modelValue.length > 0" class="text-sm text-gray-600">
      Mostrando receitas com:
      <span class="font-medium text-orange-600">
        {{ modelValue.join(' + ') }}
      </span>
    </div>

    <UButton
      v-if="hasMoreCategories"
      variant="ghost"
      color="gray"
      class="self-start text-sm"
      @click="showAllCategories = !showAllCategories"
    >
      <UIcon
        :name="showAllCategories ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
        class="w-4 h-4 mr-1"
      />
      {{ showAllCategories ? 'Mostrar menos' : 'Mais categorias' }}
    </UButton>

    <div v-if="showAllCategories" class="flex gap-2 flex-wrap">
      <UButton
        v-for="category in additionalCategories"
        :key="category"
        :variant="isSelected(category) ? 'solid' : 'outline'"
        :color="isSelected(category) ? 'orange' : 'gray'"
        class="rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
        :class="{
          'bg-orange-500 text-white hover:bg-orange-600': isSelected(category),
          'hover:bg-orange-50': !isSelected(category)
        }"
        @click="toggleCategory(category)"
      >
        {{ category }}
        <UIcon v-if="isSelected(category)" name="i-heroicons-x-mark" class="w-4 h-4 ml-1" />
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  categories: string[]
  modelValue: string[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

const showAllCategories = ref(false)

const mainCategories = computed(() => {
  const commonTags = ['Todos', ...props.categories.slice(0, 5)]
  return commonTags
})

const additionalCategories = computed(() => {
  return props.categories.filter(
    (category) => !mainCategories.value.includes(category) && category !== 'Todos'
  )
})

const hasMoreCategories = computed(() => additionalCategories.value.length > 0)

const isSelected = (category: string) => {
  if (category === 'Todos') {
    return props.modelValue.length === 0
  }
  return props.modelValue.includes(category)
}

const toggleCategory = (category: string) => {
  if (category === 'Todos') {
    emit('update:modelValue', [])
    return
  }

  const newSelection = [...props.modelValue]
  const index = newSelection.indexOf(category)

  if (index === -1) {
    newSelection.push(category)
  } else {
    newSelection.splice(index, 1)
  }

  emit('update:modelValue', newSelection)
}
</script>
