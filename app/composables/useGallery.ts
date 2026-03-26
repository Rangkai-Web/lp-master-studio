export interface GalleryItem {
  id: number
  cat: 'photostudio' | 'photobooth' | 'wedding' | 'engagement' | 'graduation'
  img: string
}

export const galleryItems: GalleryItem[] = [
  { id: 1, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio2.webp' },
  { id: 2, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio9.webp' },
  { id: 3, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio13.webp' },
  { id: 4, cat: 'photostudio', img: '/img/gallery/master-studio/photo-studio/photostudio17.webp' },
  { id: 5, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth1.webp' },
  { id: 6, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth2.webp' },
  { id: 7, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth3.webp' },
  { id: 8, cat: 'photobooth', img: '/img/gallery/gallery-booth/photobooth/gallery-booth4.webp' },
  { id: 9, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding1.webp' },
  { id: 10, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding10.webp' },
  { id: 11, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding12.webp' },
  { id: 12, cat: 'wedding', img: '/img/gallery/master-studio/wedding/wedding7.webp' },
  { id: 13, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement1.webp' },
  { id: 14, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement3.webp' },
  { id: 15, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement8.webp' },
  { id: 16, cat: 'engagement', img: '/img/gallery/master-studio/engagement/engagement17.webp' },
  { id: 17, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation2.webp' },
  { id: 18, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation3.webp' },
  { id: 19, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation9.webp' },
  { id: 20, cat: 'graduation', img: '/img/gallery/master-studio/graduation/graduation16.webp' },
]

const ITEMS_PER_PAGE = 8

export const useGallery = () => {
  const activeFilter = ref<'photostudio' | 'photobooth' | 'wedding' | 'engagement' | 'graduation'>('photostudio')
  const displayedCount = ref(ITEMS_PER_PAGE)

  const filteredItems = computed(() => {
    if (activeFilter.value === 'photostudio') {
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
