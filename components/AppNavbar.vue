<template>
  <header class="w-full border-b bg-white shadow-sm">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="font-bold text-2xl flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          Moov+
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-gray-600 hover:text-blue-600 transition-colors"
          >
            {{ link.text }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const navLinks = [
  { text: 'Pet Saúde', to: '/services/pet-health' },
  { text: 'Receitas', to: '/services/recipes' },
  { text: 'Doações', to: '/services/donations' }
]
</script>
