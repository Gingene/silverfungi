<!-- App.vue -->
<template>
  <div class="app">
    <Carousel :images="images" />
  </div>
</template>

<script setup>
import Carousel from './CarouselVue.vue'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1710880079976-0b838851c8c5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '圖片1',
  },
  {
    src: 'https://images.unsplash.com/photo-1711025088918-d115e4901ad1?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '圖片2',
  },
  {
    src: 'https://images.unsplash.com/photo-1711025002903-414c9664b5e7?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: '圖片3',
  },
]
</script>
