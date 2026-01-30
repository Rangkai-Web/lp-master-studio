<template>
  <section id="tentang" class="py-16 lg:py-24 px-4 lg:px-20 bg-secondary">
    <div class="max-w-[1440px] mx-auto">
      <!-- Section Header -->
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <!-- Left Content -->
        <div class="flex-1 space-y-8">
          <div class="space-y-4">
            <div class="w-fit bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              Tentang Kami
            </div>
            <h2 class="text-3xl lg:text-5xl font-black leading-tight text-white">
              Mengabadikan Momen dengan <span class="text-primary italic">Hati & Kejujuran</span>
            </h2>
          </div>
          
          <p class="text-neutral-light text-lg leading-relaxed">
            Kami bukan sekadar mengambil gambar. Kami adalah pencerita visual yang percaya bahwa 
            <strong class="text-white">magic terbesar</strong> terletak pada momen paling autentik—tawa yang lepas, 
            pelukan yang hangat, atau air mata yang tulus. Itulah yang kami sebut <em class="text-primary">"estetika keaslian"</em>.
          </p>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-6 pt-4">
            <div class="stat-card">
              <div class="text-4xl lg:text-5xl font-black text-primary">13+</div>
              <div class="text-neutral-light text-sm uppercase tracking-wider mt-1">Tahun Pengalaman</div>
            </div>
            <div class="stat-card">
              <div class="text-4xl lg:text-5xl font-black text-primary">1000+</div>
              <div class="text-neutral-light text-sm uppercase tracking-wider mt-1">Proyek Selesai</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Accordion -->
        <div class="flex-1 space-y-3">
          <div 
            v-for="(item, index) in aboutItems" 
            :key="index"
            class="accordion-card"
          >
            <button 
              type="button"
              @click="toggleItem(index)"
              class="w-full px-5 py-4 flex items-center gap-4 text-left hover:bg-white/3 transition-colors group"
              :aria-expanded="openIndex === index"
            >
              <div class="shrink-0 size-11 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon :name="item.icon" class="text-2xl text-primary" />
              </div>
              <span class="flex-1 font-bold text-lg text-white">{{ item.title }}</span>
              <Icon 
                name="material-symbols:expand-more" 
                class="text-primary text-xl transition-transform duration-300"
                :class="{ 'rotate-180': openIndex === index }"
              />
            </button>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div 
                v-if="openIndex === index"
                class="px-5 pb-5 pt-2"
              >
                <!-- Regular content -->
                <p v-if="item.content" class="text-neutral-light leading-relaxed pl-15">
                  {{ item.content }}
                </p>
                
                <!-- Mission items (special layout) -->
                <div v-if="item.missions" class="space-y-4 pl-15 mt-2">
                  <div 
                    v-for="(mission, mIndex) in item.missions" 
                    :key="mIndex"
                    class="mission-item"
                  >
                    <div class="flex items-start gap-3">
                      <span class="mission-number shrink-0">{{ String(mIndex + 1).padStart(2, '0') }}</span>
                      <div class="space-y-1.5">
                        <h4 class="font-semibold text-white text-sm">{{ mission.title }}</h4>
                        <p class="text-neutral-light text-sm leading-relaxed">{{ mission.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface MissionItem {
  title: string
  description: string
}

interface AboutItem {
  icon: string
  title: string
  content?: string
  missions?: MissionItem[]
}

const openIndex = ref<number | null>(0)

const aboutItems: AboutItem[] = [
  {
    icon: 'material-symbols:history-rounded',
    title: 'Sejak 2011',
    content: 'Berawal dari satu kamera dan passion yang membara, kini kami tumbuh menjadi keluarga kreatif yang lengkap dengan semangat yang tetap sama.'
  },
  {
    icon: 'material-symbols:visibility-rounded',
    title: 'Visi Kami',
    content: 'Menjadi partner terpercaya yang tidak hanya mengarsipkan gambar, tetapi benar-benar melestarikan perasaan di balik setiap detik berharga.'
  },
  {
    icon: 'material-symbols:target',
    title: 'Misi Kami',
    content: 'Kami menegaskan komitmen kami untuk tidak sekadar menjadi vendor, tapi partner yang dipercaya, dengan fokus pada keautentikan dan keabadian kenangan Moment Berharga Anda.',
    missions: [
      {
        title: 'Menangkap Momen dengan Perasaan, Bukan Hanya Teknis',
        description: 'Kami hadir sebagai "jurnalis visual" untuk cerita Anda. Dengan pendekatan humanis dan empatik, kami memastikan setiap emosi—tawa lepas hingga air mata—terekam natural dan jujur. Kamera adalah alat untuk mengabadikan momen berharga, bukan sekadar gambar.'
      },
      {
        title: 'Menyederhanakan Dokumentasi dengan Layanan All-in-One',
        description: 'Kami menghilangkan kerumitan koordinasi banyak vendor. Dalam satu paket: fotografi, videografi, drone, photobooth, hingga album cetak. Satu tim terkoordinasi, hasil komprehensif—Anda fokus menikmati momen berharga.'
      },
      {
        title: 'Menghadirkan Kenangan Abadi dengan Proses Cepat',
        description: 'Kenangan ingin segera dinikmati dan dibagikan. Dengan proses editing efisien dan standar kualitas tinggi, hasil terbaik dalam waktu optimal. Tidak hanya cepat, tapi penuh makna—investasi kenangan seumur hidup.'
      }
    ]
  },
  {
    icon: 'material-symbols:star-rounded',
    title: 'Spesialis Momen Anda',
    content: 'Dari pernikahan, yearbook sekolah, hingga event penting—kami hadir sebagai mitra yang memahami bahwa yang Anda percayakan adalah momen paling berarti dalam hidup.'
  }
]

const toggleItem = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
.stat-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(220, 38, 38, 0.2);
  transform: translateY(-2px);
}

/* Accordion Styles */
.accordion-card {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  transition: all 0.3s ease;
}

.accordion-card:hover {
  border-color: rgba(220, 38, 38, 0.15);
}

/* Mission Item Styles */
.mission-item {
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  /* border-radius: 0.75rem; */
  border-left: 8px solid rgba(220, 38, 38, 0.3);
  transition: all 0.3s ease;
}

.mission-item:hover {
  background: rgba(255, 255, 255, 0.04);
  border-left-color: rgba(220, 38, 38, 0.6);
}

.mission-number {
  font-size: 0.875rem;
  font-weight: 800;
  color: rgba(220, 38, 38, 0.5);
  line-height: 1.5;
  min-width: 1.5rem;
}
</style>
