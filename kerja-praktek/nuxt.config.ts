import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    components : true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules:['@nuxtjs/tailwindcss', '@primevue/nuxt-module'],
  plugins:['./plugins/index.js'],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
}

})