<template>
  <footer class="bg-secondary border-t border-white/5 text-white px-4 lg:px-20 py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
      <!-- Logo & Description -->
      <div class="col-span-1">
        <NuxtLink to="/" class="flex justify-start">
          <NuxtImg
            src="/img/logo.png"
            alt="Master Studio Logo"
            class="h-20 object-contain hover:scale-110 transition-all duration-300 -ml-6"
            loading="lazy"
          />
        </NuxtLink>
        <p class="text-neutral-light text-sm leading-relaxed mt-4 mb-8 opacity-70">
          Master Studio adalah partner visual terpercaya Anda. Ahli dalam menangkap momen berharga dan membangun citra profesional sejak 2013.
        </p>
        <div class="flex gap-4">
          <a 
            v-for="social in socials" 
            :key="social.icon"
            :href="social.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="size-11 rounded-full bg-surface flex items-center justify-center hover:bg-primary transition-all border border-white/5"
            :aria-label="social.label"
            :title="social.label"
          >
            <Icon :name="social.icon" class="text-lg" aria-hidden="true" />
          </a>
        </div>
      </div>
      
      <!-- Quick Links -->
      <div>
        <h4 class="font-black text-lg mb-8 uppercase tracking-widest border-b border-primary w-fit pr-4 font-display">Quick Links</h4>
        <ul class="flex flex-col gap-5 text-neutral-light text-sm">
          <li v-for="link in quickLinks" :key="link.href">
            <NuxtLink :to="link.href" class="hover:text-primary transition-colors">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Our Services -->
      <div>
        <h4 class="font-black text-lg mb-8 uppercase tracking-widest border-b border-primary w-fit pr-4 font-display">Our Services</h4>
        <ul class="flex flex-col gap-5 text-neutral-light text-sm">
          <li v-for="(service, index) in services" :key="index">
            {{ service.label }}
          </li>
        </ul>
      </div>
      
      <!-- Contact Info -->
      <div>
        <h4 class="font-black text-lg mb-8 uppercase tracking-widest border-b border-primary w-fit pr-4 font-display">Contact Info</h4>
        <ul class="flex flex-col gap-5 text-neutral-light text-sm">
          <li class="flex items-center gap-4">
            <Icon name="material-symbols:phone-iphone" class="text-primary" />
            <span class="flex-1">+62 851 5533 3056</span>
          </li>
          <li class="flex items-center gap-4">
            <Icon name="material-symbols:mail" class="text-primary" />
            <span class="flex-1">fiqrifakhrudin@gmail.com</span>
          </li>
          <li class="flex items-center gap-4">
            <Icon name="material-symbols:location-on" class="text-primary" />
            <span class="flex-1">Jl. Jend Ahmad Yani, Ds.Dawuan Tengah, Kec.Cikampek, Kab.Karawang, Jawa Barat</span>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Copyright -->
    <div class="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6">
      <p class="text-neutral-light text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 text-center">
        © {{ new Date().getFullYear() }} MASTER STUDIO - Production House Photo & Video
        <br />
        All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref('')

const socials = [
  { icon: 'mdi:instagram', url: 'https://www.instagram.com/masterstudio.idn/', label: 'Kunjungi Instagram Master Studio' },
  { icon: 'mdi:facebook', url: 'https://www.facebook.com/masterstudio.idn', label: 'Kunjungi Facebook Master Studio' },
  { icon: 'ic:baseline-tiktok', url: 'https://www.tiktok.com/@masterstudio.idn', label: 'Kunjungi TikTok Master Studio' }
]

const services = [
  { label: 'Fotografi Profesional' },
  { label: 'Videografi Cinematic' },
  { label: 'Drone Photography' },
  { label: 'Gallery Booth' },
  { label: 'Event Photography' },
]

const quickLinks = [
  { href: '/#beranda', label: 'Beranda' },
  { href: '/#layanan', label: 'Layanan Foto & Video' },
  { href: '/#paket', label: 'Pilihan Paket Harga' },
  { href: '/#galeri', label: 'Portfolio Terbaru' },
  { href: '/#faq', label: 'Tanya Jawab (FAQ)' }
]
</script>

<style scoped>

</style>
