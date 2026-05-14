<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import HomePromoVideo from './components/HomePromoVideo.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <HomePromoVideo />
    </template>
  </Layout>
</template>
