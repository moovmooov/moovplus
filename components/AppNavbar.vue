<template>
  <header class="w-full border-b bg-white shadow-sm">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="font-bold text-2xl flex items-center gap-2 transition-colors">
          Moov+
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="` hover:text-${link.color} transition-colors`"
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
  { text: 'Pet Saúde', to: '/services/pet-health', color: 'blue-500' },
  { text: 'Receitas', to: '/services/recipes', color: 'yellow-500' },
  { text: 'Doações', to: '/services/blood-donation', color: 'red-500' }
]
</script>
