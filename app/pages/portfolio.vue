<template>
  <div class="bg-secondary min-h-screen">
    <!-- Simple Header / Hero -->
    <section class="pt-32 pb-16 px-4 lg:px-20 text-center">
      <div class="max-w-4xl mx-auto flex flex-col gap-6">
        <span class="text-primary font-bold uppercase tracking-widest text-sm">Portofolio Kami</span>
        <h1 class="text-5xl lg:text-7xl font-black text-white font-display uppercase italic">Kumpulan <span class="text-primary">Karya</span> Terbaik</h1>
        <p class="text-neutral-light text-lg max-w-2xl mx-auto">
          Eksplor setiap momen yang telah kami abadikan dengan dedikasi dan kualitas profesional terbaik dari Master Studio.
        </p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="pb-24 px-4 lg:px-20">
      <div class="flex flex-col gap-12">
        <!-- Filters -->
        <div class="flex flex-wrap justify-center gap-2 md:gap-3" role="group" aria-label="Filter portfolio">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            type="button"
            @click="setFilter(filter.value)"
            :class="[
              'px-4 md:px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer',
              activeFilter === filter.value 
                ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                : 'border border-white/20 text-neutral-light hover:bg-white/10 hover:border-white/40'
            ]"
            :aria-pressed="activeFilter === filter.value"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Portfolio Grid -->
        <div class="portfolio-grid">
          <div 
            v-for="(item, index) in paginatedItems" 
            :key="item.id"
            :class="['portfolio-item', 'fade-in']"
            :style="{ animationDelay: `${index * 0.05}s` }"
            @click="openLightbox(item)"
          >
            <NuxtImg 
              :src="item.img" 
              :alt="`Portfolio ${item.cat} - Master Studio`"
              loading="lazy"
              format="webp"
              quality="80"
              sizes="50vw sm:50vw md:50vw lg:33vw xl:25vw"
              class="portfolio-image"
            />
            <div class="portfolio-overlay">
              <div class="flex flex-col items-center gap-2">
                <Icon name="material-symbols:visibility" class="text-4xl text-white" />
                <span class="text-white text-xs font-bold uppercase tracking-widest">{{ getCategoryLabel(item.cat) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="paginatedItems.length === 0" class="py-20 text-center">
          <Icon name="material-symbols:image-not-supported-outline" class="text-6xl text-white/20 mb-4" />
          <p class="text-neutral-light">Maaf, belum ada karya di kategori ini.</p>
          <button @click="setFilter('all')" class="mt-4 text-primary font-bold hover:underline cursor-pointer">Lihat Semua Karya</button>
        </div>

        <!-- Load More -->
        <div v-if="hasMore" class="flex justify-center mt-8">
          <button 
            type="button"
            @click="loadMore"
            class="px-10 py-4 rounded-full border border-white/30 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-3 cursor-pointer group"
          >
            <span>Lihat Lebih Banyak</span>
            <span class="text-primary group-hover:scale-110 transition-transform">({{ remainingCount }})</span>
            <Icon name="material-symbols:expand-more" class="text-xl group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div 
          v-if="selectedImage" 
          class="lightbox-overlay"
          @click="closeLightbox"
        >
          <button class="lightbox-close" @click.stop="closeLightbox">
            <Icon name="material-symbols:close" class="text-2xl" />
          </button>
          
          <button 
            class="lightbox-nav lightbox-prev"
            @click.stop="navigateLightbox(-1)"
            :disabled="currentIndex === 0"
          >
            <Icon name="material-symbols:chevron-left" class="text-3xl" />
          </button>
          
          <div class="lightbox-content" @click.stop>
            <NuxtImg 
              :src="selectedImage.img" 
              class="lightbox-image"
              format="webp"
            />
            <div class="lightbox-info">
              <span class="lightbox-category">{{ getCategoryLabel(selectedImage.cat) }}</span>
              <span class="lightbox-counter">{{ currentIndex + 1 }} / {{ paginatedItems.length }}</span>
            </div>
          </div>

          <button 
            class="lightbox-nav lightbox-next"
            @click.stop="navigateLightbox(1)"
            :disabled="currentIndex === paginatedItems.length - 1"
          >
            <Icon name="material-symbols:chevron-right" class="text-3xl" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type { PortfolioItem } from '~/composables/usePortfolio'

// Use our new composable
const { activeFilter, paginatedItems, hasMore, remainingCount, loadMore, setFilter } = usePortfolio()

const filters = [
  { value: 'all' as const, label: 'Semua' },
  { value: 'photostudio' as const, label: 'Photo Studio' },
  { value: 'photobooth' as const, label: 'Photo Booth' },
  { value: 'wedding' as const, label: 'Wedding' },
  { value: 'prewedding' as const, label: 'Pre Wedding' },
  { value: 'engagement' as const, label: 'Engagement' },
  { value: 'maternity' as const, label: 'Maternity' },
  { value: 'graduation' as const, label: 'Graduation' },
  { value: 'event' as const, label: 'Event' },
  { value: 'glasswood' as const, label: 'Glasswood' },
  { value: 'photobox' as const, label: 'Photobox' },
  { value: 'yearbook' as const, label: 'Yearbook' },
  { value: 'collage' as const, label: 'Collage' },
  { value: 'selfphoto' as const, label: 'Self Photo' },
  { value: 'etc' as const, label: 'Lainnya' },
]

const selectedImage = ref<PortfolioItem | null>(null)
const currentIndex = ref(0)

const openLightbox = (item: PortfolioItem) => {
  selectedImage.value = item
  currentIndex.value = paginatedItems.value.findIndex(i => i.id === item.id)
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedImage.value = null
  document.body.style.overflow = ''
}

const navigateLightbox = (direction: number) => {
  const newIndex = currentIndex.value + direction
  if (newIndex >= 0 && newIndex < paginatedItems.value.length) {
    currentIndex.value = newIndex
    selectedImage.value = paginatedItems.value[newIndex] || null
  }
}

const getCategoryLabel = (cat: string) => {
  return filters.find(f => f.value === cat)?.label || cat
}

// SEO
useHead({
  title: 'Portofolio - Master Studio',
  meta: [
    { name: 'description', content: 'Kumpulan karya terbaik Master Studio dari berbagai kategori photography dan videography.' }
  ]
})

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (!selectedImage.value) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') navigateLightbox(-1)
    if (e.key === 'ArrowRight') navigateLightbox(1)
  })
})

