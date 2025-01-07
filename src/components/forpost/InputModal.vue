<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
console.log(text)
</script>

<template>
  <div class="my-6 lg:my-10">
    <div class="text-2xl">請輸入文字 {{ text }}</div>
    <br />
    <input type="text" v-model="text" />
  </div>
</template>
