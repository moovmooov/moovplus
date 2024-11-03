<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-2 text-gray-800">
      Onde você mora com seu {{ petData.species.toLowerCase() }}?
    </h1>
    <p class="text-gray-600 mb-8">Por favor, preencha seu endereço abaixo</p>

    <div class="space-y-6">
      <UFormGroup label="CEP" name="cep">
        <UInput
          v-model="locationData.cep"
          v-maska
          data-maska="##.###-###"
          class="rounded-lg shadow-sm"
          placeholder="00.000-000"
          inputmode="numeric"
        />
      </UFormGroup>

      <UFormGroup label="Estado" name="state">
        <USelectMenu
          v-model="locationData.state"
          :options="brazilStates"
          placeholder="Selecione um estado"
          :disabled="!locationData.cep"
        />
      </UFormGroup>

      <UFormGroup label="Cidade" name="city">
        <UInput
          v-model="locationData.city"
          class="rounded-lg shadow-sm"
          :disabled="!locationData.cep"
          placeholder="Digite o nome da cidade"
        />
      </UFormGroup>

      <UFormGroup label="Bairro" name="neighborhood">
        <UInput
          v-model="locationData.neighborhood"
          class="rounded-lg shadow-sm"
          :disabled="!locationData.cep"
          placeholder="Digite o nome do bairro"
        />
      </UFormGroup>

      <UFormGroup label="Rua" name="street">
        <UInput
          v-model="locationData.street"
          class="rounded-lg shadow-sm"
          :disabled="!locationData.cep"
          placeholder="Digite o nome da rua"
        />
      </UFormGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { brazilStates } from '@/utils/brazil-states'
import type { LocationAPIType, LocationType } from '~/types/location'
import type { PetType } from '~/types/pet'

const petData = useState<PetType>('petData')

const locationData = useState<LocationType>('locationData', () => ({
  cep: '',
  state: '',
  city: '',
  neighborhood: '',
  street: ''
}))

watch(
  () => locationData.value.cep,
  async (newCep: string) => {
    const cleanCep = newCep.replace(/\D/g, '')
    if (cleanCep.length === 8) {
      const { data } = await useFetch<LocationAPIType>(`https://viacep.com.br/ws/${cleanCep}/json/`)

      if (data.value) {
        locationData.value.state = data.value.estado
        locationData.value.city = data.value.localidade
        locationData.value.neighborhood = data.value.bairro
        locationData.value.street = data.value.logradouro
      }
    }
  }
)
</script>
