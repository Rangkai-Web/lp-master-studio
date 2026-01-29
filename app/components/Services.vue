<template>
  <section class="bg-secondary" id="layanan">
    <!-- Services Header -->
    <div class="px-4 lg:px-20 py-16 lg:py-24">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-10">
        <div class="max-w-2xl">
          <h2 class="text-4xl lg:text-5xl font-black mb-6 uppercase text-white font-display">Our Specialized <span class="text-primary italic">Services</span></h2>
          <p class="text-neutral-light text-lg lg:text-xl">Layanan profesional yang dirancang untuk memenuhi ekspektasi visual tertinggi Anda.</p>
        </div>
      </div>
    </div>

    <!-- Main Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 min-h-[300px] lg:min-h-[400px]">
      <div 
        v-for="(service, index) in mainServices" 
        :key="index"
        class="relative overflow-hidden cursor-pointer group"
        @click="openModal(service.id)"
      >
        <!-- Background Image -->
        <div 
          class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          :style="{ backgroundImage: `url('${service.image}')` }"
        ></div>
        
        <!-- Overlay Gradient -->
        <div 
          class="absolute inset-0 transition-opacity duration-500"
          :class="service.overlayClass"
        ></div>
        
        <!-- Content -->
        <div class="relative h-full flex flex-col justify-end p-8 lg:p-10 min-h-[400px] md:min-h-full">
          <h3 class="text-3xl lg:text-4xl font-bold text-white font-display mb-4">{{ service.title }}</h3>
          <button 
            type="button"
            class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            @click.stop="openModal(service.id)"
            :aria-label="`Lihat detail layanan ${service.title}`"
          >
            <Icon name="material-symbols:arrow-outward" class="text-2xl" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Overlay -->
    <Teleport to="body">
      <Transition name="modal">
        <div 
          v-if="activeService" 
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          
          <!-- Modal Content -->
          <div 
            class="relative bg-secondary rounded-2xl w-full max-w-xl max-h-[80vh] overflow-y-auto border border-neutral-light"
            @click.stop
          >
            <!-- Close Button -->
            <button 
              @click="closeModal"
              class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <Icon name="material-symbols:close" class="text-xl" />
            </button>

            <!-- Master Studio Content -->
            <div v-if="activeService === 'master-studio'" class="p-6 lg:p-8">
              <!-- Header -->
              <div class="flex items-center gap-4 mb-6">
                <div class="flex flex-col">
                  <div class="flex">
                    <div class="w-3 h-6 bg-primary transform -skew-x-12"></div>
                    <div class="w-3 h-6 bg-primary transform -skew-x-12 ml-0.5"></div>
                    <div class="w-3 h-6 bg-primary transform -skew-x-12 ml-0.5"></div>
                  </div>
                  <div class="w-10 h-6 bg-primary mt-0.5"></div>
                </div>
                <div>
                  <h3 class="text-xl lg:text-2xl font-black text-white font-display uppercase">Master Studio</h3>
                  <p class="text-neutral-light text-sm">Production House Photo & Video</p>
                </div>
              </div>

              <!-- Description -->
              <p class="text-neutral-light text-sm lg:text-base leading-relaxed mb-6">
                Brand inti yang berperan sebagai "director" dan "heart" dari setiap proyek. Kami adalah wajah pertama yang klien temui dan penjaga kualitas akhir setiap karya.
              </p>

              <!-- Services Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-white text-xs font-medium">Fotografi Profesional</span>
                <span class="px-3 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-white text-xs font-medium">Videografi Cinematic</span>
                <span class="px-3 py-1.5 bg-primary/20 border border-primary/40 rounded-full text-white text-xs font-medium">Drone Photography</span>
              </div>

              <!-- Use Cases -->
              <p class="text-neutral-light/70 text-xs italic">
                Cocok untuk: Prewedding, Wedding, Event, Aftermovie, Dokumenter
              </p>

              <!-- Image -->
               <div class="flex gap-4 mt-6">
                 <NuxtImg
                   src="/img/hero/studio2.webp"
                   alt="Studio Photography"
                   class="w-1/2 h-[200px] rounded-2xl object-cover"
                   loading="lazy"
                   format="webp"
                   :width="300"
                   :height="200"
                 />
                 <NuxtImg
                   src="/img/services/drone.webp"
                   alt="Drone Photography"
                   class="w-1/2 h-[200px] rounded-2xl object-cover"
                   loading="lazy"
                   format="webp"
                   :width="300"
                   :height="200"
                 />
               </div>
            </div>

            <!-- Gallery Booth Content -->
            <div v-if="activeService === 'gallery-booth'" class="p-6 lg:p-8">
              <!-- Header -->
              <div class="flex items-center gap-4 mb-6">
                <div class="flex gap-0.5">
                  <div class="w-3 h-8 bg-[#9333EA] transform -skew-x-12"></div>
                  <div class="w-3 h-8 bg-[#EC4899] transform -skew-x-12"></div>
                  <div class="w-3 h-8 bg-[#14B8A6] transform -skew-x-12"></div>
                </div>
                <h3 class="text-xl lg:text-2xl font-black font-display text-white">
                  Gallery Booth
                </h3>
              </div>

              <!-- Description -->
              <p class="text-neutral-light text-sm lg:text-base leading-relaxed mb-6">
                Spesialis dalam menciptakan "wow factor" dan engagement selama acara berlangsung. Kami menghubungkan brand dengan audiens melalui pengalaman interaktif yang memorable.
              </p>

              <!-- Services Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1.5 bg-[#14B8A6]/20 border border-[#14B8A6]/40 rounded-full text-white text-xs font-medium">Photo Booth</span>
                <span class="px-3 py-1.5 bg-[#EC4899]/20 border border-[#EC4899]/40 rounded-full text-white text-xs font-medium">360° Video Booth</span>
                <span class="px-3 py-1.5 bg-[#9333EA]/20 border border-[#9333EA]/40 rounded-full text-white text-xs font-medium">Event Activation</span>
              </div>

              <!-- Use Cases -->
              <p class="text-neutral-light/70 text-xs italic">
                Cocok untuk: Corporate Event, Wedding, Exhibition, Product Launch
              </p>

              <!-- Image -->
               <div class="flex gap-4 mt-6">
                 <NuxtImg
                   src="/img/services/photo-booth1.webp"
                   alt="Photo Booth Service"
                   class="w-1/2 h-[200px] rounded-2xl object-cover"
                   loading="lazy"
                   format="webp"
                   :width="300"
                   :height="200"
                 />
                 <NuxtImg
                   src="/img/services/photo-booth2.webp"
                   alt="360 Video Booth"
                   class="w-1/2 h-[200px] rounded-2xl object-cover"
                   loading="lazy"
                   format="webp"
                   :width="300"
                   :height="200"
                 />
               </div>
            </div>

            <!-- Photo Collage Content -->
            <div v-if="activeService === 'photo-collage'" class="p-6 lg:p-8">
              <!-- Header -->
              <div class="flex items-center gap-3 mb-6">
                <h3 class="text-xl lg:text-2xl font-black font-display">
                  <span class="text-white">Photo Collage</span>
                  <span class="inline-flex items-center ml-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#EC4899]"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-[#3B82F6] ml-0.5"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-[#EAB308] ml-0.5"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-[#14B8A6] ml-0.5"></span>
                  </span>
                </h3>
              </div>

              <!-- Description -->
              <p class="text-neutral-light text-sm lg:text-base leading-relaxed mb-6">
                Ahli dalam mentransformasi momen digital menjadi physical heirlooms yang bernilai sentimental tinggi. Kami adalah "penjaga kenangan" yang memastikan cerita klien terabadikan dalam bentuk fisik terbaik.
              </p>

              <!-- Services Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1.5 bg-[#EAB308]/20 border border-[#EAB308]/40 rounded-full text-white text-xs font-medium">Wedding Album</span>
                <span class="px-3 py-1.5 bg-[#3B82F6]/20 border border-[#3B82F6]/40 rounded-full text-white text-xs font-medium">Yearbook Design</span>
                <span class="px-3 py-1.5 bg-[#EC4899]/20 border border-[#EC4899]/40 rounded-full text-white text-xs font-medium">Premium Printing</span>
              </div>

              <!-- Use Cases -->
              <p class="text-neutral-light/70 text-xs italic">
                Cocok untuk: Wedding Photo, Family Portrait, Corporate Gift, School Yearbook
              </p>

              <!-- Image -->
               <div class="flex gap-4 mt-6">
                 <NuxtImg
                   src="/img/services/photo-collage1.webp"
                   alt="Wedding Album Design"
                   class="w-1/2 h-[200px] rounded-2xl object-cover"
                   loading="lazy"
                   format="webp"
                   :width="300"
                   :height="200"
                 />
                 <NuxtImg
                   src="/img/services/photo-collage2.webp"
                   alt="Premium Photo Printing"
                   class="w-1/2 h-[200px] rounded-2xl object-cover"
                   loading="lazy"
                   format="webp"
                   :width="300"
                   :height="200"
                 />
               </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const activeService = ref<string | null>(null)

const mainServices = [
  {
    id: 'master-studio',
    title: 'Master Studio',
    image: '/img/services/camera.webp',
    overlayClass: 'bg-gradient-to-t from-black/90 via-black/40 to-black/20'
  },
  {
    id: 'gallery-booth',
    title: 'Gallery Booth',
    image: '/img/services/photo-booth.webp',
    overlayClass: 'bg-gradient-to-t from-black/90 via-black/40 to-transparent'
  },
  {
    id: 'photo-collage',
    title: 'Photo Collage',
    image: '/img/services/photo-collage.webp',
    overlayClass: 'bg-gradient-to-t from-[#F59E0B]/80 via-[#F59E0B]/30 to-transparent'
  }
]

const openModal = (serviceId: string) => {
  activeService.value = serviceId
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  activeService.value = null
  // Restore body scroll
  document.body.style.overflow = ''
}

// Close modal on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && activeService.value) {
      closeModal()
    }
  }
  window.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  })
})
</script>

<style scoped>


.modal-enter-active {
  transition: all 0.3s ease-out;
}

.modal-leave-active {
  transition: all 0.2s ease-in;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}
</style>
