<template>
  <div>
    <h1 class="text-3xl font-bold mb-2 text-gray-800">
      Prazer em te conhecer, {{ userData.name.split(' ')[0] }}!
    </h1>
    <p class="text-gray-600 mb-8">Por favor, preencha os dados do seu pet abaixo</p>
    <div class="space-y-6">
      <UFormGroup label="Especie" name="species">
        <USelectMenu
          v-model="petData.species"
          :options="species"
          placeholder="Selecione uma espécie"
        />
      </UFormGroup>

      <UFormGroup label="Raça" name="breed">
        <USelectMenu
          v-model="petData.breed"
          :disabled="!petData.species"
          :options="petData.species ? breedsItems[petData.species] : []"
          placeholder="Selecione uma raça"
        />
      </UFormGroup>

      <UFormGroup v-if="petData.breed === 'Outro'" label="Outra Raça" name="customBreed">
        <UInput v-model="petData.customBreed" placeholder="Digite a raça do seu pet" />
      </UFormGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserType } from './UserData.vue'

type Species = 'Cachorro' | 'Gato'

const species: Species[] = ['Cachorro', 'Gato']

const breedsItems: Record<Species, string[]> = {
  Cachorro: ['Mastiff Ingles', 'Pitbull', 'Poodle', 'Shih Tzu', 'Vira-lata', 'Outro'],
  Gato: ['Persa', 'Siamês', 'Angorá', 'Sphynx', 'Ragdoll', 'Outro']
}

export type PetType = {
  species: Species | ''
  breed: string
  customBreed: string
}

const userData = useState<UserType>('userData')

const petData = useState<PetType>('petData', () => ({
  species: '',
  breed: '',
  customBreed: ''
}))

watch(
  () => petData.value.species,
  () => {
    petData.value.breed = ''
  }
)
</script>
