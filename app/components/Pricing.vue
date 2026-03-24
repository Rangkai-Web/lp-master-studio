<template>
  <section class="px-4 lg:px-20 py-24 pricing-bg" id="paket" >
    <div class="text-center mb-14">
      <h2 class="text-white text-4xl lg:text-5xl font-black mb-6 uppercase font-display">Paket Pilihan</h2>
      <p class="text-neutral-light text-lg max-w-2xl mx-auto">Kami menyediakan berbagai pilihan paket dengan harga yang kompetitif dan kualitas hasil terbaik.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <template v-for="(item, index) in listPaket" :key="index">
        <div class="flex flex-col p-10 bg-secondary rounded-4xl border-2 border-transparent hover:border-primary transition-all group opacity-80">
          <h3 class="text-2xl font-black text-white mb-2 uppercase font-display">{{ item.name }}</h3>
          <p class="text-neutral-light text-sm mb-8">{{ item.description }}</p>
          <div class="flex items-baseline gap-1 mb-8">
            <span class="text-4xl font-black text-primary">{{ item.price }}</span>
          </div>
          <NuxtImg
            :src="item.img"
            :alt="item.name"
            class="w-full h-[200px] rounded-2xl object-cover mb-8 hover:scale-105 transition-all duration-300"
            loading="lazy"
            format="webp"
          />
          <ul class="flex flex-col gap-5 mb-10 text-sm">
            <li v-for="(feature, index) in item.features" :key="index" class="flex items-center gap-3">
              <Icon name="material-symbols:check" class="text-primary" />
              {{ feature }}
            </li>
          </ul>
          <NuxtLink 
            :to="`/reservasi?package=${item.package}`"
            :class="[
              'w-full py-4 rounded-xl border-2 border-white/10 text-white font-black hover:bg-primary hover:border-primary transition-all uppercase text-center',
              index === 1 ? 'bg-primary' : ''
            ]"
          >
            Pilih Paket
          </NuxtLink>
        </div>
      </template>
    </div>
  </section>
</template>


<script setup lang="ts">
const listPaket = [
  {
    name: "Gabooth Aja",
    price: "Rp 1.500K",
    img: '/img/hero/studio1.webp',
    description: "Cocok untuk kamu yang ingin foto sendiri atau berdua.",
    features: [
      "Photobooth Session",
      "3 Jam",
      "Unlimited Print",
      "Strips or postcard 4R",
      "Custom Frame",
      "Free Paper Frame",
      "Free Accessories",
      "Get Soft File",
      "Get GIF Photos",
    ],
    package: 'photo-studio'
  },
  {
    name: "Gabooth Banget",
    price: "Rp 3.000K",
    img: '/img/services/photo-booth1.webp',
    description: "Sempurna untuk mengabadikan momen kebersamaan.",
    features: [
      "Photobooth dan Videobooth 360 Session",
      "4 Jam",
      "Unlimited Print",
      "Strips or postcard 4R",
      "Custom Frame",
      "Free Paper Frame",
      "Free Accessories",
      "Get Soft File",
      "Get GIF Photos",
      "Get Album for Photos",
      "Get Keychain for Souvenir",
    ],
    package: 'photobooth'
  },
  {
    name: "Gabooth Parah",
    price: "Rp 2.500K",
    img: '/img/services/photo-collage1.webp',
    description: "Menikmati sesi foto lebih lama dan lebih banyak",
    features: [
      "Photobooth Session",
      "5 Jam",
      "Unlimited Print",
      "Strips or postcard 4R",
      "Custom Frame",
      "Free Paper Frame",
      "Free Accessories",
      "Get Soft File",
      "Get GIF Photos",
    ],
    package: 'photobox'
  },
];
</script>

<style scoped>
.pricing-bg {
  background-image: 
    linear-gradient(to right, rgba(19, 20, 21, 0.95) 0%, rgba(19, 20, 21, 0.6) 60%, rgba(19, 20, 21, 0.4) 100%), 
    url('/img/others/camera2.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
