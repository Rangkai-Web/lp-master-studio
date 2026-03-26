export interface PortfolioItem {
  id: number
  cat: 'all' | 'photostudio' | 'photobooth' | 'wedding' | 'prewedding' | 'engagement' | 'maternity' | 'graduation' | 'event' | 'glasswood' | 'photobox' | 'yearbook' | 'collage' | 'selfphoto' | 'etc'
  img: string
}

// Initial data taken from useGallery.ts
export const portfolioItems: PortfolioItem[] = [
  { id: 1, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio2.webp' },
  { id: 2, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio3.webp' },
  { id: 3, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio4.webp' },
  { id: 4, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio5.webp' },
  { id: 5, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio6.webp' },
  { id: 6, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio7.webp' },
  { id: 7, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio8.webp' },
  { id: 8, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio9.webp' },
  { id: 9, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio10.webp' },
  { id: 10, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio11.webp' },
  { id: 11, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio12.webp' },
  { id: 12, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio13.webp' },
  { id: 13, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio14.webp' },
  { id: 14, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio15.webp' },
  { id: 15, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio17.webp' },

  { id: 16, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth1.webp' },
  { id: 17, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth2.webp' },
  { id: 18, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth3.webp' },
  { id: 19, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth4.webp' },
  { id: 20, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth5.webp' },
  { id: 21, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth6.webp' },
  { id: 22, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth7.webp' },
  { id: 23, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth8.webp' },
  { id: 24, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth9.webp' },
  { id: 25, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth10.webp' },
  { id: 26, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth11.webp' },
  { id: 27, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth12.webp' },
  { id: 28, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth13.webp' },
  { id: 29, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth14.webp' },
  { id: 30, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth15.webp' },
  { id: 31, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth16.webp' },

  { id: 32, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding1.webp' },
  { id: 33, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding2.webp' },
  { id: 34, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding7.webp' },
  { id: 35, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding8.webp' },
  { id: 36, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding9.webp' },
  { id: 37, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding10.webp' },
  { id: 38, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding11.webp' },
  { id: 39, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding12.webp' },
  { id: 40, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding13.webp' },
  { id: 41, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding14.webp' },
  { id: 42, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding15.webp' },

  { id: 43, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding1.webp' },
  { id: 44, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding2.webp' },
  { id: 45, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding3.webp' },
  { id: 46, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding4.webp' },
  { id: 47, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding5.webp' },
  { id: 48, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding6.webp' },
  { id: 49, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding7.webp' },
  { id: 50, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding8.webp' },
  { id: 51, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding9.webp' },
  { id: 52, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding10.webp' },
  { id: 53, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding11.webp' },
  { id: 54, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding12.webp' },
  { id: 55, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding13.webp' },
  { id: 56, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding14.webp' },
  { id: 57, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding15.webp' },
  { id: 58, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding16.webp' },
  { id: 59, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding17.webp' },
  { id: 60, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding18.webp' },
  { id: 61, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding19.webp' },
  { id: 62, cat: 'prewedding', img: '/img/gallery/master-studio/prewedding/prewedding20.webp' },

  { id: 63, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement1.webp' },
  { id: 64, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement2.webp' },
  { id: 65, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement3.webp' },
  { id: 66, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement4.webp' },
  { id: 67, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement5.webp' },
  { id: 68, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement6.webp' },
  { id: 69, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement7.webp' },
  { id: 70, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement8.webp' },
  { id: 71, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement9.webp' },
  { id: 72, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement10.webp' },
  { id: 73, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement11.webp' },
  { id: 74, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement12.webp' },
  { id: 75, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement13.webp' },
  { id: 76, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement14.webp' },
  { id: 77, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement16.webp' },
  { id: 78, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement17.webp' },

  { id: 79, cat: 'maternity', img: '/img/gallery/master-studio/maternity/maternity1.webp' },
  { id: 80, cat: 'maternity', img: '/img/gallery/master-studio/maternity/maternity2.webp' },
  { id: 81, cat: 'maternity', img: '/img/gallery/master-studio/maternity/maternity3.webp' },
  { id: 82, cat: 'maternity', img: '/img/gallery/master-studio/maternity/maternity4.webp' },
  { id: 83, cat: 'maternity', img: '/img/gallery/master-studio/maternity/maternity5.webp' },

  { id: 84, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation1.webp' },
  { id: 85, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation2.webp' },
  { id: 86, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation3.webp' },
  { id: 87, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation4.webp' },
  { id: 88, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation5.webp' },
  { id: 89, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation6.webp' },
  { id: 90, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation7.webp' },
  { id: 91, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation8.webp' },
  { id: 92, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation9.webp' },
  { id: 93, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation10.webp' },
  { id: 94, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation11.webp' },
  { id: 95, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation12.webp' },
  { id: 96, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation13.webp' },
  { id: 97, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation14.webp' },
  { id: 98, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation15.webp' },
  { id: 99, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation16.webp' },

  { id: 100, cat: 'event', img: '/img/gallery/event/event1.webp' },
  { id: 101, cat: 'event', img: '/img/gallery/event/event2.webp' },
  { id: 101, cat: 'event', img: '/img/gallery/event/event3.webp' },
  { id: 102, cat: 'event', img: '/img/gallery/event/event5.webp' },
  { id: 104, cat: 'event', img: '/img/gallery/event/event6.webp' },
  { id: 105, cat: 'event', img: '/img/gallery/event/event7.webp' },
  { id: 106, cat: 'event', img: '/img/gallery/event/event8.webp' },
  { id: 107, cat: 'event', img: '/img/gallery/event/event9.webp' },
  { id: 108, cat: 'event', img: '/img/gallery/event/event10.webp' },
  { id: 109, cat: 'event', img: '/img/gallery/event/event11.webp' },
  { id: 110, cat: 'event', img: '/img/gallery/event/event12.webp' },
  { id: 111, cat: 'event', img: '/img/gallery/event/event13.webp' },
  { id: 112, cat: 'event', img: '/img/gallery/event/event14.webp' },
  { id: 113, cat: 'event', img: '/img/gallery/event/event15.webp' },
  { id: 114, cat: 'event', img: '/img/gallery/event/event16.webp' },
  { id: 115, cat: 'event', img: '/img/gallery/event/event17.webp' },

  { id: 116, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood1.webp' },
  { id: 117, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood2.webp' },
  { id: 118, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood3.webp' },
  { id: 119, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood4.webp' },
  { id: 120, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood5.webp' },
  { id: 121, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood6.webp' },
  { id: 122, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood8.webp' },
  { id: 123, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood9.webp' },
  { id: 124, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood10.webp' },
  { id: 125, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood11.webp' },
  { id: 126, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood12.webp' },
  { id: 127, cat: 'glasswood', img: '/img/gallery/portrait-collage/glasswood/glasswood13.webp' },

  { id: 128, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox1.webp' },
  { id: 129, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox2.webp' },
  { id: 130, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox3.webp' },
  { id: 131, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox4.webp' },
  { id: 132, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox6.webp' },
  { id: 133, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox7.webp' },
  { id: 134, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox8.webp' },
  { id: 135, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox9.webp' },
  { id: 136, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox10.webp' },
  { id: 137, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox11.webp' },
  { id: 138, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox12.webp' },
  { id: 139, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox13.webp' },
  { id: 140, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox14.webp' },
  { id: 141, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox15.webp' },
  { id: 142, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox16.webp' },
  { id: 143, cat: 'photobox', img: '/img/gallery/portrait-collage/photobox/photobox21.webp' },

  { id: 144, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook1.webp' },
  { id: 145, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook2.webp' },
  { id: 146, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook3.webp' },
  { id: 147, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook4.webp' },
  { id: 148, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook5.webp' },
  { id: 149, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook6.webp' },
  { id: 150, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook7.webp' },
  { id: 151, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook8.webp' },
  { id: 152, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook9.webp' },
  { id: 153, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook10.webp' },
  { id: 154, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook11.webp' },
  { id: 155, cat: 'yearbook', img: '/img/gallery/portrait-collage/yearbook/yearbook12.webp' },

  { id: 156, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage2.webp' },
  { id: 157, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage3.webp' },
  { id: 158, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage4.webp' },
  { id: 159, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage5.webp' },
  { id: 160, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage6.webp' },
  { id: 161, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage7.webp' },
  { id: 162, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage8.webp' },
  { id: 163, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage9.webp' },
  { id: 164, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage10.webp' },
  { id: 165, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage11.webp' },
  { id: 166, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage12.webp' },
  { id: 167, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage13.webp' },
  { id: 168, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage14.webp' },
  { id: 169, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage15.webp' },
  { id: 170, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage16.webp' },
  { id: 171, cat: 'collage', img: '/img/gallery/portrait-collage/collage/collage17.webp' },

  { id: 172, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo1.webp' },
  { id: 173, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo3.webp' },
  { id: 174, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo4.webp' },
  { id: 175, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo5.webp' },
  { id: 176, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo6.webp' },
  { id: 177, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo7.webp' },
  { id: 178, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo8.webp' },
  { id: 179, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo9.webp' },
  { id: 180, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo21.webp' },
  { id: 181, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo22.webp' },
  { id: 182, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo23.webp' },
  { id: 183, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo24.webp' },
  { id: 184, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo25.webp' },
  { id: 185, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo26.webp' },
  { id: 186, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo27.webp' },
  { id: 187, cat: 'selfphoto', img: '/img/gallery/gallery-booth/self-photo/self-photo28.webp' },

  { id: 188, cat: 'etc', img: '/img/gallery/master-studio/calendar/calendar1.webp' },
  { id: 189, cat: 'etc', img: '/img/gallery/master-studio/calendar/calendar2.webp' },
  { id: 190, cat: 'etc', img: '/img/gallery/master-studio/calendar/calendar3.webp' },
  { id: 191, cat: 'etc', img: '/img/gallery/master-studio/calendar/calendar4.webp' },
  { id: 192, cat: 'etc', img: '/img/gallery/master-studio/id-card/id-card1.webp' },
  { id: 193, cat: 'etc', img: '/img/gallery/master-studio/id-card/id-card2.webp' },
  { id: 194, cat: 'etc', img: '/img/gallery/master-studio/id-card/id-card6.webp' },
  { id: 195, cat: 'etc', img: '/img/gallery/master-studio/id-card/id-card7.webp' },
  { id: 196, cat: 'etc', img: '/img/gallery/master-studio/pass-photo/pass-photo1.webp' },
  { id: 197, cat: 'etc', img: '/img/gallery/master-studio/pass-photo/pass-photo2.webp' },
  { id: 198, cat: 'etc', img: '/img/gallery/master-studio/pass-photo/pass-photo6.webp' },
  { id: 199, cat: 'etc', img: '/img/gallery/master-studio/pass-photo/pass-photo7.webp' },
  { id: 200, cat: 'etc', img: '/img/gallery/master-studio/pin-medali/pin1.webp' },
  { id: 201, cat: 'etc', img: '/img/gallery/master-studio/pin-medali/pin2.webp' },
  { id: 202, cat: 'etc', img: '/img/gallery/master-studio/pin-medali/pin6.webp' },
  { id: 203, cat: 'etc', img: '/img/gallery/master-studio/pin-medali/pin7.webp' },
]

const ITEMS_PER_PAGE = 12

export const usePortfolio = () => {
  const activeFilter = ref<'all' | 'photostudio' | 'photobooth' | 'wedding' | 'prewedding' | 'engagement' | 'maternity' | 'graduation' | 'event' | 'glasswood' | 'photobox' | 'yearbook' | 'collage' | 'selfphoto' | 'etc'>('all')
  const displayedCount = ref(ITEMS_PER_PAGE)

  const filteredItems = computed(() => {
    if (activeFilter.value === 'all') {
      return portfolioItems
    }
    return portfolioItems.filter(item => item.cat === activeFilter.value)
  })

  // Paginated items - only show up to displayedCount
  const paginatedItems = computed(() => {
    return filteredItems.value.slice(0, displayedCount.value)
  })

  // Check if there are more items to load
  const hasMore = computed(() => {
    return displayedCount.value < filteredItems.value.length
  })

  // Remaining items count
  const remainingCount = computed(() => {
    return Math.max(0, filteredItems.value.length - displayedCount.value)
  })

  const loadMore = () => {
    displayedCount.value += ITEMS_PER_PAGE
  }

  const setFilter = (filter: typeof activeFilter.value) => {
    activeFilter.value = filter
    // Reset pagination when filter changes
    displayedCount.value = ITEMS_PER_PAGE
  }

  return {
    activeFilter,
    filteredItems,
    paginatedItems,
    hasMore,
    remainingCount,
    loadMore,
    setFilter,
  }
}
