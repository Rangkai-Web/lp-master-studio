<template>
  <section class="px-4 lg:px-20 py-8 lg:py-12 mt-20" id="hero">
    <div class="relative items-start justify-center">
      <!-- Background Slideshow -->
      <Carousel
        :items-to-show="1"
        :items-to-scroll="1"
        :wrap-around="true"
        :autoplay="5000"
        :transition="1000"
        :pause-autoplay-on-hover="true"
        :mouse-drag="true"
        :touch-drag="true"
        :breakpoints="breakpoints"
        class="w-full h-full"
      >
        <Slide v-for="(item, index) in heroImages" :key="index">
          <div class="w-full relative">
            <NuxtImg
              :src="item.img"
              alt="Studio Background"
              class="w-full h-168 object-cover rounded-[2.5rem] shadow-2xl"
              loading="eager"
              :fetchpriority="index === 0 ? 'high' : 'auto'"
              format="webp"
              quality="80"
            />

            <!-- Overlay Gradient -->
            <div class="absolute inset-0 z-10 bg-linear-to-b from-secondary/80 via-secondary/40 to-secondary/80 md:bg-linear-to-r md:from-secondary/95 md:via-secondary/75 md:to-secondary/40"></div>

            <!-- Content -->
            <div class="absolute inset-0 z-10 flex flex-col items-center md:items-start justify-center text-center md:text-left px-6 md:px-24">
              <div class="flex flex-col gap-6 md:gap-8 max-w-[800px]">
                <h1 class="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight font-display">
                  Foto Studio & Video <br /><span class="text-primary italic">Profesional</span>
                </h1>
                <p class="text-neutral-light text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-[600px]">
                  Ciptakan karya visual berkualitas tinggi untuk momen personal maupun kebutuhan bisnis Anda bersama Master Studio.
                </p>
                <div class="hidden md:flex flex-col gap-4 text-white/90 font-medium">
                  <div class="flex items-center gap-3">
                    <Icon name="material-symbols:check" class="text-white bg-primary rounded-full p-0.5 text-xs md:text-base" />
                    <span>Fasilitas Studio Berstandar Industri</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <Icon name="material-symbols:check" class="text-white bg-primary rounded-full p-0.5 text-xs md:text-base" />
                    <span>Tim Kreatif Berpengalaman 13+ Tahun</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 w-full sm:w-auto">
                <NuxtLink 
                  to="/reservasi"
                  class="flex min-w-[220px] cursor-pointer items-center justify-center rounded-full h-14 md:h-16 px-8 bg-primary text-white text-lg font-black shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-110 transition-all duration-300 uppercase"
                >
                  Reservasi Jadwal
                </NuxtLink>
                <NuxtLink 
                  to="/portfolio"
                  class="flex min-w-[220px] cursor-pointer items-center justify-center rounded-full h-14 md:h-16 px-8 bg-[#111]/50 text-white md:text-primary text-lg font-black hover:bg-primary/10 hover:scale-110 transition-all duration-300 uppercase border border-white/20 md:border-primary"
                >
                  Lihat Portofolio
                </NuxtLink>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <!-- <Navigation /> -->
          <Pagination class="" />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroImages = [
  {
    img: '/img/hero/studio6.webp'
  },
  {
    img: '/img/gallery/master-studio/photo-studio/photostudio17.webp'
  },
  {
    img: '/img/gallery/portrait-collage/photobox/photobox19.webp'
  },
  {
    img: '/img/gallery/gallery-booth/self-photo/self-photo27.webp'
  },
];

const breakpoints = {
  1024: {
    itemsToShow: 1,
    itemsToScroll: 1,
  },
}
</script>

<style scoped>
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--color-primary, #dc2626);
  color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 50;
  margin: 0 20px;
}

:deep(.carousel__prev) {
  left: 5px;
}

:deep(.carousel__next) {
  right: 5px;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: #2c1714;
  /* transform: scale(1.1); */
}

:deep(.carousel__pagination) {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 0 !important;
  margin: 0 !important;
  width: auto !important;
  list-style: none !important;
}

:deep(.carousel__pagination-button) {
  background-color: var(--color-primary, #dc2626);
  opacity: 0.3;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  transition: all 0.3s;
}

:deep(.carousel__pagination-button--active) {
  opacity: 1;
  width: 24px;
  border-radius: 4px;
}
</style>
