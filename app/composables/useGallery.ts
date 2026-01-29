export interface GalleryItem {
  id: number
  cat: 'wedding' | 'company' | 'graduation' | 'event' | 'family' | 'personal'
  img: string
  class: 'tall' | 'wide' | ''
}

export const galleryItems: GalleryItem[] = [
  { id: 1, cat: 'wedding', img: '/img/gallery/wedding1.webp', class: 'tall' },
  { id: 2, cat: 'wedding', img: '/img/gallery/wedding2.webp', class: '' },
  { id: 3, cat: 'wedding', img: '/img/gallery/wedding3.webp', class: 'wide' },
  { id: 4, cat: 'wedding', img: '/img/gallery/wedding4.webp', class: 'tall' },
  { id: 5, cat: 'wedding', img: '/img/gallery/wedding5.webp', class: 'wide' },
  { id: 10, cat: 'company', img: '/img/gallery/company1.webp', class: '' },
  { id: 21, cat: 'graduation', img: '/img/gallery/graduation1.webp', class: '' },
  { id: 22, cat: 'graduation', img: '/img/gallery/graduation2.webp', class: 'wide' },
  { id: 33, cat: 'event', img: '/img/gallery/event1.webp', class: 'wide' },
  { id: 35, cat: 'event', img: '/img/gallery/event2.webp', class: 'tall' },
  { id: 36, cat: 'family', img: '/img/gallery/family1.webp', class: 'tall' },
]

const ITEMS_PER_PAGE = 8

export const usePortfolio = () => {
  const activeFilter = ref<'all' | 'wedding' | 'company' | 'graduation' | 'event' | 'family' | 'personal'>('all')
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

