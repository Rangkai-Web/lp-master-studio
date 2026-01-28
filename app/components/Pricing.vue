<template>
  <section class="px-4 lg:px-20 py-24 bg-secondary" id="paket" >
    <div class="text-center mb-20">
      <h2 class="text-white text-4xl lg:text-6xl font-black mb-6 uppercase font-display">Paket Pilihan</h2>
      <p class="text-neutral-light text-lg max-w-2xl mx-auto">Kami menyediakan berbagai pilihan paket dengan harga yang kompetitif dan kualitas hasil terbaik.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Basic Package -->
      <div class="flex flex-col p-10 bg-secondary rounded-4xl border-2 border-transparent hover:border-primary transition-all group">
        <h3 class="text-2xl font-black text-white mb-2 uppercase font-display">Basic Portrait</h3>
        <p class="text-neutral-light text-sm mb-8">Cocok untuk pas foto, wisuda, atau CV profil.</p>
        <div class="flex items-baseline gap-1 mb-8">
          <span class="text-4xl font-black text-primary">Rp 199k</span>
        </div>
        <ul class="flex flex-col gap-5 mb-10 text-sm">
          <li class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-primary" />
            30 Menit Sesi
          </li>
          <li class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-primary" />
            5 Foto Edit
          </li>
          <li class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-primary" />
            All Raw Files (Drive)
          </li>
        </ul>
        <NuxtLink 
          to="/reservasi"
          class="w-full py-4 rounded-xl border-2 border-white/10 text-white font-black hover:bg-primary hover:border-primary transition-all uppercase text-center"
        >
          Pilih Paket
        </NuxtLink>
      </div>
      
      <!-- Premium Package (Featured) -->
      <div class="flex flex-col p-10 bg-secondary rounded-4xl border-2 border-primary shadow-2xl lg:scale-105 relative z-10 text-white">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
        <h3 class="text-2xl font-black mb-2 uppercase font-display">Premium Family</h3>
        <p class="text-neutral-light text-sm mb-8">Sempurna untuk mengabadikan momen kebersamaan.</p>
        <div class="flex items-baseline gap-1 mb-8">
          <span class="text-4xl font-black text-primary">Rp 499k</span>
        </div>
        <ul class="flex flex-col gap-5 mb-10 text-sm">
          <li class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-primary" />
            60 Menit Sesi
          </li>
          <li class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-primary" />
            15 Foto Edit
          </li>
          <li class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-primary" />
            1 Cetak Frame 10R
          </li>
          <li class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-primary" />
            Bebas Ganti Backdrop
          </li>
        </ul>
        <NuxtLink 
          to="/reservasi"
          class="w-full py-4 rounded-xl bg-primary text-white font-black hover:bg-red-700 transition-all uppercase shadow-lg shadow-primary/30 text-center"
        >
          Booking Sekarang
        </NuxtLink>
      </div>
      
      <!-- Product Pro Package -->
      <div class="flex flex-col p-10 bg-secondary rounded-4xl border-2 border-transparent hover:border-primary transition-all group">
        <h3 class="text-2xl font-black text-white mb-2 uppercase font-display">Product Pro</h3>
        <p class="text-neutral-light text-sm mb-8">Khusus UMKM dan Bisnis Brand.</p>
        <div class="flex items-baseline gap-1 mb-8">
          <span class="text-4xl font-black text-primary">Rp 750k</span>
        </div>
        <ul class="flex flex-col gap-5 mb-10 text-sm">
          <li class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-primary" />
            Creative Styling
          </li>
          <li class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-primary" />
            10 SKU Produk
          </li>
          <li class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-primary" />
            Model/Talent Option
          </li>
        </ul>
        <NuxtLink 
          to="/reservasi"
          class="w-full py-4 rounded-xl border-2 border-white/10 text-white font-black hover:bg-primary hover:border-primary transition-all uppercase text-center"
        >
          Pilih Paket
        </NuxtLink>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
</script>

<style scoped>

</style>
