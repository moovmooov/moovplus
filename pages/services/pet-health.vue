<template>
  <div class="flex flex-col lg:flex-row min-h-screen">
    <div
      class="hidden lg:flex w-full lg:w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 flex-col justify-center items-center p-4 lg:px-8 shadow-2xl"
    >
      <div class="w-full max-w-md py-6 lg:py-0">
        <FormStepsStepper :steps="steps" :current-step="currentStep" />
      </div>
    </div>
    <div class="w-full lg:w-2/3 bg-gray-50 flex flex-col justify-center items-center p-4 lg:px-12">
      <div class="w-full max-w-2xl container mx-auto">
        <div class="mb-6 lg:hidden">
          <FormStepsHeader
            :current-step="currentStep"
            :total-steps="steps.length"
            :title="steps[currentStep].title"
          />
        </div>
        <UForm
          :schema="steps[currentStep].schema"
          :state="formState[currentStep]"
          @submit="onSubmit"
        >
          <component :is="steps[currentStep].component" />

          <div class="flex justify-between mt-12">
            <UButton
              v-if="canGoPrevious"
              variant="outline"
              class="px-8 py-3 text-blue-600 hover:text-blue-700"
              @click="previousStep"
            >
              <UIcon name="i-heroicons-arrow-left" class="mr-2" />
              Anterior
            </UButton>

            <UButton
              class="ml-auto px-8 py-3"
              :class="[
                isLastStep ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
              ]"
              type="submit"
            >
              {{ isLastStep ? 'Finalizar' : 'Próximo' }}
              <UIcon v-if="!isLastStep" name="i-heroicons-arrow-right" class="ml-2" />
              <UIcon v-else name="i-heroicons-check" class="ml-2" />
            </UButton>
          </div>
        </UForm>
      </div>
    </div>
    <FormStepsSuccessModal v-model="showSuccessModal" />
  </div>
</template>

<script setup lang="ts">
import type { UserType } from '~/components/FormSteps/UserData.vue'
import type { PetType } from '~/components/FormSteps/PetData.vue'
import type { LocationType } from '~/components/FormSteps/LocationData.vue'

const userData = useState<UserType>('userData')
const petData = useState<PetType>('petData')
const locationData = useState<LocationType>('locationData')

const formState = computed(() => [userData.value, petData.value, locationData.value])

const { steps, currentStep, canGoPrevious, nextStep, previousStep } = useFormStepper()

const isLastStep = computed(() => currentStep.value === steps.length - 1)

const showSuccessModal = ref(false)

async function onSubmit() {
  if (isLastStep.value) {
    showSuccessModal.value = true
    return
  }
  nextStep()
}
</script>
