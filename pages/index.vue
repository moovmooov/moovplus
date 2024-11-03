<template>
  <div class="container mx-auto min-h-screen flex flex-col px-4">
    <div class="flex flex-col gap-6 mt-24 text-center">
      <h1 class="text-5xl md:text-6xl font-bold">Bem-vindo ao Moov+!</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Qual serviço você gostaria de explorar hoje?
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-12">
      <NuxtLink
        v-for="card in cards"
        :key="card.title"
        :to="card.to"
        class="transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl"
      >
        <HomeCard
          :title="card.title"
          :description="card.description"
          :image="card.image"
          :color="card.color || 'indigo'"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: 'Moov+ Pet Saúde',
    description: 'Garanta o bem-estar do seu melhor amigo com um seguro saúde sob medida!',
    image: '/images/veterinary.webp',
    to: '/services/pet-health',
    color: 'bg-blue-500'
  },
  {
    title: 'Moov+ Receitas',
    description: 'Acesse nossas receitas de forma fácil e prática!',
    image: '/images/cooking.webp',
    to: '/services/recipes',
    color: 'bg-yellow-500'
  },
  {
    title: 'Moov+ Doações',
    description: 'Encontre candidatos ideais para doação de sangue e salve vidas!',
    image: '/images/blood-donor.webp',
    to: '/services/blood-donation',
    color: 'bg-red-500'
  }
]
</script>
