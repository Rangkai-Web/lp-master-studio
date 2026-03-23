<template>
  <div class="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-primary selection:text-white">
    
    <!-- 1️⃣ Hero Section (First Impression) -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
      <!-- Background Decorations -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div class="relative max-w-5xl mx-auto text-center z-10">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase italic mb-6">
          Bergabung Bersama <br/>
          <span class="text-primary">Master Studio</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Kami mencari tim yang kreatif, bertanggung jawab, dan siap berkembang bersama. Mulai perjalanan karirmu bersama kami.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="https://docs.google.com/forms/d/e/1FAIpQLSflKUTeDhWaPUdVHwH_aLoCPunffAuT5JN3MFklVNcqI82_cw/viewform?usp=dialog" 
            target="_blank"
            class="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20"
          >
            <span>Lamar Sekarang</span>
            <Icon name="heroicons:arrow-right-20-solid" class="text-lg" />
          </NuxtLink>
          <a href="#posisi" class="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-all duration-300">
            Lihat Lowongan
          </a>
        </div>
      </div>
    </section>

    <!-- 2️⃣ Tentang Perusahaan & 3️⃣ Kenapa Bergabung -->
    <section class="py-20 px-4 bg-[#111]">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <!-- Tentang -->
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            <Icon name="heroicons:information-circle" />
            Tentang Kami
          </div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-6">Mengenal Master Studio</h2>
          <p class="text-gray-400 leading-relaxed text-lg mb-6">
            Master Studio adalah <strong>creative studio</strong> yang fokus memberikan layanan fotografi dan videografi profesional. Dengan berbagai layanan dan klien yang beragam, kami terus menghadirkan karya visual yang memukau.
          </p>
          <p class="text-gray-400 leading-relaxed text-lg">
            Kami percaya bahwa karya terbaik lahir dari tim yang solid, lingkungan yang mendukung, dan kebebasan untuk berekspresi.
          </p>
        </div>

        <!-- Kenapa Bergabung -->
        <div class="bg-[#181411] p-8 md:p-10 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
          
          <h3 class="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
            <Icon name="heroicons:sparkles" class="text-primary text-3xl" />
            Kenapa Memilih Kami?
          </h3>
          <ul class="space-y-6 relative z-10">
            <li class="flex gap-4">
              <div class="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="heroicons:academic-cap" class="text-2xl" />
              </div>
              <div>
                <h4 class="font-bold text-lg">Belajar dari Project Nyata</h4>
                <p class="text-gray-400 text-sm mt-1">Tingkatkan skill kamu dengan mengerjakan berbagai project kreatif dan menantang.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="heroicons:users" class="text-2xl" />
              </div>
              <div>
                <h4 class="font-bold text-lg">Tim yang Suportif</h4>
                <p class="text-gray-400 text-sm mt-1">Bekerja dalam lingkungan kerja yang positif dan penuh dengan orang-orang kreatif.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="heroicons:arrow-trending-up" class="text-2xl" />
              </div>
              <div>
                <h4 class="font-bold text-lg">Kesempatan Berkembang</h4>
                <p class="text-gray-400 text-sm mt-1">Kami mengapresiasi talenta yang mau belajar dan memberikan ruang inovasi seluasnya.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4️⃣ Posisi yang Dibuka -->
    <section id="posisi" class="py-24 px-4 relative bg-posisi">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-black tracking-tighter uppercase italic mb-4">Posisi yang Dibuka</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">Temukan peran yang paling sesuai dengan passion dan keahlianmu bersama kami.</p>
        </div>

        <div class="mt-12 px-2 md:px-0">
          <Carousel
            :items-to-show="1"
            :items-to-scroll="1"
            :wrap-around="true"
            :autoplay="5000"
            :transition="500"
            :breakpoints="breakpoints"
            class="pb-12"
          >
            <Slide v-for="(job, index) in jobOpenings" :key="index">
              <div class="w-full h-full text-left max-w-sm group flex flex-col bg-[#111]/70 p-8 mx-4 rounded-3xl border border-white/5 hover:border-primary/50 transition-all shadow-md hover:shadow-xl">
                <div class="mb-6 flex gap-4 justify-between items-center">
                  <div class="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-3xl">
                    {{ job.icon }}
                  </div>
                  <h3 class="flex-1 text-xl font-bold">{{ job.title }}</h3>
                </div>
                <!-- <span class="text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-gray-200">
                  {{ job.type }}
                </span> -->
                <div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <Icon name="heroicons:map-pin" />
                  <span>{{ job.location }}</span>
                </div>
                <ul class="space-y-3 mb-8 flex-1 text-gray-400 text-sm">
                  <li v-for="(task, i) in job.responsibilities" :key="i" class="flex items-start gap-2">
                    <Icon name="heroicons:check-circle" class="text-primary text-xl shrink-0" />
                    {{ task }}
                  </li>
                </ul>
                <NuxtLink
                  to="https://docs.google.com/forms/d/e/1FAIpQLSflKUTeDhWaPUdVHwH_aLoCPunffAuT5JN3MFklVNcqI82_cw/viewform?usp=dialog" 
                  target="_blank" 
                  class="w-full block text-center bg-white/5 hover:bg-primary hover:text-white text-sm font-bold uppercase tracking-widest py-3 rounded-xl transition-colors mt-auto">
                  Lamar Posisi Ini
                </NuxtLink>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
              <Pagination class="mt-8" />
            </template>
          </Carousel>
        </div>
      </div>
    </section>

    <!-- 5️⃣ Kualifikasi Umum & 6️⃣ Alur Rekrutmen -->
    <section class="py-20 px-4 bg-[#111] border-y border-white/5">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        <!-- Kualifikasi Umum -->
        <div>
          <h2 class="text-3xl font-bold mb-8">Kualifikasi Umum</h2>
          <div class="bg-[#181411] p-8 rounded-3xl border border-white/5 shadow-sm">
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon name="heroicons:check" class="text-lg" />
                </div>
                <span class="font-medium text-gray-300">Pria / Wanita, usia minimal 18 tahun</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon name="heroicons:check" class="text-lg" />
                </div>
                <span class="font-medium text-gray-300">Bertanggung jawab & dedikasi tinggi</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon name="heroicons:check" class="text-lg" />
                </div>
                <span class="font-medium text-gray-300">Mau belajar dan update tren seputar industri kreatif</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon name="heroicons:check" class="text-lg" />
                </div>
                <span class="font-medium text-gray-300">Bisa bekerja dengan baik dalam tim</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Alur Rekrutmen -->
        <div>
          <h2 class="text-3xl font-bold mb-8">Alur Rekrutmen</h2>
          <div class="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-primary/20 before:via-gray-700 before:to-transparent">
            
            <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#111] bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 transition-transform hover:scale-110">
                1
              </div>
              <div class="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#181411] rounded-2xl border border-white/5 shadow-sm">
                <h4 class="font-bold text-lg mb-1">Isi Form Pendaftaran</h4>
                <p class="text-sm text-gray-400">Siapkan CV dan isi formulir pendaftaran.</p>
              </div>
            </div>
            
            <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#111] bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 transition-transform hover:scale-110">
                2
              </div>
              <div class="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#181411] rounded-2xl border border-white/5 shadow-sm">
                <h4 class="font-bold text-lg mb-1">Screening CV</h4>
                <p class="text-sm text-gray-400">Tim kami akan menilai kecocokan profilmu.</p>
              </div>
            </div>

            <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#111] bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 transition-transform hover:scale-110">
                3
              </div>
              <div class="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#181411] rounded-2xl border border-white/5 shadow-sm">
                <h4 class="font-bold text-lg mb-1">Interview & Test</h4>
                <p class="text-sm text-gray-400">Sesi wawancara dan pembuktian skill yang kamu miliki.</p>
              </div>
            </div>

            <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div class="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#111] bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10 transition-transform hover:scale-110">
                4
              </div>
              <div class="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#181411] rounded-2xl border border-white/5 shadow-sm">
                <h4 class="font-bold text-lg mb-1">Pengumuman</h4>
                <p class="text-sm text-gray-400">Selamat! Kamu diterima di Master Studio.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- 8️⃣ FAQ Section -->
    <section class="py-24 px-4 faq-bg">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-center mb-12">Yang Sering Ditanyakan (FAQ)</h2>
        
        <div class="space-y-4">
          <details class="group bg-[#111] rounded-2xl border border-white/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg hover:text-primary transition-colors">
              <span>Apakah harus punya pengalaman profesional?</span>
              <span class="transition group-open:rotate-180">
                <Icon name="heroicons:chevron-down" class="text-xl" />
              </span>
            </summary>
            <div class="p-6 pt-0 text-gray-400">
              Nilai tambah jika kamu sudah memiliki pengalaman, tapi kami juga sangat terbuka untuk fresh graduate atau otodidak yang punya portofolio keren dan tekad yang kuat untuk belajar.
            </div>
          </details>

          <details class="group bg-[#111] rounded-2xl border border-white/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg hover:text-primary transition-colors">
              <span>Apakah ada proses training masa percobaan?</span>
              <span class="transition group-open:rotate-180">
                <Icon name="heroicons:chevron-down" class="text-xl" />
              </span>
            </summary>
            <div class="p-6 pt-0 text-gray-400">
              Ada, akan ada masa adaptasi & pengenalan SOP studio agar kamu bisa secepatnya sejalan dengan ritme standar kerja kami. Jangan khawatir, tim kami sangat suportif mengajarkan hal-hal baru!
            </div>
          </details>

          <details class="group bg-[#111] rounded-2xl border border-white/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg hover:text-primary transition-colors">
              <span>Sistem kerjanya bagaimana? Di studio atau di rumah?</span>
              <span class="transition group-open:rotate-180">
                <Icon name="heroicons:chevron-down" class="text-xl" />
              </span>
            </summary>
            <div class="p-6 pt-0 text-gray-400">
              Posisi kunci tim operasional seperti Fotografer dan Admin bekerja on-site dari studio kami. Beberapa posisi non-reguler bisa dinegosiasikan menyesuaikan kebutuhan dan kesepakatan job desk.
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- 7️⃣ Bottom CTA -->
    <section class="py-24 px-4 relative overflow-hidden bg-primary text-white">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="relative max-w-4xl mx-auto text-center z-10">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic mb-6">
          Siap Bergabung Bersama Kami?
        </h2>
        <p class="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Mulai perjalanan karirmu bersama Master Studio. Jangan lewatkan kesempatan untuk berkembang di lingkungan yang seru.
        </p>
        <NuxtLink
          to="https://docs.google.com/forms/d/e/1FAIpQLSflKUTeDhWaPUdVHwH_aLoCPunffAuT5JN3MFklVNcqI82_cw/viewform?usp=dialog" 
          target="_blank"
          class="inline-flex items-center justify-center gap-2 bg-white text-primary px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-2xl hover:bg-gray-100"
        >
          <span>Lamar Sekarang</span>
          <Icon name="heroicons:paper-airplane-solid" class="text-xl -rotate-45 mb-1" />
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const jobOpenings = [
  {
    title: 'Photographer',
    icon: '📸',
    type: 'Fulltime',
    location: 'On-site',
    responsibilities: [
      'Mengambil foto sesuai arahan & brief',
      'Mengatur konsep lighting & angle yang tepat',
      'Mampu berinteraksi dengan client secara luwes'
    ]
  },
  {
    title: 'Vidiographer',
    icon: '🎥',
    type: 'Fulltime',
    location: 'On-site',
    responsibilities: [
      'Merekam video untuk berbagai keperluan produksi',
      'Menguasai pergerakan kamera dan komposisi',
      'Mampu berkoordinasi dengan tim selama proses shoot'
    ]
  },
  {
    title: 'Editor',
    icon: '💻',
    type: 'Fulltime',
    location: 'On-site',
    responsibilities: [
      'Editing foto/video sesuai standar dan tone brand',
      'Retouching atau color grading secara cermat',
      'Terbiasa dengan software editing (Premiere, LR, Photoshop)'
    ]
  },
  {
    title: 'Admin / Customer Service',
    icon: '📱',
    type: 'Fulltime',
    location: 'On-site',
    responsibilities: [
      'Handle pertanyaan & penjadwalan customer',
      'Berkomunikasi secara ramah dan suportif',
      'Ketelitian dalam pencatatan sistem operasional'
    ]
  },
  {
    title: 'Social Media Management',
    icon: '📲',
    type: 'Fulltime',
    location: 'On-site',
    responsibilities: [
      'Merancang konten kalender (TikTok, Instagram Reels, dll)',
      'Mengelola & membalas interaksi followers',
      'Menganalisis performa konten & engagement'
    ]
  }
];

const breakpoints = {
  768: { itemsToShow: 2, itemsToScroll: 1 },
  1024: { itemsToShow: 3, itemsToScroll: 1 },
}

useHead({
  title: 'Karir - Master Studio',
  meta: [
    { name: 'description', content: 'Siap bergabung bersama Master Studio? Kami mencari tim yang kreatif, bertanggung jawab, dan siap berkembang bersama.' }
  ]
})
</script>

<style scoped>
.faq-bg {
  background-image: 
    linear-gradient(to right, rgba(19, 20, 21, 0.95) 0%, rgba(19, 20, 21, 0.6) 60%, rgba(19, 20, 21, 0.4) 100%), 
    url('/img/hero/studio3.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg-posisi {
  background-image: 
    linear-gradient(to right, rgba(19, 20, 21, 0.95) 0%, rgba(19, 20, 21, 0.6) 60%, rgba(19, 20, 21, 0.4) 100%), 
    url('/img/hero/studio5.webp');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: var(--color-primary, #dc2626);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background-color: #2c1714;
  /* transform: scale(1.1); */
}

:deep(.carousel__pagination) {
  margin-top: 1.5rem;
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