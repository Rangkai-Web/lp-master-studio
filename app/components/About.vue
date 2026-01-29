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

        <!-- Right Content - Feature Cards -->
        <div class="flex-1 space-y-6">
          <!-- Card 1: Sejarah -->
          <div class="feature-card group">
            <div class="flex items-start gap-5">
              <div class="shrink-0 size-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon name="material-symbols:history-rounded" class="text-3xl text-primary" />
              </div>
              <div class="space-y-2">
                <h3 class="text-xl font-bold text-white">Sejak 2011</h3>
                <p class="text-neutral-light leading-relaxed">
                  Berawal dari satu kamera dan passion yang membara, kini kami tumbuh menjadi keluarga kreatif yang lengkap dengan semangat yang tetap sama.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 2: Visi -->
          <div class="feature-card group">
            <div class="flex items-start gap-5">
              <div class="shrink-0 size-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon name="material-symbols:visibility-rounded" class="text-3xl text-primary" />
              </div>
              <div class="space-y-2">
                <h3 class="text-xl font-bold text-white">Visi Kami</h3>
                <p class="text-neutral-light leading-relaxed">
                  Menjadi partner terpercaya yang tidak hanya mengarsipkan gambar, tetapi benar-benar melestarikan perasaan di balik setiap detik berharga.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Misi -->
          <div class="feature-card group">
            <div class="flex items-start gap-5">
              <div class="shrink-0 size-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon name="material-symbols:target" class="text-3xl text-primary" />
              </div>
              <div class="space-y-2">
                <h3 class="text-xl font-bold text-white">Misi Kami</h3>
                <p class="text-neutral-light leading-relaxed">
                  Kami menegaskan komitmen kami untuk tidak sekadar menjadi vendor, tapi partner yang dipercaya, dengan fokus pada keautentikan dan keabadian kenangan Moment Berharga Anda.
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Posisi Unik -->
          <div class="feature-card group">
            <div class="flex items-start gap-5">
              <div class="flex-shrink-0 size-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon name="material-symbols:star-rounded" class="text-3xl text-primary" />
              </div>
              <div class="space-y-2">
                <h3 class="text-xl font-bold text-white">Spesialis Momen Anda</h3>
                <p class="text-neutral-light leading-relaxed">
                  Dari pernikahan, yearbook sekolah, hingga event penting—kami hadir sebagai mitra yang memahami bahwa yang Anda percayakan adalah momen paling berarti dalam hidup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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

.feature-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(220, 38, 38, 0.15);
  transform: translateX(8px);
}
</style>
