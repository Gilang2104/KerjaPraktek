<template>
  <header class="bg-green-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-white text-2xl font-bold">Yayasan Al-Qaaf</h1>
      <nav>
        <nuxt-link to="/login" class="text-white px-4 py-2 hover:bg-green-600 rounded">Login</nuxt-link>
      </nav>
    </div>
    <div class="flex flex-col items-center mt-6 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-xl font-semibold text-green-700 mb-2">Mencetak Generasi Unggul!</h2>
      <p class="text-gray-700 text-center">
        Kami berkomitmen untuk memberikan pendidikan berkualitas, membangun karakter, dan mempersiapkan siswa untuk masa depan yang gemilang.
      </p>
    </div>
  </header>

  <!-- Bagian Galeri Gambar -->
  <div class="container mx-auto p-4 mt-8">
    <h2 class="text-2xl font-bold mb-4 animate-fade-in">Galeri Gambar</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div class="group overflow-hidden rounded-lg shadow-lg">
        <img src="kerja-praktek/assets/logo.jpg" alt="Gambar 1" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300">
      </div>
      <div class="group overflow-hidden rounded-lg shadow-lg">
        <img src="kerja-praktek/assets/IsraMiraj.png" alt="Gambar 2" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300">
      </div>
      <div class="group overflow-hidden rounded-lg shadow-lg">
        <img src="kerja-praktek/assets/Kumpul.png" alt="Gambar 3" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300">
      </div>
      <div class="group overflow-hidden rounded-lg shadow-lg">
        <img src="kerja-praktek/assets/Mc.png" alt="Gambar 4" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300">
      </div>
    </div>
  </div>

  <!-- Visi dan Misi -->
  <div class="container mx-auto p-4 mt-8 bg-white rounded-lg shadow-md">
    <h2 class="text-lg font-bold text-green-800 font-serif animate-fade-in">Visi:</h2>
    <p class="text-gray-700 animate-fade-in">
      Menjadi lembaga pendidikan terdepan yang membentuk generasi unggul dengan karakter yang kuat, pengetahuan yang luas, dan keterampilan yang relevan untuk menghadapi tantangan masa depan.
    </p>
    <h2 class="text-lg font-bold text-green-800 mt-2 font-serif animate-fade-in">Misi:</h2>
    <ul class="list-disc list-inside text-gray-700 animate-fade-in">
      <li>Memberikan pendidikan berkualitas tinggi yang berfokus pada pengembangan intelektual, emosional, dan spiritual siswa.</li>
      <li>Membangun karakter siswa melalui nilai-nilai moral dan etika yang kuat, serta pendidikan karakter yang berkelanjutan.</li>
      <li>Mengembangkan kurikulum yang inovatif dan relevan dengan kebutuhan zaman, serta memfasilitasi pembelajaran yang kreatif dan menyenangkan.</li>
      <li>Menyediakan lingkungan belajar yang aman, inklusif, dan mendukung, di mana setiap siswa dapat berkembang secara maksimal.</li>
      <li>Mendorong keterlibatan orang tua dan masyarakat dalam proses pendidikan untuk menciptakan kolaborasi yang kuat antara sekolah dan lingkungan.</li>
    </ul>
  </div>

  <!-- Chart dan Tulisan di Sampingnya -->
  <div class="container mx-auto p-4 mt-8">
    <div class="flex">
      <div class="w-2/3">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
      </div>
      <div class="w-1/3 pl-4">
        <h2 class="text-lg font-bold text-green-800 mb-2">Statistik Pendidikan</h2>
        <p class="text-gray-700 mb-4">
          Kami memiliki 10 guru yang berpengalaman dan 50 siswa yang siap menghadapi tantangan pendidikan. 
          Dengan komitmen untuk memberikan pembelajaran yang berkualitas, kami berharap dapat mencetak generasi unggul.
        </p>
        <p class="text-gray-700">
          Mari bergabung bersama kami untuk menciptakan masa depan yang lebih baik melalui pendidikan!
        </p>
      </div>
    </div>
  </div>

  <!-- Narasi Jumlah Siswa dan Guru -->
  <!-- <div class="text-center mt-4">
    <p class="text-gray-800 text-lg font-sans">Saat ini, kami memiliki <strong class="text-green-600">10 guru</strong> yang berdedikasi dan <strong class="text-green-600">50 siswa</strong> yang siap belajar dan berkembang bersama kami.</p>
  </div> -->

  <!-- Bagian Bergabung dengan Kami -->
  <div class="flex flex-col items-center mt-8 p-6 bg-green-800 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-white mb-2">Ayo Bergabung Bersama Kami!</h2>
    <p class="text-white text-center mb-4">
      Kami mengundang Anda untuk menjadi bagian dari komunitas kami yang berkomitmen terhadap pendidikan berkualitas dan pengembangan karakter siswa.
    </p>
    <nuxt-link to="/FormPendaftaran" class="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300">Daftar Sekarang</nuxt-link>
  </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import { onMounted, ref } from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

// Data dummy untuk jumlah guru dan jumlah siswa
const setChartData = () => {
  return {
    labels: ['Jumlah Guru', 'Jumlah Siswa'], // Label untuk grafik
    datasets: [
      {
        label: 'Total',
        data: [10, 50], // Jumlah guru (10) dan jumlah siswa (50)
        backgroundColor: [
          'rgba(249, 115, 22, 0.2)', // Warna untuk jumlah guru
          'rgba(6, 182, 212, 0.2)'    // Warna untuk jumlah siswa
        ],
        borderColor: [
          'rgb(249, 115, 22)', // Border warna untuk jumlah guru
          'rgb(6, 182, 212)'   // Border warna untuk jumlah siswa
        ],
        borderWidth: 1
      }
    ]
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      }
    }
  };
}
</script>

<style scoped>
.card {
  width: 50%; /* Lebar penuh pada kontainer */
  height: auto; /* Atur tinggi grafik */
}

/* Animasi Fade In */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px); /* Menggerakkan teks sedikit ke atas */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Kembali ke posisi normal */
  }
}

/* Menggunakan Tailwind untuk animasi */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards; /* Durasi dan jenis easing */
}
</style>
