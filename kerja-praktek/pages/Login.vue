<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="flex flex-col gap-6 p-8 bg-white rounded-lg shadow-md w-full max-w-md">
      
      <h2 class="text-2xl font-bold text-center text-green-800">Masuk ke Akun Anda</h2>
      
      <!-- Field Gambar -->
      <section class="flex justify-center">
        <img src="kerja-praktek/assets/logo.jpg" alt="Deskripsi Gambar" class="w-32 h-32 object-cover mb-4">
      </section>

      <section>
        <p class="text-center font-bold text-sm">Username</p>
        <InputGroup class="w-full">
          <InputGroupAddon addonClass="bg-gray-200">
            <i class="pi pi-user"></i>
          </InputGroupAddon>
          <InputText placeholder="Username" class="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" v-model="formdata.Admin" />
        </InputGroup>
      </section>
      
      <section>
        <p class="text-center font-bold text-sm">Password</p>
        <InputGroup class="w-full">
          <InputGroupAddon addonClass="bg-gray-200">
            <i class="pi pi-lock"></i>
          </InputGroupAddon>
          <Password placeholder="Password" v-model="formdata.Password" :feedback="false" toggleMask class="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" />
        </InputGroup>
      </section>

      <!-- Pesan status -->
      <section v-if="statusMessage" class="text-center">
        <p :class="{'text-red-500': error, 'text-green-500': !error}">{{ statusMessage }}</p>
      </section>

      <!-- Submit Button Section -->
      <section class="flex justify-center">
        <PrimeButton @click="submitForm" class="w-full py-2 text-lg bg-green-600 hover:bg-green-700 text-white rounded transition duration-300">
          Masuk
        </PrimeButton>
      </section>

      <!-- Tombol Kembali -->
      <section class="flex justify-center">
        <button @click="goBack" class="text-gray-500 hover:text-green-600 transition duration-300">
          Kembali ke Halaman Sebelumnya
        </button>
      </section>
      
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import PrimeButton from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { reactive, ref } from 'vue';

const formdata = reactive({
  Admin: '',
  Password: ''
});

const statusMessage = ref('');
const error = ref(false);

const submitForm = async () => {
  if (!formdata.Admin || !formdata.Password) {
    statusMessage.value = 'Username dan password diperlukan';
    error.value = true;
    return;
  }
  
  try {
    const response = await axios.post('http://localhost:5000/api/login', formdata);
    statusMessage.value = response.data;
    error.value = false;
    window.location.href = '/admin'; 

  } catch (error) {
    if (error.response) {
      console.error('Login error:', error.response.data);
      statusMessage.value = error.response.data;
      error.value = true;
    } else {
      console.error('Error:', error.message);
      statusMessage.value = 'Terjadi kesalahan. Silakan coba lagi.';
      error.value = true;
    }
  }
}

// Fungsi untuk kembali ke halaman sebelumnya
const goBack = () => {
  window.history.back();
}
</script>

<style scoped>
/* Additional styling can be applied here */
</style>
