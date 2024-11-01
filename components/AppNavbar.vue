<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

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

        <nav class="hidden md:flex justify-center gap-x-6 mx-auto text-sm">
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

        <button
          class="md:hidden text-white p-2"
          aria-label="Toggle menu"
          @click="toggleMenu"
        >
          <Icon
            :name="
              isMenuOpen ? 'material-symbols:close' : 'material-symbols:menu'
            "
            class="w-6 h-6"
          />
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden pt-4">
        <nav class="flex flex-col gap-y-4">
          <NuxtLink
            to="/services/pet"
            class="text-gray-300 hover:text-white transition-colors duration-300 font-medium px-3 py-2 rounded-lg flex items-center gap-2"
            @click="toggleMenu"
          >
            <Icon name="material-symbols:pets" class="w-5 h-5" />
            Plano de Saúde Pet
          </NuxtLink>

          <NuxtLink
            to="/services/receipt"
            class="text-gray-300 hover:text-white transition-colors duration-300 font-medium px-3 py-2 rounded-lg flex items-center gap-2"
            @click="toggleMenu"
          >
            <Icon name="material-symbols:restaurant-menu" class="w-5 h-5" />
            Receitas
          </NuxtLink>

          <NuxtLink
            to="/services/blood-donors"
            class="text-gray-300 hover:text-white transition-colors duration-300 font-medium px-3 py-2 rounded-lg flex items-center gap-2"
            @click="toggleMenu"
          >
            <Icon name="material-symbols:favorite" class="w-5 h-5" />
            Doadores de Sangue
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>
