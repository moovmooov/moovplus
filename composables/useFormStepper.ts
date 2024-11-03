import UserData from '~/components/FormSteps/UserData.vue'
import PetData from '~/components/FormSteps/PetData.vue'
import LocationData from '~/components/FormSteps/LocationData.vue'
import ConfirmData from '~/components/FormSteps/ConfirmData.vue'
import type { ZodSchema } from 'zod'
import type { Component } from 'vue'

type Step = {
  title: string
  component: Component
  schema: ZodSchema
}

export function useFormStepper() {
  const currentStep = ref(0)

  const steps: Step[] = [
    {
      title: 'Seus Dados',
      component: UserData,
      schema: schema[0]
    },
    {
      title: 'Dados do Pet',
      component: PetData,
      schema: schema[1]
    },
    {
      title: 'Endereço',
      component: LocationData,
      schema: schema[2]
    },
    {
      title: 'Confirmação dos dados',
      component: ConfirmData,
      schema: schema[3]
    }
  ]

  const canGoNext = computed(() => currentStep.value < steps.length - 1)
  const canGoPrevious = computed(() => currentStep.value > 0)

  function nextStep() {
    if (canGoNext.value) currentStep.value++
  }

  function previousStep() {
    if (canGoPrevious.value) currentStep.value--
  }

  return {
    steps,
    currentStep,
    canGoPrevious,
    nextStep,
    previousStep
  }
}
