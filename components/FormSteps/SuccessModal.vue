<template>
  <UModal v-model="isOpen">
    <div class="p-6 text-center">
      <div
        class="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center"
      >
        <UIcon name="i-heroicons-check" class="w-8 h-8 text-green-600" />
      </div>

      <h2 class="text-2xl font-bold text-gray-800 mb-3">Cadastro Realizado!</h2>
      <p class="text-gray-600 mb-8">Seus dados foram registrados com sucesso.</p>

      <div class="flex justify-center gap-4">
        <UButton to="/" color="gray" variant="outline" class="px-6">Voltar para Home</UButton>
      </div>
    </div>
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
