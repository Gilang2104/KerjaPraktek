<!-- layouts/Default.vue -->
<template>
  <components>
    <Header />
    <Footer />
    <slot/>
  </components>
</template> 

<script setup>
import Header from '@/components/Header.vue'; // Pastikan path ini benar
import Footer from '~/components/Footer.vue'; // Pastikan Anda memiliki Footer.vue
</script>

<style scoped>
/* Tambahkan gaya spesifik untuk layout di sini */
</style>
