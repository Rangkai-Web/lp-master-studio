// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    'vue3-carousel-nuxt'
  ],

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },

  fonts: {
    families: [
      { name: 'Poppins', weights: [400, 500, 600, 700, 800, 900] },
      { name: 'Inter', weights: [300, 400, 500, 600, 700] }
    ]
  },

  icon: {
    serverBundle: 'remote'
  },

  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpeg'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
        class: 'dark'
      },
      title: 'Master Studio - Foto & Video Profesional Cikampek Karawang',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5' },
        { name: 'description', content: 'Studio foto dan video profesional terbaik di Cikampek, Karawang. Layanan fotografi produk, video cinematic, wisuda, wedding, prewedding, dan creative agency terpercaya sejak 2011.' },
        { name: 'keywords', content: 'studio foto cikampek, studio foto karawang, jasa foto wedding, foto wisuda, video cinematic, prewedding, fotografi produk, master studio' },
        { name: 'author', content: 'Master Studio' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1' },
        { name: 'theme-color', content: '#E1242B' },
        { name: 'msapplication-TileColor', content: '#E1242B' },
        { name: 'geo.region', content: 'ID-JB' },
        { name: 'geo.placename', content: 'Cikampek, Karawang' },
        { name: 'geo.position', content: '-6.4197;107.4577' },
        { name: 'ICBM', content: '-6.4197, 107.4577' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/logo.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/logo-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/logo-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://masterstudio.id' },
        // Preconnect for external resources
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // DNS Prefetch
        { rel: 'dns-prefetch', href: 'https://www.google.com' },
        { rel: 'dns-prefetch', href: 'https://maps.googleapis.com' }
      ]
    } as any
  },

  site: {
    url: 'https://masterstudio.id',
    name: 'Master Studio',
    description: 'Studio foto dan video profesional terbaik di Cikampek, Karawang. Layanan fotografi produk, video cinematic, wisuda, wedding, prewedding, dan creative agency terpercaya sejak 2011.',
    defaultLocale: 'id'
  },

  // SEO Module Configuration
  sitemap: {
    strictNuxtContentPaths: true,
    xsl: false,
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    }
  },

  robots: {
    allow: ['/'],
    sitemap: 'https://masterstudio.id/sitemap.xml'
  },

  ogImage: {
    enabled: true,
    defaults: {
      component: 'NuxtSeo',
      width: 1200,
      height: 630
    }
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'Master Studio',
      logo: 'https://masterstudio.id/img/logo.png',
      image: 'https://masterstudio.id/img/og-image.webp',
      url: 'https://masterstudio.id',
      telephone: '+6283105612985',
      email: 'contact@masterstudio.id',
      address: {
        streetAddress: 'Jl. Jend Ahmad Yani, Ds.Dawuan Tengah, Kec.Cikampek',
        addressLocality: 'Karawang',
        addressRegion: 'Jawa Barat',
        postalCode: '41373',
        addressCountry: 'ID'
      },
      geo: {
        latitude: -6.4197,
        longitude: 107.4577
      },
      openingHours: 'Mo-Su 09:00-21:00',
      priceRange: '$$'
    }
  },

  linkChecker: {
    enabled: false
  }
})
