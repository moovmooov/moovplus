<template>
  <div class="flex flex-col lg:flex-row min-h-screen">
    <div
      class="hidden lg:flex w-full lg:w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 flex-col justify-center items-center p-4 lg:px-8 shadow-2xl"
    >
      <div class="w-full max-w-md py-6 lg:py-0">
        <FormStepper :steps="steps" :current-step="currentStep" />
      </div>
    </div>
    <div class="w-full lg:w-2/3 bg-gray-50 flex flex-col justify-center items-center p-4 lg:px-12">
      <div class="w-full max-w-2xl container mx-auto">
        <div class="mb-6 lg:hidden">
          <UProgress :value="((currentStep + 1) / steps.length) * 100" class="mb-3" color="sky" />
          <div class="text-center">
            <p class="text-sm text-gray-600">Passo {{ currentStep + 1 }} de {{ steps.length }}</p>
            <h2 class="text-xl font-medium text-gray-900">{{ steps[currentStep].title }}</h2>
          </div>
        </div>
        <UForm :schema="schema[currentStep]" :state="state[currentStep]" @submit="onSubmit">
          <component :is="formComponents[currentStep]" />
          <div class="flex justify-end mt-12">
            <UButton
              class="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-colors duration-200"
              type="submit"
            >
              Próximo
              <UIcon name="i-heroicons-arrow-right" class="ml-2" />
            </UButton>
          </div>
        </UForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { schema } from '@/utils/zod-schemas'
import FormStepsUserData, { type UserType } from '@/components/FormSteps/UserData.vue'
import FormStepsPetData, { type PetType } from '@/components/FormSteps/PetData.vue'
import FormStepsLocationData, { type LocationType } from '@/components/FormSteps/LocationData.vue'
import FormStepsConfirmData from '@/components/FormSteps/ConfirmData.vue'

const userData = useState<UserType>('userData')
const petData = useState<PetType>('petData')
const locationData = useState<LocationType>('locationData')

const state = computed(() => [userData.value, petData.value, locationData.value])

const steps = [
  { title: 'Seus Dados' },
  { title: 'Dados do Pet' },
  { title: 'Endereço' },
  { title: 'Confirmação dos dados' }
]
const currentStep = ref(0)

async function onSubmit() {
  currentStep.value++
}

const formComponents: Record<number, Component> = {
  0: FormStepsUserData,
  1: FormStepsPetData,
  2: FormStepsLocationData,
  3: FormStepsConfirmData
}
</script>
