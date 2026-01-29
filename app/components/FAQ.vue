<template>
  <section class="px-4 lg:px-20 py-24 faq-bg" id="faq">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-white text-4xl font-black mb-4 uppercase font-display">Frequently Asked Questions</h2>
        <p class="text-neutral-light">Punya pertanyaan? Mungkin jawaban di bawah ini dapat membantu Anda.</p>
      </div>
      <div class="space-y-4" role="list">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-white/10 bg-secondary/30 backdrop-blur-md rounded-2xl overflow-hidden"
          role="listitem"
        >
          <button 
            type="button"
            @click="toggleFaq(index)"
            class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors group"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
          >
            <span class="font-bold text-lg text-white">{{ faq.question }}</span>
            <Icon 
              name="material-symbols:expand-more" 
              class="text-primary transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === index }"
              aria-hidden="true"
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
              :id="`faq-answer-${index}`"
              class="px-8 py-6 bg-secondary/10 backdrop-blur-md border-t border-white/5"
              role="region"
              :aria-labelledby="`faq-question-${index}`"
            >
              <p class="text-neutral-light">{{ faq.answer }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(0)

const faqs = [
  {
    question: 'Apakah perlu booking terlebih dahulu?',
    answer: 'Sangat disarankan untuk melakukan reservasi minimal 2-3 hari sebelum jadwal yang diinginkan untuk memastikan slot waktu tersedia, terutama di akhir pekan.'
  },
  {
    question: 'Berapa lama proses editing fotonya?',
    answer: 'Standar pengerjaan kami adalah 3-7 hari kerja tergantung jenis paket yang dipilih.'
  },
  {
    question: 'Apakah file mentah diberikan semua?',
    answer: 'Ya, untuk paket tertentu kami memberikan seluruh file mentah (original quality) melalui link Google Drive.'
  },
  {
    question: 'Di mana lokasi persis cabang Master Studio?',
    answer: 'Cabang Cikampek berada di pusat kota dekat Ahmad Yani, dan cabang Karawang berada di kawasan Ruko Galuh Mas.'
  }
]

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
.faq-bg {
  background-image: 
    linear-gradient(to right, rgba(19, 20, 21, 0.95) 0%, rgba(19, 20, 21, 0.6) 60%, rgba(19, 20, 21, 0.4) 100%), 
    url('/img/others/camera3.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
