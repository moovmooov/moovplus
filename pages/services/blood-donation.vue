<template>
  <div class="min-h-screen flex flex-col">
    <div class="bg-gradient-to-r from-red-800 to-red-500 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">Doadores de Sangue</h1>
        <p class="text-xl text-white mb-8 max-w-2xl">
          Encontre e conecte-se com doadores de sangue em sua região. Cada doação pode salvar até 4
          vidas!
        </p>

        <div class="rounded-2xl shadow-sm max-w-4xl">
          <UInput
            v-model="query"
            placeholder="Busque por nome, tipo sanguíneo, localização..."
            icon="i-heroicons-magnifying-glass"
            class="max-w-full"
          />
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12">
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <UTable
          :rows="donors"
          :columns="columns"
          hover
          :loading="status === 'pending'"
          class="w-full"
        >
          <template #empty-state>
            <div class="flex flex-col items-center justify-center py-12 gap-4">
              <span class="text-6xl">😞</span>
              <div class="text-center">
                <p class="text-lg font-medium text-gray-900 dark:text-gray-100">
                  Nenhum resultado encontrado
                </p>
              </div>
            </div>
          </template>

          <template #image-data="{ row }">
            <img :src="row.image" :alt="row.fullName" class="w-10 h-10 rounded-full object-cover" />
          </template>

          <template #bloodGroup-data="{ row }">
            <span
              class="px-3 py-1 rounded-full text-sm font-medium"
              :class="bloodGroupClass(row.bloodGroup)"
            >
              {{ row.bloodGroup }}
            </span>
          </template>

          <template #location-data="{ row }">
            <a
              :href="`https://maps.google.com/?q=${row.coordinates.lat},${row.coordinates.lng}`"
              target="_blank"
              class="flex items-center gap-2 underline"
            >
              <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
              {{ row.location }}
            </a>
          </template>
        </UTable>
        <div
          class="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700"
        >
          <div class="text-sm text-gray-600 dark:text-gray-400">
            Mostrando {{ currentPageStart }} a {{ currentPageEnd }} de {{ totalResults }} resultados
          </div>
          <UPagination v-model="page" :total="totalResults" :per-page="itemsPerPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { refDebounced } from '@vueuse/core'
import { computed } from 'vue'

const columns = [
  { key: 'image' },
  { key: 'fullName', label: 'Nome' },
  { key: 'bloodGroup', label: 'Tipo Sanguíneo' },
  { key: 'birthDate', label: 'Data de Nascimento' },
  { key: 'gender', label: 'Sexo' },
  { key: 'location', label: 'Localização' }
]

const query = ref('')
const queryDebounced = refDebounced(query, 300)
const page = ref(1)
const itemsPerPage = 10

const { donors, data, status } = useDonors(queryDebounced, page, itemsPerPage)

const bloodGroupClass = computed(() => (bloodGroup: string) => ({
  'bg-red-100 text-red-800': bloodGroup.includes('+'),
  'bg-blue-100 text-blue-800': bloodGroup.includes('-')
}))

const currentPageStart = computed(() => (page.value - 1) * itemsPerPage + 1)
const currentPageEnd = computed(() => Math.min(page.value * itemsPerPage, data.value?.total || 0))
const totalResults = computed(() => data.value?.total || 0)
</script>
