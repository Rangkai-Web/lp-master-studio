<template>
  <section 
    class="px-4 lg:px-20 py-24 bg-secondary" 
    id="portofolio"
  >
    <div class="flex flex-col gap-12">
      <!-- Header with filters -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 class="text-4xl lg:text-5xl font-black uppercase text-white font-display">Our Masterpiece</h2>
        <div class="flex flex-wrap justify-center gap-2 md:gap-3" role="group" aria-label="Filter portfolio">
          <button 
            v-for="filter in filters" 
            :key="filter.value"
            type="button"
            @click="setFilter(filter.value)"
            :class="[
              'px-4 md:px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300',
              activeFilter === filter.value 
                ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                : 'border border-white/20 text-neutral-light hover:bg-white/10 hover:border-white/40'
            ]"
            class="cursor-pointer"
            :aria-pressed="activeFilter === filter.value"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="portfolio-grid">
        <div 
          v-for="(item, index) in paginatedItems" 
          :key="item.id"
          :class="['portfolio-item', 'fade-in']"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="openLightbox(item)"
        >
          <NuxtImg 
            :src="item.img" 
            :alt="`Foto ${item.cat} - Master Studio Gallery ${item.id}`"
            loading="lazy"
            format="webp"
            quality="75"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            class="portfolio-image"
          />
          <div class="portfolio-overlay">
            <Icon name="material-symbols:visibility" class="text-4xl text-white" />
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div v-if="hasMore" class="flex justify-center">
        <button 
          type="button"
          @click="loadMore"
          class="px-8 py-3 rounded-full border border-white/30 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
          aria-label="Muat lebih banyak gambar portfolio"
        >
          <span>Lihat Lebih Banyak</span>
          <span class="text-primary">({{ remainingCount }})</span>
          <Icon name="material-symbols:expand-more" class="text-xl" aria-hidden="true" />
        </button>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div 
          v-if="selectedImage" 
          class="lightbox-overlay"
          @click="closeLightbox"
        >
          <button 
            class="lightbox-close"
            @click.stop="closeLightbox"
            aria-label="Close lightbox"
          >
            <Icon name="material-symbols:close" class="text-2xl" />
          </button>
          
          <!-- Navigation Arrows -->
          <button 
            class="lightbox-nav lightbox-prev"
            @click.stop="navigateLightbox(-1)"
            :disabled="currentIndex === 0"
            aria-label="Previous image"
          >
            <Icon name="material-symbols:chevron-left" class="text-3xl" />
          </button>
          
          <div class="lightbox-content" @click.stop>
            <NuxtImg 
              :src="selectedImage.img" 
              :alt="`Gallery item ${selectedImage.id}`"
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
            aria-label="Next image"
          >
            <Icon name="material-symbols:chevron-right" class="text-3xl" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import type { GalleryItem } from '~/composables/useGallery'

const { activeFilter, paginatedItems, hasMore, remainingCount, loadMore, setFilter } = usePortfolio()

const filters = [
  { value: 'all' as const, label: 'Semua' },
  { value: 'wedding' as const, label: 'Wedding' },
  { value: 'company' as const, label: 'Company' },
  { value: 'graduation' as const, label: 'Graduation' },
  { value: 'event' as const, label: 'Event' },
]

const selectedImage = ref<GalleryItem | null>(null)
const currentIndex = ref(0)

const openLightbox = (item: GalleryItem) => {
  selectedImage.value = item
  currentIndex.value = paginatedItems.value.findIndex((i: any) => i.id === item.id)
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
    selectedImage.value = paginatedItems.value[newIndex] ?? null
  }
}

const getCategoryLabel = (cat: string) => {
  const filter = filters.find(f => f.value === cat)
  return filter?.label || cat
}

// Keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
  if (!selectedImage.value) return
  
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') navigateLightbox(-1)
  if (e.key === 'ArrowRight') navigateLightbox(1)
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>


/* Portfolio Grid - Responsive */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 180px;
  gap: 0.75rem;
}

@media (min-width: 640px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 220px;
    gap: 1rem;
  }
}

@media (min-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 250px;
    gap: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 280px;
    gap: 1.5rem;
  }
}

/* Portfolio Item */
.portfolio-item {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  cursor: pointer;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-item:hover .portfolio-image {
  transform: scale(1.1);
}

.portfolio-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(220, 38, 38, 0.9), rgba(220, 38, 38, 0.7));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

/* Tall & Wide variants */
@media (min-width: 768px) {
  .portfolio-item.tall {
    grid-row: span 2;
  }

  .portfolio-item.wide {
    grid-column: span 2;
  }
}

/* Fade in animation for items */
.fade-in {
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 0.5rem;
}

.lightbox-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: white;
  font-size: 0.875rem;
}

.lightbox-category {
  background: var(--primary, #B87333);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}

.lightbox-counter {
  color: rgba(255, 255, 255, 0.7);
}

.lightbox-close {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100000;
}

.lightbox-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.lightbox-nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100000;
}

.lightbox-nav:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.2);
}

.lightbox-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.lightbox-prev {
  left: 1rem;
}

.lightbox-next {
  right: 1rem;
}

/* Lightbox Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-active .lightbox-content,
.lightbox-leave-active .lightbox-content {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from .lightbox-content,
.lightbox-leave-to .lightbox-content {
  transform: scale(0.9);
  opacity: 0;
}

/* Mobile Responsive Lightbox */
@media (max-width: 640px) {
  .lightbox-close {
    top: 0.75rem;
    right: 0.75rem;
    width: 40px;
    height: 40px;
  }

  .lightbox-nav {
    width: 40px;
    height: 40px;
  }

  .lightbox-prev {
    left: 0.5rem;
  }

  .lightbox-next {
    right: 0.5rem;
  }

  .lightbox-info {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
