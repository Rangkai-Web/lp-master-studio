<template>
  <section class="px-4 lg:px-20 py-24 bg-secondary" id="location">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="flex flex-col justify-center">
        <div class="w-fit bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          Find Us
        </div>
        <h2 class="text-white text-4xl lg:text-5xl font-black mb-10 leading-tight uppercase font-display">Visit Our <span class="text-primary italic">Professional</span> Studios</h2>
        <div class="space-y-10">
          <div class="flex gap-6 items-start group">
            <div class="size-14 rounded-2xl bg-surface text-white flex items-center justify-center group-hover:bg-primary transition-colors border border-white/5">
              <Icon name="material-symbols:location-on" class="text-3xl" />
            </div>
            <div>
              <h4 class="text-white font-black text-xl uppercase tracking-wide font-display">Master Studio Foto Cikampek</h4>
              <p class="text-neutral-light text-sm mt-2 leading-relaxed">Jl. Ahmad Yani No. 123, Cikampek Kota, Karawang.<br/>Dekat Stasiun Cikampek & Pasar Baru.</p>
              <!-- <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-primary text-xs font-bold mt-4 hover:underline"
              >
                OPEN IN GOOGLE MAPS 
                <Icon name="material-symbols:open-in-new" class="text-xs" />
              </a> -->
            </div>
          </div>
          <div class="bg-surface py-4 px-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
            <div>
              <p class="text-white font-black text-lg font-display text-center md:text-left">Master Studio</p>
              <p class="text-neutral-light text-xs uppercase tracking-widest font-bold text-center md:text-left">Production House Photo & Video</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/UGs6HxuSF5qANBt57" 
              target="_blank" 
              rel="noopener noreferrer"
              class="bg-primary text-white px-8 py-3 rounded-full font-black text-xs hover:bg-red-700 transition-all uppercase"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <div class="rounded-[3rem] overflow-hidden min-h-[500px] relative border-8 border-surface shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4698.076933573312!2d107.4380401!3d-6.397813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6973ba89330937%3A0xd35114a2d29497b7!2sMaster%20Studio%20Foto%20Cikampek!5e1!3m2!1sid!2sid!4v1769442013343!5m2!1sid!2sid"
          width="100%"
          height="550"
          :allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
