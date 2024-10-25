<!-- components/header/Header.vue -->
<template>
  <header class="bg-green-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-white text-2xl font-bold">Dashboard</h1>
      <nav>
        <nuxt-link to="/login" class="text-white px-4 py-2 hover:bg-green-600 rounded">Login</nuxt-link>
        <nuxt-link to="/FormPendaftaran" class="text-white px-4 py-2 hover:bg-green-600 rounded">Pendaftaran</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Anda bisa menambahkan fungsionalitas JavaScript di sini jika diperlukan
</script>

<style scoped>
/* Tambahkan gaya spesifik untuk header di sini */
</style>
