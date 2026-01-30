<template>
  <section class="px-4 lg:px-20 py-24 bg-secondary mt-8">
    <div class="max-w-6xl mx-auto">
      <div class="bg-surface rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/5">
        <!-- Left Side - Info Panel -->
        <div class="lg:w-2/5 bg-primary p-8 lg:p-12 flex flex-col justify-between text-white">
          <div>
            <h1 class="text-3xl lg:text-4xl font-black mb-4 leading-tight uppercase font-display">Reserve Your Slot</h1>
            <p class="text-white/80 text-base lg:text-lg mb-8">Pilih tanggal dan waktu yang tersedia untuk sesi foto Anda.</p>
            
            <!-- How it works -->
            <div class="space-y-6">
              <h3 class="text-xs font-bold uppercase tracking-widest text-white/50">Cara Booking</h3>
              <div class="space-y-5">
                <div class="flex items-start gap-4">
                  <div class="size-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0 text-sm font-bold">1</div>
                  <div>
                    <h4 class="font-bold font-display text-sm">Pilih Tanggal & Waktu</h4>
                    <p class="text-xs text-white/60">Pilih slot yang tersedia di kalender</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="size-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0 text-sm font-bold">2</div>
                  <div>
                    <h4 class="font-bold font-display text-sm">Isi Data di Google Calendar</h4>
                    <p class="text-xs text-white/60">Lengkapi nama dan email Anda</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="size-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0 text-sm font-bold">3</div>
                  <div>
                    <h4 class="font-bold font-display text-sm">Konfirmasi via WhatsApp</h4>
                    <p class="text-xs text-white/60">Isi form di bawah calendar & kirim</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Benefits -->
            <div class="mt-8 pt-6 border-t border-white/10 space-y-4">
              <div class="flex items-center gap-3">
                <Icon name="material-symbols:check-circle" class="text-white/80" />
                <span class="text-sm text-white/80">Booking cepat & mudah</span>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="material-symbols:check-circle" class="text-white/80" />
                <span class="text-sm text-white/80">Pilih waktu sesuai ketersediaan</span>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="material-symbols:check-circle" class="text-white/80" />
                <span class="text-sm text-white/80">Konfirmasi langsung tanpa menunggu</span>
              </div>
            </div>
          </div>
          
          <div class="mt-8 pt-6 border-t border-white/10">
            <p class="text-white/40 text-xs font-bold uppercase tracking-widest">Butuh Bantuan?</p>
            <a href="https://wa.me/6285155333056" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-lg font-bold mt-2 cursor-pointer hover:underline">
              <Icon name="mdi:whatsapp" class="size-5" />
              +62 851 5533 3056
            </a>
          </div>
        </div>
        
        <!-- Right Side - Calendar Panel -->
        <div class="lg:w-3/5 bg-white relative flex flex-col">
          <!-- Loading State -->
          <div v-if="isLoading" class="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
            <div class="size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
            <p class="text-gray-500 text-sm">Memuat kalender...</p>
          </div>
          
          <!-- Google Calendar Iframe -->
          <iframe
            :src="calendarUrl"
            class="w-full h-[500px] lg:flex-1 lg:min-h-[550px]"
            frameborder="0"
            @load="isLoading = false"
          />
          
          <!-- WhatsApp Confirmation Section -->
          <div class="p-5 bg-linear-to-r from-secondary to-primary">
            <p class="text-white font-bold text-sm mb-3 text-center sm:text-left">Sudah pilih jadwal? Isi data berikut untuk konfirmasi:</p>
            <div class="flex flex-col sm:flex-row gap-3 sm:items-end">
              <div class="flex flex-col gap-2 flex-1">
                <label for="name" class="text-white/80 text-xs font-bold">Nama</label>
                <input 
                  v-model="confirmForm.name"
                  type="text" 
                  placeholder="Nama Anda"
                  class="w-full px-4 py-2.5 rounded-3xl text-sm bg-white text-gray-800 ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div class="flex flex-col gap-2 flex-1 min-w-0">
                <label for="bookingDate" class="text-white/80 text-xs font-bold">Tanggal & Waktu</label>
                <ClientOnly>
                  <VueDatePicker
                    v-model="confirmForm.bookingDate"
                    :enable-time-picker="true"
                    :min-date="new Date()"
                    :format-locale="idLocale"
                    format="dd MMMM yyyy, HH:mm"
                    placeholder="Pilih Tanggal & Waktu"
                    auto-apply
                    :input-class-name="'datepicker-input'"
                    :dark="false"
                  />
                  <template #fallback>
                    <input 
                      type="datetime-local"
                      class="w-full min-w-0 rounded-3xl text-sm bg-white text-gray-800 ring-1 ring-gray-200"
                    />
                  </template>
                </ClientOnly>
              </div>
              <button
                @click="confirmViaWhatsApp"
                :disabled="!confirmForm.name || !confirmForm.bookingDate"
                class="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-2.5 rounded-3xl font-bold text-sm hover:bg-green-50 transition-all hover:scale-105 cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Icon name="mdi:whatsapp" class="size-5" />
                <span class="hidden sm:inline">Konfirmasi</span>
                <span class="sm:hidden">Kirim via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { id as idLocale } from 'date-fns/locale'

useSeoMeta({
  title: 'Reservasi Online - Master Studio Cikampek Karawang',
  description: 'Booking jadwal sesi foto dan video di Master Studio. Reservasi online mudah dan cepat untuk fotografi wedding, wisuda, family portrait, dan event.',
  ogTitle: 'Reservasi Online - Master Studio Cikampek Karawang',
  ogDescription: 'Booking jadwal sesi foto dan video di Master Studio. Reservasi online mudah dan cepat.',
  ogImage: 'https://masterstudio.id/img/og-image.webp',
  ogUrl: 'https://masterstudio.id/reservasi',
  robots: 'index, follow',
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://masterstudio.id/reservasi' }
  ]
})

const isLoading = ref(true)
const calendarUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3DY8gWnejREjq4e4yGAbMZuHK3E1BvBfb51M5Sc-FPtVvifB1VfXc7NtDQW9RTJrDduFC34T-a?gv=true'

const confirmForm = reactive({
  name: '',
  bookingDate: null as Date | null
})

const confirmViaWhatsApp = () => {
  // Format the date nicely
  const formatDate = (dateValue: Date | string | null) => {
    if (!dateValue) return '-'
    const date = dateValue instanceof Date ? dateValue : new Date(dateValue)
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const message = `Halo Master Studio! 👋

  Saya sudah melakukan booking melalui Google Calendar.

  📋 *Detail Booking:*
  • Nama: ${confirmForm.name}
  • Jadwal: ${formatDate(confirmForm.bookingDate)}

  Mohon konfirmasi jadwal saya. Terima kasih! 🙏`

  const whatsappUrl = `https://wa.me/6283105612985?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
  // 6285155333056
  
  // Reset form after sending
  confirmForm.name = ''
  confirmForm.bookingDate = null
}
</script>

<style>
.datepicker-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 1.5rem;
  font-size: 0.875rem;
  background-color: white;
  color: #1f2937;
  border: 1px solid #e5e7eb;
}

.datepicker-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
}

.dp__theme_light {
  --dp-background-color: #ffffff;
  --dp-text-color: #1f2937;
  --dp-primary-color: #dc2626;
  --dp-primary-text-color: #ffffff;
  --dp-border-radius: 1rem;
}

.dp__input {
  padding: 0.45rem 2rem;
  border-radius: 1.5rem;
}
</style>
