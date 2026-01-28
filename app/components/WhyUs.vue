<template>
  <section 
    class="px-4 lg:px-20 py-24 bg-secondary"
    id="mengapa-kami"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-4">
          Keunggulan Kami
        </span>
        <h2 class="text-4xl lg:text-5xl font-black uppercase text-white font-display">
          Mengapa Harus <span class="text-primary">Master Studio</span>?
        </h2>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card group"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Icon Container -->
          <div class="feature-icon-wrapper">
            <div class="feature-icon">
              <Icon :name="feature.icon" class="text-2xl text-primary" />
            </div>
            <div class="feature-glow"></div>
          </div>

          <!-- Content -->
          <div class="feature-content">
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-neutral-light text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>

          <!-- Number Badge -->
          <div class="feature-number">
            {{ String(index + 1).padStart(2, '0') }}
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <div class="inline-flex flex-col sm:flex-row items-center gap-4">
          <NuxtLink 
            to="/reservasi"
            class="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
          >
            Reservasi Sekarang
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'material-symbols:diamond-outline',
    title: 'Spesialis Momen, Bukan Sekadar',
    description: 'Kami tidak hanya mengambil gambar, tapi menangkap esensi dan emosi dari setiap momen berharga Anda.'
  },
  {
    icon: 'material-symbols:favorite-outline',
    title: 'Pendekatan Humanis & Penuh Empati',
    description: 'Tim kami memahami pentingnya momen Anda dan bekerja dengan penuh empati untuk hasil yang autentik.'
  },
  {
    icon: 'material-symbols:package-2-outline',
    title: 'Paket All-in-One yang Menyeluruh',
    description: 'Dari dokumentasi hingga editing, semua kebutuhan Anda tersedia dalam satu paket lengkap.'
  },
  {
    icon: 'material-symbols:bolt-outline',
    title: 'Proses Cepat & Hasil Maksimal',
    description: 'Waktu pengerjaan yang efisien tanpa mengorbankan kualitas hasil akhir yang profesional.'
  },
  {
    icon: 'material-symbols:camera-outline',
    title: 'Peralatan Profesional & Tim Berpengalaman',
    description: 'Didukung peralatan terkini dan tim yang telah berpengalaman menangani berbagai event.'
  },
  {
    icon: 'material-symbols:wallet',
    title: 'Nilai Terbaik dengan Budget Terjangkau',
    description: 'Layanan premium dengan harga yang kompetitif, memberikan nilai terbaik untuk investasi Anda.'
  }
]
</script>

<style scoped>
/* Feature Card */
.feature-card {
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.4s ease;
  overflow: hidden;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: rgba(220, 38, 38, 0.3);
  box-shadow: 0 20px 40px -12px rgba(220, 38, 38, 0.2);
}

.feature-card:hover::before {
  opacity: 1;
}

/* Icon Wrapper */
.feature-icon-wrapper {
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
}

.feature-icon {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.2) 0%, rgba(220, 38, 38, 0.1) 100%);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 1rem;
  transition: all 0.4s ease;
}

.feature-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover .feature-icon {
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.3) 0%, rgba(220, 38, 38, 0.2) 100%);
  transform: scale(1.1);
}

.feature-card:hover .feature-glow {
  opacity: 1;
}

/* Content */
.feature-content {
  position: relative;
  z-index: 10;
}

/* Number Badge */
.feature-number {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 3rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  line-height: 1;
  transition: all 0.4s ease;
  font-family: var(--font-display);
}

.feature-card:hover .feature-number {
  color: rgba(220, 38, 38, 0.1);
}

/* Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .feature-card {
    padding: 1.5rem;
  }
  
  .feature-icon-wrapper {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }
  
  .feature-number {
    font-size: 2.5rem;
    top: 1rem;
    right: 1rem;
  }
}
</style>
