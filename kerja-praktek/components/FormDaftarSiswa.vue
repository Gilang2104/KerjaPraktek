<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="m-5 w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
      <header class="mb-6">
        <h1 class="text-4xl text-center font-semibold text-green-800">FORMULIR PENDAFTARAN</h1>
      </header>
      <div>
        <Panel header="Data Siswa" toggleable>
          <div class="grid grid-cols-12 gap-4">
            <label class="font-medium col-span-3 flex justify-end mt-2">Nama Lengkap</label>
            <InputText
              class="w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              v-model="formdata.nama"
              type="text"
              placeholder="Masukan Nama"
            />
          </div>
          <div class="grid grid-cols-12 gap-4">
            <label class="font-medium col-span-3 flex justify-end mt-2">Alamat</label>
            <InputText
              class="w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              v-model="formdata.alamat"
              type="text"
              placeholder="Masukan Alamat"
            />
          </div>
          <div class="grid grid-cols-12 gap-4">
            <label class="font-medium col-span-3 flex justify-end mt-2">TTL</label>
            <InputText
              class="w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              v-model="formdata.ttl"
              type="text"
              placeholder="Tempat, Tanggal Lahir"
            />
          </div>
          <div class="grid grid-cols-12 gap-4">
            <label class="font-medium col-span-3 flex justify-end mt-2">No Handphone</label>
            <InputMask
              id="telepon"
              class="w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              v-model="formdata.no_hp"
              mask="9999-9999-9999"
              placeholder="No. Telepon"
            />
          </div>
          <div class="grid grid-cols-12 gap-4">
            <label class="font-medium col-span-3 flex justify-end mt-2">Jenis Kelamin</label>
            <InputText
              class="w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              v-model="formdata.jenis_kelamin"
              type="text"
              placeholder="Jenis Kelamin"
            />
          </div>
        </Panel>

        <Panel header="Data Informasi Orang Tua" toggleable>
          <div class="grid grid-cols-12 gap-4">
            <label class="font-medium col-span-3 flex justify-end mt-2">Nama Lengkap</label>
            <InputText
              class="w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              v-model="formdata.namaOrtu"
              type="text"
              placeholder="Masukan Nama"
            />
          </div>
          <div class="grid grid-cols-12 gap-4">
            <label class="font-medium col-span-3 flex justify-end mt-2">Alamat</label>
            <InputText
              class="w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              v-model="formdata.alamatOrtu"
              type="text"
              placeholder="Masukan Alamat"
            />
          </div>
          <div class="grid grid-cols-12 gap-4">
            <label class="font-medium col-span-3 flex justify-end mt-2">TTL</label>
            <InputText
              class="w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              v-model="formdata.ttlOrtu"
              type="text"
              placeholder="Tempat, Tanggal Lahir"
            />
          </div>
          <div class="grid grid-cols-12 gap-4">
            <label class="font-medium col-span-3 flex justify-end mt-2">No Handphone</label>
            <InputMask
              id="teleponOrtu"
              class="w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              v-model="formdata.no_hpOrtu"
              mask="9999-9999-9999"
              placeholder="No. Telepon"
            />
          </div>
          <div class="grid grid-cols-12 gap-4">
            <label class="font-medium col-span-3 flex justify-end mt-2">Jenis Kelamin</label>
            <InputText
              class="w-full mt-2 col-span-9 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              v-model="formdata.jenis_kelaminOrtu"
              type="text"
              placeholder="Jenis Kelamin"
            />
          </div>
        </Panel>

        <div class="flex justify-between mt-6">
          <Button
            label="Kembali"
            @click="goBack"
            class="w-full max-w-xs h-12 bg-gray-300 hover:bg-gray-400 text-black rounded-md transition duration-300"
          />
          <Button
            label="Daftar Sekarang"
            @click="submitForm"
            class="w-full max-w-xs h-12 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';

const formdata = reactive({});

// Fungsi untuk kembali ke halaman sebelumnya
const goBack = () => {
  window.history.back();
};

const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/saveDataSiswa', formdata);
    alert(response.data);
  } catch (error) {
    alert(`Error menyimpan data ${error}`);
  }
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
