<template>
  <section id="alur-kerja" class="py-16 lg:py-24 px-4 lg:px-20 bg-secondary overflow-hidden">
    <div class="max-w-[1440px] mx-auto">
      <!-- Section Header -->
      <div class="flex justify-center flex-col items-center mb-12 lg:mb-16">
        <div class="w-fit bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          Alur Kerja
        </div>
        <h2 class="text-3xl lg:text-5xl font-black text-white">
          8 Langkah Kerja <span class="text-primary italic">Kami</span>
        </h2>
      </div>

      <!-- Desktop Layout -->
      <div class="hidden lg:block">
        <!-- Row 1: Steps 1-4 -->
        <div class="flex items-stretch gap-0">
          <template v-for="(step, index) in stepsRow1" :key="step.number">
            <!-- Card -->
            <div class="flex-1">
              <div class="workflow-card h-full">
                <div class="flex items-center gap-3 mb-3">
                  <div class="size-12 shrink-0 rounded-full bg-primary flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/30">
                    {{ step.number }}
                  </div>
                  <h3 class="text-lg font-bold text-white">{{ step.title }}</h3>
                </div>
                <p class="text-neutral-light text-sm leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
            <!-- Connector between cards -->
            <div v-if="index < stepsRow1.length - 1" class="flex items-start pt-11">
              <div class="w-4 h-0.5 bg-primary"></div>
            </div>
          </template>
        </div>

        <!-- Curved connector from Row 1 to Row 2 -->
        <div class="flex justify-end pr-36">
          <div class="w-0.5 h-16 bg-primary"></div>
        </div>

        <!-- Row 2: Steps 8-5 (reversed order visually) -->
        <div class="flex items-stretch gap-0">
          <template v-for="(step, index) in stepsRow2Reversed" :key="step.number">
            <!-- Card -->
            <div class="flex-1">
              <div class="workflow-card h-full">
                <div class="flex items-center gap-3 mb-3">
                  <div class="size-12 shrink-0 rounded-full bg-primary flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/30">
                    {{ step.number }}
                  </div>
                  <h3 class="text-lg font-bold text-white">{{ step.title }}</h3>
                </div>
                <p class="text-neutral-light text-sm leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
            <!-- Connector between cards (reversed direction) -->
            <div v-if="index < stepsRow2Reversed.length - 1" class="flex items-start pt-11">
              <div class="w-4 h-0.5 bg-primary"></div>
            </div>
          </template>
        </div>

        <!-- Final Arrow -->
        <div class="flex flex-col items-center mt-6 gap-4">
          <div class="flex items-center gap-2">
            <Icon name="material-symbols:arrow-downward-rounded" class="text-3xl text-primary animate-pulse" />
            <Icon name="material-symbols:arrow-downward-rounded" class="text-3xl text-primary animate-pulse" />
          </div>
          <div class="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-2xl px-6 py-3 animate-pulse">
            <Icon name="material-symbols:camera-rounded" class="text-2xl text-primary" />
            <span class="text-white font-bold">Proyek Selesai!</span>
          </div>
        </div>
      </div>

      <!-- Mobile Layout -->
      <div class="lg:hidden space-y-0">
        <template v-for="(step, index) in allSteps" :key="step.number">
          <div class="workflow-card">
            <div class="flex items-center gap-4 mb-3">
              <div class="size-12 shrink-0 rounded-full bg-primary flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/30">
                {{ step.number }}
              </div>
              <h3 class="text-lg font-bold text-white">{{ step.title }}</h3>
            </div>
            <p class="text-neutral-light text-sm leading-relaxed pl-16">{{ step.description }}</p>
          </div>
          <!-- Vertical connector between cards -->
          <div v-if="index < allSteps.length - 1" class="flex justify-start pl-11">
            <div class="w-0.5 h-6 bg-primary"></div>
          </div>
        </template>

        <!-- Mobile Final Arrow -->
        <div class="flex flex-col items-center gap-4 pt-4">
          <div class="flex items-center gap-2">
            <Icon name="material-symbols:arrow-downward-rounded" class="text-3xl text-primary animate-pulse" />
            <Icon name="material-symbols:arrow-downward-rounded" class="text-3xl text-primary animate-pulse" />
          </div>
          <div class="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-2xl px-5 py-3 animate-pulse">
            <Icon name="material-symbols:camera-rounded" class="text-2xl text-primary" />
            <span class="text-white font-bold text-sm">Proyek Selesai!</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stepsRow1 = [
  {
    number: '01',
    title: 'Konsultasi Kebutuhan',
    description: 'Kami akan mendengarkan semua cerita & kebutuhan Anda.'
  },
  {
    number: '02',
    title: 'Perencanaan',
    description: 'Biarkan kami bantu untuk melakukan perencanaan yang Anda inginkan dengan penawaran yang disesuaikan kebutuhan Anda.'
  },
  {
    number: '03',
    title: 'Persiapan',
    description: 'Kami akan melakukan semua kegiatan dengan persiapan yang matang dari tim dan juga peralatan terbaik kami.'
  },
  {
    number: '04',
    title: 'Eksekusi',
    description: 'Biarkan kami bekerja pada kegiatan Anda, biarkan Anda fokus untuk kelancaran kegiatan dan biarkan kami yang mengabadikan moment acara Anda.'
  }
]

const stepsRow2 = [
  {
    number: '05',
    title: 'Seleksi',
    description: 'Kami memilih moment yang paling indah dan bermakna untuk ditampilkan kepada Anda.'
  },
  {
    number: '06',
    title: 'Editing',
    description: 'Tahap penyempurnaan untuk membuat semua hasil tampak lebih memukau dan sempurna.'
  },
  {
    number: '07',
    title: 'Preview',
    description: 'Konfirmasi & revisi sesuai masukan Anda untuk memastikan hasil sesuai ekspektasi.'
  },
  {
    number: '08',
    title: 'Serah Terima',
    description: 'Hasil final dikemas rapi & premium untuk memastikan kepuasan Anda terhadap layanan kami.'
  }
]

// Reversed for desktop row 2 (shows 08, 07, 06, 05 from left to right)
const stepsRow2Reversed = [...stepsRow2].reverse()

// All steps for mobile (sequential)
const allSteps = [...stepsRow1, ...stepsRow2]
</script>

<style scoped>
.workflow-card {
  padding: 1.25rem;
  background: rgba(19, 20, 21, 0.95);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.workflow-card:hover {
  background: rgba(30, 31, 32, 0.95);
  border-color: rgba(220, 38, 38, 0.3);
  transform: translateY(-2px);
}
</style>
