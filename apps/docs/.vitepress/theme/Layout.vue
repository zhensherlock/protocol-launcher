<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import HomeAppLogoLoop from './components/HomeAppLogoLoop.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <HomeAppLogoLoop />
    </template>
  </Layout>
</template>
