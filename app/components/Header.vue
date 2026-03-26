<template>
  <header class="fixed w-full z-50 bg-secondary/95 backdrop-blur-md border-b border-[#181411]/5  px-4 md:px-6 lg:px-20 will-change-transform">
    <div class="max-w-[1440px] mx-auto flex items-center justify-between">
      <!-- Left Navigation (Desktop) -->
      <div class="flex-1 hidden md:flex gap-8 items-center">
        <nav class="flex gap-8 text-sm font-medium tracking-wide uppercase">
          <template v-for="link in navLinksLeft" :key="link.label">
            <button
              v-if="link.type === 'section'"
              @click="scrollToSection(link.id)"
              class="navigation-link transition-colors"
            >
              {{ link.label }}
            </button>
          </template>
        </nav>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        type="button"
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden flex items-center justify-center size-10 rounded-lg hover:bg-white/10 transition-colors"
        :aria-label="isMenuOpen ? 'Tutup menu' : 'Buka menu'"
        aria-controls="mobile-nav"
        :aria-expanded="isMenuOpen"
      >
        <Icon :name="isMenuOpen ? 'material-symbols:close' : 'material-symbols:menu'" class="text-2xl" aria-hidden="true" />
      </button>

      <!-- Logo (Center) -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <NuxtImg
          src="/img/logo.png"
          alt="Master Studio Logo"
          class="w-full h-20 object-contain hover:scale-110 transition-all duration-300"
          loading="eager"
          fetchpriority="high"
          :width="180"
          :height="120"
        />
        <!-- <h1 class="text-lg md:text-xl font-black tracking-tighter uppercase italic">Master Studio</h1> -->
      </NuxtLink>

      <!-- Right Navigation (Desktop) -->
      <div class="flex-1 hidden md:flex justify-end items-center gap-8">
        <nav class="flex gap-8 text-sm font-medium tracking-wide uppercase">
          <template v-for="link in navLinksRight" :key="link.label">
            <NuxtLink
              v-if="link.type === 'route'"
              :to="link.href"
              class="navigation-link transition-colors"
            >
              {{ link.label }}
            </NuxtLink>

            <button
              v-else
              @click="scrollToSection(link.id)"
              class="navigation-link transition-colors"
            >
              {{ link.label }}
            </button>
          </template>
        </nav>
        <NuxtLink 
          to="/reservasi"
          class="bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-110 transition-all duration-300 hover:bg-opacity-90 shadow-lg shadow-primary/20"
        >
          Reservasi
        </NuxtLink>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 border-b border-[#181411]/5 p-6 bg-secondary/95 backdrop-blur-lg shadow-md shadow-secondary/60"
      >
        <nav class="flex flex-col justify-baseline gap-4 mb-6">
          <template v-for="link in allNavLinks" :key="link.label">
            <NuxtLink
              v-if="link.type === 'route'"
              :to="link.href"
              @click="isMenuOpen = false"
              class="navigation-link transition-colors"
            >
              {{ link.label }}
            </NuxtLink>

            <button
              v-else
              @click="() => { scrollToSection(link.id); isMenuOpen = false }"
              class="navigation-link transition-colors text-left"
            >
              {{ link.label }}
            </button>
          </template>
        </nav>
        <NuxtLink 
          to="/reservasi"
          class="flex items-center justify-center w-full bg-primary text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
          @click="isMenuOpen = false"
        >
          Reservasi Sekarang
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

type NavLink =
  | { type: 'section'; id: string; label: string }
  | { type: 'route'; href: string; label: string }

const navLinksLeft: NavLink[] = [
  { type: 'section', id: 'tentang', label: 'Tentang' },
  { type: 'section', id: 'alur-kerja', label: 'Alur Kerja' },
  { type: 'section', id: 'layanan', label: 'Layanan' },
]

const navLinksRight: NavLink[] = [
  { type: 'section', id: 'paket', label: 'Paket' },
  { type: 'route', href: '/portfolio', label: 'Portofolio' }
]

const allNavLinks = [...navLinksLeft, ...navLinksRight]

const route = useRoute()
const router = useRouter()

const scrollToSection = async (id: string) => {
  // kalau bukan di halaman home
  if (route.path !== '/') {
    await router.push('/') // pindah ke home dulu

    // tunggu DOM ready
    await nextTick()

    // kasih delay biar aman (hydration + render)
    setTimeout(() => {
      scrollTo(id)
    }, 100)

    return
  }

  scrollTo(id)
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const yOffset = -100
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.navigation-link {
  position: relative;
  transition: color 0.3s;
  cursor: pointer;
  text-transform: uppercase;
}

.navigation-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -4.5px;
  left: 0;
  background-color: var(--color-red-600);
  transition: width 0.3s;
  z-index: -1;
}

.navigation-link:hover::after {
  width: 100%;
}
</style>
