<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed, onMounted, ref, watch } from 'vue'

const { lang } = useData()
withDefaults(defineProps<{ variant?: 'home' | 'doc' }>(), {
  variant: 'home',
})

const videoRef = ref<HTMLVideoElement>()

const videoSrc = computed(() =>
  withBase(lang.value.startsWith('zh') ? '/protocol-launcher-promo.zh.mp4' : '/protocol-launcher-promo.en.mp4'),
)

const ariaLabel = computed(() =>
  lang.value.startsWith('zh') ? 'Protocol Launcher 宣传视频' : 'Protocol Launcher promo video',
)

const playVideo = () => {
  if (!videoRef.value) {
    return
  }

  videoRef.value.defaultMuted = true
  videoRef.value.muted = true
  void videoRef.value.play().catch(() => {})
}

onMounted(() => {
  playVideo()
})

watch(videoSrc, () => {
  videoRef.value?.load()
  playVideo()
})
</script>

<template>
  <section class="HomePromoVideo" :class="`HomePromoVideo--${variant}`" :aria-label="ariaLabel">
    <div class="container">
      <video ref="videoRef" :src="videoSrc" autoplay muted loop playsinline preload="metadata" />
    </div>
  </section>
</template>

<style scoped>
.HomePromoVideo {
  padding: 0 24px 16px;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  box-shadow: var(--vp-shadow-3);
}

@media (min-width: 640px) {
  .HomePromoVideo {
    padding: 8px 48px 24px;
  }
}

@media (min-width: 960px) {
  .HomePromoVideo {
    padding: 16px 64px 32px;
  }
}

.HomePromoVideo--doc {
  padding: 16px 0 24px;
}

.HomePromoVideo--doc .container {
  max-width: 100%;
}
</style>
