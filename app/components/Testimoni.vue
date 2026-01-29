<template>
  <section id="testimonials" class="py-24 bg-secondary overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-4">
          Apa Kata Mereka
        </span>
        <h2 class="text-4xl lg:text-5xl font-black uppercase text-white font-display">Testimoni Klien</h2>
      </div>
      
      <Carousel
        :items-to-show="1"
        :items-to-scroll="1"
        :wrap-around="true"
        :autoplay="5000"
        :transition="500"
        :breakpoints="breakpoints"
        class="testimonials-carousel"
      >
        <Slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <NuxtImg
              :src="testimonial.img"
              :alt="testimonial.name"
              class="w-full max-w-md h-auto object-contain rounded-md"
              draggable="false"
              loading="lazy"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    img: '/img/testimoni/testimoni1.webp',
    name: 'Kak Ketty',
  },
  {
    img: '/img/testimoni/testimoni2.webp',
    name: 'Kak Tia',
  },
  {
    img: '/img/testimoni/testimoni3.webp',
    name: 'Diah Qudsiyah',
  },
]

const breakpoints = {
  1024: {
    itemsToShow: 3,
    itemsToScroll: 1,
  },
}
</script>

<style scoped>
.testimonials-carousel {
  padding: 2rem 0;
}

.testimonial-card {
  height: 44rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-top: 8px solid;
  border-bottom: 8px solid;
  border-color: var(--color-primary, #dc2626);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  margin: 0 0.5rem;
}

@media (min-width: 768px) {
  .testimonial-card {
    padding: 2rem;
  }
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
  background-color: var(--color-secondary, #1a1a1a);
  transform: scale(1.1);
}

:deep(.carousel__pagination) {
  margin-top: 2rem;
}

:deep(.carousel__pagination-button) {
  background-color: var(--color-primary, #dc2626);
  opacity: 0.3;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 4px;
  transition: all 0.3s;
}

:deep(.carousel__pagination-button--active) {
  opacity: 1;
  width: 30px;
  border-radius: 5px;
}
</style>
