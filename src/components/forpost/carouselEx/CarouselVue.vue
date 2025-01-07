<!-- Carousel.vue -->
<template>
    <div 
      class="container"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="carousel">
        <div 
        class="carousel-inner"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(image, index) in images" 
          :key="index" 
          class="carousel-slide"
        >
          <img :src="image.src" :alt="image.alt">
        </div>
      </div>
      <button 
        class="carousel-btn prev-btn"
        @click="handlePrevClick"
      >
        上一張
      </button>
      <button 
        class="carousel-btn next-btn"
        @click="handleNextClick"
      >
        下一張
      </button>
      </div>
    </div>
  </template>
  
  <script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)
const isPlaying = ref(false)
const isMouseOver = ref(false)
let debounceTimer = null
let autoplayTimer = null

const move = direction => {
  currentIndex.value =
    (currentIndex.value + direction + props.images.length) % props.images.length
}

const debounceMouseEvent = (callback, delay = 100) => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }
  debounceTimer = setTimeout(() => {
    callback()
  }, delay)
}

const startAutoplay = () => {
  if (autoplayTimer) clearInterval(autoplayTimer)

  if (isPlaying.value && !isMouseOver.value) {
    autoplayTimer = setInterval(() => {
      move(1)
    }, 3000)
  }
}

const handleMouseEnter = () => {
  isMouseOver.value = true
  debounceMouseEvent(() => {
    isPlaying.value = false
  })
}

const handleMouseLeave = () => {
  isMouseOver.value = false
  debounceMouseEvent(() => {
    isPlaying.value = true
  })
}

const handlePrevClick = () => {
  isPlaying.value = false
  move(-1)
}

const handleNextClick = () => {
  isPlaying.value = false
  move(1)
}

// 監聽播放狀態變化
watch(isPlaying, newValue => {
  if (newValue) {
    startAutoplay()
  } else {
    clearInterval(autoplayTimer)
  }
})

onMounted(() => {
  isPlaying.value = true
})

onUnmounted(() => {
  if (autoplayTimer) clearInterval(autoplayTimer)
  if (debounceTimer) clearTimeout(debounceTimer)
})
</script>
  