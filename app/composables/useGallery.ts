export interface GalleryItem {
  id: number
  cat: 'wedding' | 'calendar' | 'graduation' | 'event' | 'family' | 'personal'
  img: string
  class: 'tall' | 'wide' | ''
}

export const galleryItems: GalleryItem[] = [
  { id: 1, cat: 'wedding', img: '/img/services/photography/wedding1.webp', class: 'tall' },
  { id: 2, cat: 'wedding', img: '/img/services/photography/wedding2.webp', class: '' },
  { id: 3, cat: 'wedding', img: '/img/services/photography/wedding3.webp', class: 'wide' },
  { id: 4, cat: 'wedding', img: '/img/services/photography/wedding4.webp', class: 'tall' },
  { id: 5, cat: 'wedding', img: '/img/services/photography/wedding5.webp', class: 'tall' },
  { id: 6, cat: 'wedding', img: '/img/services/photography/wedding6.webp', class: '' },
  { id: 7, cat: 'wedding', img: '/img/services/photography/wedding7.webp', class: 'wide' },
  { id: 8, cat: 'wedding', img: '/img/services/photography/wedding8.webp', class: 'tall' },
  { id: 9, cat: 'wedding', img: '/img/services/photography/wedding9.webp', class: 'tall' },
  { id: 10, cat: 'wedding', img: '/img/services/photography/wedding10.webp', class: '' },
  { id: 11, cat: 'calendar', img: '/img/services/photo-collage/cal1.webp', class: '' },
  { id: 12, cat: 'calendar', img: '/img/services/photo-collage/cal2.webp', class: '' },
  { id: 13, cat: 'calendar', img: '/img/services/photo-collage/cal3.webp', class: '' },
  { id: 14, cat: 'graduation', img: '/img/services/photography/graduation1.webp', class: '' },
  { id: 15, cat: 'graduation', img: '/img/services/photography/graduation2.webp', class: 'wide' },
  { id: 16, cat: 'graduation', img: '/img/services/photography/graduation3.webp', class: 'wide' },
  { id: 17, cat: 'graduation', img: '/img/services/photography/graduation4.webp', class: 'wide' },
  { id: 18, cat: 'event', img: '/img/gallery/event1.webp', class: 'wide' },
  { id: 19, cat: 'event', img: '/img/gallery/event2.webp', class: 'tall' },
]

const ITEMS_PER_PAGE = 8

export const usePortfolio = () => {
  const activeFilter = ref<'all' | 'wedding' | 'calendar' | 'graduation' | 'event' | 'family' | 'personal'>('all')
  const displayedCount = ref(ITEMS_PER_PAGE)

  const filteredItems = computed(() => {
    if (activeFilter.value === 'all') {
      return galleryItems
    }
    return galleryItems.filter(item => item.cat === activeFilter.value)
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

