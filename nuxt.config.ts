// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/eslint-module',
    '@nuxt/fonts',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'light'
  },
  compatibilityDate: '2024-10-31'
})
