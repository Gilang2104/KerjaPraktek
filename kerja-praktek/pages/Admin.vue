<template>
    <div class="admin-page flex">
      <Sidebar />
      <div class="content flex-1 p-4">
        <h1 class="text-2xl font-bold mb-4">Dashboard Admin</h1>
        <ChartComponent />
      </div>
    </div>
  </template>
  
  <script setup>
  import ChartComponent from '@/components/ChartComponent.vue'; // Pastikan path sesuai
import Sidebar from '@/components/Sidebar.vue'; // Pastikan path sesuai
  </script>
  
  <style scoped>
  .admin-page {
    display: flex;
    height: 100vh; /* Agar halaman penuh */
  }
  
  .content {
    background-color: #f9f9f9;
  }
  </style>
  