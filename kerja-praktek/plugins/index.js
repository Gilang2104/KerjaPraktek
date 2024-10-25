import { defineNuxtPlugin } from '#app';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import InputGroup from 'primevue/inputgroup';
import InputText from 'primevue/inputtext';
import Toolbar from 'primevue/toolbar';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })

  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('Toolbar', Toolbar)
  nuxtApp.vueApp.component('InputGroup', InputGroup)
})
