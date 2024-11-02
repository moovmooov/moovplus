<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-2 text-gray-800">Vamos te conhecer melhor!</h1>
    <p class="text-gray-600 mb-8">Por favor, preencha seus dados pessoais abaixo</p>

    <div class="space-y-6">
      <UFormGroup label="Nome Completo" name="name">
        <UInput
          v-model="userData.name"
          class="rounded-lg shadow-sm"
          placeholder="Digite seu nome completo"
        />
      </UFormGroup>

      <UFormGroup label="Data de nascimento" name="birthDate">
        <UInput
          v-model="userData.birthDate"
          v-maska
          data-maska="##/##/####"
          placeholder="dd/mm/aaaa"
          class="rounded-lg shadow-sm"
        />
      </UFormGroup>
      <UFormGroup label="CPF" name="cpf">
        <UInput
          v-model="userData.cpf"
          v-maska
          class="rounded-lg shadow-sm"
          data-maska="###.###.###-##"
          placeholder="000.000.000-00"
        />
      </UFormGroup>

      <UFormGroup label="Renda Mensal" name="monthlyIncome">
        <div class="relative">
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
          <UInput
            v-model="userData.monthlyIncome"
            v-maska
            data-maska="###.###.###.##0,00"
            data-maska-reversed
            data-maska-tokens="0:[0-9]"
            class="rounded-lg shadow-sm pl-9"
            placeholder="0,00"
          />
        </div>
      </UFormGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
export type UserType = {
  name: string
  birthDate: string
  cpf: string
  monthlyIncome: string | number
}

const userData = useState<UserType>('userData', () => ({
  name: '',
  birthDate: '',
  cpf: '',
  monthlyIncome: ''
}))
</script>
