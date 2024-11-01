<template>
  <header class="w-full border-b border-gray-800">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink
            to="/"
            class="text-white font-bold text-2xl hover:text-gray-300 transition-colors duration-300 flex items-center gap-2"
          >
            Moov+
          </NuxtLink>
        </div>

        <nav class="flex justify-center gap-x-6 mx-auto">
          <NuxtLink
            to="/services/pet"
            class="text-gray-300 hover:text-white transition-colors duration-300 font-medium px-3 py-2 rounded-lg flex items-center gap-2"
          >
            <Icon name="material-symbols:pets" class="w-5 h-5" />
            Plano de Saúde Pet
          </NuxtLink>

          <NuxtLink
            to="/services/receipt"
            class="text-gray-300 hover:text-white transition-colors duration-300 font-medium px-3 py-2 rounded-lg flex items-center gap-2"
          >
            <Icon name="material-symbols:restaurant-menu" class="w-5 h-5" />
            Receitas
          </NuxtLink>

          <NuxtLink
            to="/services/blood-donors"
            class="text-gray-300 hover:text-white transition-colors duration-300 font-medium px-3 py-2 rounded-lg flex items-center gap-2"
          >
            <Icon name="material-symbols:favorite" class="w-5 h-5" />
            Doadores de Sangue
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
