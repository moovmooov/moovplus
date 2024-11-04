<template>
  <div class="max-w-4xl mx-auto px-4">
    <div class="mb-8 md:mb-12">
      <h1 class="text-2xl md:text-4xl font-bold mb-3 text-gray-800">Vamos confirmar seus dados?</h1>
      <p class="text-gray-600">Por favor, confira se os dados abaixo estão corretos</p>
    </div>

    <div class="space-y-6 md:space-y-8">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
        <div
          class="col-span-1 md:col-span-3 bg-white rounded-xl shadow-lg p-6 md:p-10 transition-all duration-300 hover:shadow-xl"
        >
          <div class="flex items-center gap-3 mb-6">
            <UIcon name="i-heroicons-user-circle" class="w-6 h-6 text-blue-600" />
            <h2 class="text-xl font-semibold text-gray-800">Seus Dados</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-500">Nome Completo</span>
              <span class="font-medium text-gray-800">{{ userData.name || '-' }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-500">Data de Nascimento</span>
              <span v-maska data-maska="##/##/####" class="font-medium text-gray-800">
                {{ userData.birthDate || '-' }}
              </span>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-500">CPF</span>
              <span v-maska data-maska="###.###.###-##" class="font-medium text-gray-800">
                {{ userData.cpf || '-' }}
              </span>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-500">Renda Mensal</span>
              <span
                v-maska
                data-maska="###.###.###.##0,00"
                data-maska-reversed
                data-maska-tokens="0:[0-9]"
                class="font-medium text-gray-800"
              >
                R$ {{ userData.monthlyIncome || '-' }}
              </span>
            </div>
          </div>
        </div>

        <div
          class="col-span-1 md:col-span-2 bg-white rounded-xl shadow-lg p-6 md:p-10 transition-all duration-300 hover:shadow-xl"
        >
          <div class="flex items-center gap-3 mb-6">
            <UIcon name="i-heroicons-heart" class="w-6 h-6 text-red-500" />
            <h2 class="text-xl font-semibold text-gray-800">Dados do Pet</h2>
          </div>

          <div class="grid grid-cols-1 gap-4 md:gap-6">
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-500">Espécie</span>
              <span class="font-medium text-gray-800 text-lg">{{ petData.species || '-' }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-500">Raça</span>
              <span class="font-medium text-gray-800 text-lg">
                {{ petData.breed === 'Outro' ? petData.customBreed : petData.breed }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-xl shadow-lg p-6 md:p-10 transition-all duration-300 hover:shadow-xl"
      >
        <div class="flex items-center gap-3 mb-6">
          <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-green-600" />
          <h2 class="text-xl font-semibold text-gray-800">Endereço</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div class="flex flex-col">
            <span class="text-sm font-medium text-gray-500">CEP</span>
            <span v-maska data-maska="##.###-###" class="font-medium text-gray-800">
              {{ locationData.cep || '-' }}
            </span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-medium text-gray-500">Estado</span>
            <span class="font-medium text-gray-800">{{ locationData.state || '-' }}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-medium text-gray-500">Cidade</span>
            <span class="font-medium text-gray-800">{{ locationData.city || '-' }}</span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-medium text-gray-500">Bairro</span>
            <span class="font-medium text-gray-800">{{ locationData.neighborhood || '-' }}</span>
          </div>
          <div class="flex flex-col sm:col-span-2 lg:col-span-3">
            <span class="text-sm font-medium text-gray-500">Rua</span>
            <span class="font-medium text-gray-800">{{ locationData.street || '-' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PetType } from '~/types/pet'
import type { UserType } from './UserData.vue'
import type { LocationType } from '~/types/location'

const userData = useState<UserType>('userData')
const petData = useState<PetType>('petData')
const locationData = useState<LocationType>('locationData')
</script>
