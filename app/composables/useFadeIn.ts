export const useFadeIn = () => {
  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  onMounted(() => {
    if (typeof window === 'undefined' || !elementRef.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(elementRef.value)

    onUnmounted(() => {
      if (elementRef.value) {
        observer.unobserve(elementRef.value)
        observer.disconnect()
      }
    })
  })

  return {
    elementRef,
    isVisible,
  }
}
