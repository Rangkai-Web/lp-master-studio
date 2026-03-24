<template>
  <section class="px-4 lg:px-20 py-8 lg:py-12 mt-20" id="hero">
    <div class="relative flex min-h-[620px] flex-col gap-6 rounded-[2.5rem] items-start justify-center px-8 lg:px-24 overflow-hidden shadow-2xl">
      <!-- Background Image using NuxtImg for better LCP -->
      <NuxtImg
        src="/img/hero/studio6.webp"
        alt="Studio Background"
        class="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
        format="webp"
        quality="80"
      />
      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-linear-to-r from-secondary/95 via-secondary/70 to-secondary/40"></div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col gap-6 max-w-[750px]">
        <h1 class="text-white text-4xl lg:text-7xl font-black leading-[1.1] tracking-tight font-display">
          Foto Studio & Video <br /><span class="text-primary italic">Profesional</span>
        </h1>
        <p class="text-neutral-light text-lg lg:text-xl font-normal leading-relaxed max-w-[600px]">
          Ciptakan karya visual berkualitas tinggi untuk momen personal maupun kebutuhan bisnis Anda bersama Master Studio.
        </p>
        <div class="flex flex-col gap-4 text-white/90 font-medium">
          <div class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-white bg-primary rounded-full p-0.5 text-sm" />
            <span>Fasilitas Studio Berstandar Industri</span>
          </div>
          <div class="flex items-center gap-3">
            <Icon name="material-symbols:check" class="text-white bg-primary rounded-full p-0.5 text-sm" />
            <span>Tim Kreatif Berpengalaman 13+ Tahun</span>
          </div>
        </div>
      </div>
      <div class="relative z-10 flex flex-wrap gap-5 mt-4">
        <NuxtLink 
          to="/reservasi"
          class="flex min-w-[220px] cursor-pointer items-center justify-center rounded-full h-16 px-8 bg-primary text-white text-lg font-black shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-110 transition-all duration-300 uppercase"
        >
          Reservasi Jadwal
        </NuxtLink>
        <NuxtLink 
          to="/#portofolio"
          class="flex min-w-[220px] cursor-pointer items-center justify-center rounded-full h-16 px-8 bg-[#111]/50 text-primary text-lg font-black hover:bg-primary/10 hover:scale-110 transition-all duration-300 uppercase border border-primary"
        >
          Lihat Portofolio
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