useSeoMeta({
  title: 'Portofolio - Master Studio',
  description: 'Kumpulan karya terbaik Master Studio dari berbagai kategori photography dan videography.',
  ogTitle: 'Portofolio - Master Studio',
  ogDescription: 'Kumpulan karya terbaik Master Studio dari berbagai kategori photography dan videography.',
  ogImage: '/img/hero/studio1.webp',
  ogUrl: 'https://masterstudio.id/portfolio',
  ogType: 'website',
  robots: 'index, follow',
})
</script>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
}

@media (min-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 280px;
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 320px;
  }
}

.portfolio-item {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.05);
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.portfolio-item:hover .portfolio-image {
  transform: scale(1.1);
}

.portfolio-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(225, 36, 43, 0.95), rgba(0, 0, 0, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

@media (min-width: 768px) {
  .portfolio-item.tall { grid-row: span 2; }
  .portfolio-item.wide { grid-column: span 2; }
}

.fade-in {
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.98);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.lightbox-image {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 1rem;
}

.lightbox-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
}

.lightbox-category {
  background: var(--primary, #E1242B);
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: white;
  cursor: pointer;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  cursor: pointer;
  padding: 1rem;
}

.lightbox-nav:disabled { opacity: 0.2; cursor: default; }
.lightbox-prev { left: 1rem; }
.lightbox-next { right: 1rem; }

.lightbox-enter-active, .lightbox-leave-active { transition: opacity 0.3s ease; }
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }
</style>
