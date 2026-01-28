<template>
  <section class="px-4 lg:px-20 py-16 bg-secondary">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div 
        v-for="feature in features" 
        :key="feature.title"
        class="flex flex-col gap-5 p-8 border-b-4 border-surface bg-secondary/20 backdrop-blur-md hover:border-primary transition-all group rounded-t-2xl"
      >
        <Icon :name="feature.icon" class="text-5xl text-primary group-hover:scale-110 transition-transform" />
        <h3 class="text-white text-xl font-bold uppercase font-display">{{ feature.title }}</h3>
        <p class="text-neutral-light text-sm">{{ feature.description }}</p>
      </div>
    </div>
    <div class="mt-12 bg-secondary text-neutral-light p-5 rounded-2xl flex items-center justify-center border border-white/10">
      <p class="text-center text-sm font-medium tracking-wide">
        <span class="text-primary font-bold">#1 Studio Foto Cikampek Karawang:</span> Jasa Fotografi Produk, Video Cinematic, Wisuda, Wedding, dan Creative Agency Terpercaya.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'material-symbols:verified-user',
    title: 'Kualitas Premium',
    description: 'Menggunakan kamera mirrorless flagship dan lighting high-end untuk hasil tajam maksimal.'
  },
  {
    icon: 'material-symbols:location-on',
    title: '2 Cabang Strategis',
    description: 'Tersedia di lokasi strategis Cikampek Kota dan Karawang Galuh Mas yang mudah diakses.'
  },
  {
    icon: 'material-symbols:schedule',
    title: 'Proses Cepat',
    description: 'Sistem editing efisien memastikan hasil foto dan video Anda selesai tepat waktu.'
  },
  {
    icon: 'material-symbols:sell',
    title: 'Harga Kompetitif',
    description: 'Paket transparan yang disesuaikan untuk pelajar, keluarga, hingga kebutuhan korporasi.'
  }
]
</script>

<style scoped>

</style>
