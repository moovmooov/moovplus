<template>
  <div class="flex flex-col">
    <div v-for="(step, index) in steps" :key="index" class="flex items-start group">
      <div class="flex flex-col items-center">
        <div
          :class="[
            'w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300',
            index < currentStep
              ? 'bg-blue-500 border-blue-300 text-white shadow-lg shadow-blue-500/50'
              : currentStep === index
                ? 'bg-blue-500 border-blue-300 text-white shadow-lg shadow-blue-500/50'
                : 'bg-gray-800 border-gray-600 text-gray-400 group-hover:bg-gray-700 group-hover:border-gray-500'
          ]"
        >
          <UIcon
            v-if="index < currentStep"
            name="i-heroicons-check"
            class="w-5 sm:w-6 h-5 sm:h-6"
          />
          <span v-else class="text-base sm:text-lg font-semibold">{{ index + 1 }}</span>
        </div>
        <div
          v-if="index < steps.length - 1"
          class="w-0.5 h-12 sm:h-16 transition-all duration-300"
          :class="[
            index < currentStep ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-700'
          ]"
        />
      </div>

      <div class="ml-4 sm:ml-6 mt-1">
        <h3
          class="text-base sm:text-lg font-medium transition-all duration-300"
          :class="[index <= currentStep ? 'text-white' : 'text-gray-400 group-hover:text-gray-300']"
        >
          {{ step.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  steps: {
    title: string
  }[]
  currentStep: number
}>()
</script>
