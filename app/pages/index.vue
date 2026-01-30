<template>
  <div>
    <Hero />
    <About />
    <LazyServices />
    <LazyWorkFlow />
    <LazyPricing />
    <LazyGallery />
    <LazyWhyUs />
    <LazyTestimoni />
    <LazyLocation />
    <LazyFAQ />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Master Studio - Studio Foto & Video Profesional Cikampek Karawang',
  description: 'Studio foto dan video profesional terbaik di Cikampek, Karawang. Layanan fotografi produk, video cinematic, wisuda, wedding, prewedding, dan creative agency terpercaya sejak 2011.',
  ogTitle: 'Master Studio - Studio Foto & Video Profesional Cikampek Karawang',
  ogDescription: 'Studio foto dan video profesional terbaik di Cikampek, Karawang. Layanan fotografi produk, video cinematic, wisuda, wedding, prewedding, dan creative agency.',
  ogImage: 'https://masterstudio.id/img/og-image.webp',
  ogUrl: 'https://masterstudio.id',
  ogType: 'website',
  ogSiteName: 'Master Studio',
  ogLocale: 'id_ID',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Master Studio - Studio Foto & Video Profesional',
  twitterDescription: 'Studio foto dan video profesional terbaik di Cikampek, Karawang. Layanan lengkap untuk wedding, wisuda, dan event.',
  twitterImage: 'https://masterstudio.id/img/og-image.webp',
  twitterSite: '@masterstudioidn',
  twitterCreator: '@masterstudioidn',
  keywords: 'studio foto cikampek, studio foto karawang, jasa foto wedding, foto wisuda, video cinematic, prewedding, fotografi produk, master studio, foto keluarga, photo booth',
  author: 'Master Studio',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  themeColor: '#E1242B',
})

useHead({
  htmlAttrs: {
    lang: 'id',
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://masterstudio.id',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://masterstudio.id',
        name: 'Master Studio',
        alternateName: 'Master Studio',
        description: 'Studio foto dan video profesional terbaik di Cikampek, Karawang.',
        url: 'https://masterstudio.id',
        logo: {
          '@type': 'ImageObject',
          url: 'https://masterstudio.id/logo.png',
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://masterstudio.id/icon.png',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Jend Ahmad Yani, Ds.Dawuan Tengah, Kec.Cikampek, Kab.Karawang, Jawa Barat',
          addressLocality: 'Cikampek',
          addressRegion: 'Jawa Barat',
          addressCountry: 'ID',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'contact@masterstudio.id',
            contactType: 'Customer Service',
            areaServed: 'ID',
            availableLanguage: ['en', 'id'],
          },
          {
            '@type': 'ContactPoint',
            telephone: '+6283105612985',
            contactType: 'Customer Service',
            areaServed: 'ID',
            availableLanguage: ['en', 'id'],
          },
        ],
        areaServed: {
          '@type': 'City',
          name: 'Cikampek, Karawang',
        },
        serviceType: ['Product Photography', 'Beauty Portrait', 'Baby Documentary', 'Event Coverage', 'Photo Retouching'],
        priceRange: '$$',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Photography Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Portrait / Solo Photography',
                description: '2 Hours Session, 10 Retouched Photos, Online Gallery Access',
                provider: {
                  '@type': 'Person',
                  name: 'Master Studio',
                },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Commercial / Brand Photography',
                description: 'Full Day Session, 25 High-End Retouched, Full Commercial Rights',
                provider: {
                  '@type': 'Person',
                  name: 'Master Studio',
                },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Events / Large Scale Photography',
                description: 'Ideal for weddings, corporate events, or unique artistic collaborations',
                provider: {
                  '@type': 'Person',
                  name: 'Master Studio',
                },
              },
            },
          ],
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Master Studio',
        jobTitle: 'Studio Foto & Video Profesional',
        url: 'https://masterstudio.id',
        sameAs: [
          'https://www.instagram.com/masterstudio.idn/',
          'https://www.tiktok.com/@masterstudio.idn',
        ],
        knowsAbout: ['Studio Foto & Video Profesional', 'Wedding', 'Prewedding', 'Family', 'Product', 'Graduation', 'Birthday', 'Event', 'Cinematic Video', 'Photo Retouching', 'Video Editing'],
      }),
    },
  ],
})
</script>

