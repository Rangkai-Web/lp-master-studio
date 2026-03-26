<template>
  <div class="min-h-screen bg-secondary flex items-center justify-center px-6 py-24 overflow-hidden relative">
    <!-- Background Accents -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-xl w-full text-center relative z-10">
      <!-- Error Icon/Graphic -->
      <div class="mb-12 relative inline-block">
        <div class="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-white opacity-5 italic select-none">
          404
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-24 h-24 md:w-32 md:h-32 bg-primary rounded-3xl rotate-12 flex items-center justify-center shadow-2xl shadow-primary/40 animate-pulse">
            <Icon name="heroicons:exclamation-triangle-solid" class="text-white text-5xl md:text-6xl -rotate-12" />
          </div>
        </div>
      </div>

      <!-- Text Content -->
      <h1 class="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6 italic">
        Halaman Tidak <span class="text-primary font-display">Ditemukan</span>
      </h1>
      
      <p class="text-neutral-light/70 text-lg mb-12 max-w-md mx-auto leading-relaxed">
        Sepertinya Anda tersesat atau halaman yang Anda cari sudah dipindahkan. Jangan khawatir, mari kembali ke jalan yang benar.
      </p>

      <!-- Action Button -->
      <button 
        @click="handleError"
        class="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 cursor-pointer"
      >
        <Icon name="heroicons:home-solid" class="text-xl" />
        Kembali ke Beranda
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead, clearError } from '#app'

const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })

useHead({
  title: 'Halaman Tidak Ditemukan - Master Studio',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.font-display {
  font-family: 'Poppins', sans-serif;
}
</style>
