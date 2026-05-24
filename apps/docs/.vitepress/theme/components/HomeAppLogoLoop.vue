<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { appLogoFiles } from '../../constants/app-logos'

type SidebarItem = {
  text?: string
  link?: string
  items?: SidebarItem[]
}

type SupportedApp = {
  text: string
  link: string
  slug: string
  initials: string
  tone: string
  icon?: string
}

const { lang, theme } = useData()
const rootRef = ref<HTMLElement>()
let revertGsap: (() => void) | undefined

const rowDurations = [135, 165, 150]

const isZh = computed(() => lang.value.startsWith('zh'))

const copy = computed(() =>
  isZh.value
    ? {
        ariaLabel: 'Protocol Launcher 支持的应用列表',
      }
    : {
        ariaLabel: 'Applications supported by Protocol Launcher',
      },
)

const sidebarSections = computed(() => flattenSidebar(theme.value.sidebar))

const getAppLogo = (slug: string) => {
  const file = appLogoFiles[slug as keyof typeof appLogoFiles]

  return file ? withBase(`/app-logos/${file}`) : undefined
}

const apps = computed(() => {
  const seen = new Set<string>()
  const supportedApps: SupportedApp[] = []

  for (const section of sidebarSections.value) {
    for (const item of section.items ?? []) {
      if (!item.text || !item.link || !item.link.includes('/apps/') || seen.has(item.link)) {
        continue
      }

      seen.add(item.link)
      const slug = getSlug(item.link)
      supportedApps.push({
        text: item.text,
        link: item.link,
        slug,
        initials: getInitials(item.text),
        tone: `oklch(0.62 0.16 ${((supportedApps.length * 43 + 18) % 360).toFixed(0)})`,
        icon: getAppLogo(slug),
      })
    }
  }

  return supportedApps
})

const rows = computed(() =>
  [0, 1, 2].map((rowIndex) => apps.value.filter((_, appIndex) => appIndex % 3 === rowIndex)),
)

const appHref = (app: SupportedApp) => withBase(app.link)

const setupGsap = async () => {
  if (!rootRef.value) {
    return
  }

  revertGsap?.()
  await nextTick()

  const { gsap } = await import('gsap')
  const mm = gsap.matchMedia()
  const cleanupFns: Array<() => void> = []

  mm.add(
    {
      isDesktop: '(min-width: 960px)',
      reduceMotion: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { isDesktop, reduceMotion } = context.conditions ?? {}
      const root = rootRef.value

      if (!root) {
        return undefined
      }

      const tracks = gsap.utils.toArray<HTMLElement>(root.querySelectorAll('.logoTrack'))
      if (reduceMotion) {
        return undefined
      }

      tracks.forEach((track, index) => {
        const reverse = index === 1
        const tween = gsap.fromTo(
          track,
          { xPercent: reverse ? -50 : 0 },
          {
            xPercent: reverse ? 0 : -50,
            duration: rowDurations[index] * (isDesktop ? 1 : 1.15),
            ease: 'none',
            repeat: -1,
          },
        )
        const row = track.closest('.logoRow')

        if (!row) {
          return
        }

        const pause = () => tween.pause()
        const resume = () => tween.resume()

        row.addEventListener('mouseenter', pause)
        row.addEventListener('mouseleave', resume)
        row.addEventListener('focusin', pause)
        row.addEventListener('focusout', resume)
        cleanupFns.push(() => {
          row.removeEventListener('mouseenter', pause)
          row.removeEventListener('mouseleave', resume)
          row.removeEventListener('focusin', pause)
          row.removeEventListener('focusout', resume)
        })
      })

      return () => {
        for (const cleanup of cleanupFns) {
          cleanup()
        }
      }
    },
    rootRef.value,
  )

  revertGsap = () => {
    mm.revert()
    for (const cleanup of cleanupFns) {
      cleanup()
    }
  }
}

onMounted(() => {
  void setupGsap()
})

watch(lang, () => {
  void setupGsap()
})

onBeforeUnmount(() => {
  revertGsap?.()
})

function flattenSidebar(sidebar: unknown): SidebarItem[] {
  if (Array.isArray(sidebar)) {
    return sidebar as SidebarItem[]
  }

  if (!sidebar || typeof sidebar !== 'object') {
    return []
  }

  return Object.values(sidebar as Record<string, unknown>).flatMap((section) =>
    Array.isArray(section) ? (section as SidebarItem[]) : [section as SidebarItem],
  )
}

function getSlug(link: string) {
  const parts = link.split('/').filter(Boolean)

  return parts[parts.length - 1] ?? link
}

function getInitials(text: string) {
  const normalized = text.replace(/[^\p{L}\p{N}\s]/gu, ' ').trim()
  const parts = normalized.split(/\s+/).filter(Boolean)

  if (parts.length > 1) {
    return parts
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase()
  }

  return normalized.slice(0, 2).toUpperCase()
}
</script>

<template>
  <section ref="rootRef" class="HomeAppLogoLoop" :aria-label="copy.ariaLabel">
    <div class="container">
      <div class="loopStage">
        <div
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="logoRow"
          :class="{ 'logoRow--reverse': rowIndex === 1 }"
        >
          <div class="logoTrack">
            <div v-for="pass in 2" :key="pass" class="logoSequence" :aria-hidden="pass === 2">
              <a
                v-for="app in row"
                :key="`${pass}-${app.slug}`"
                class="logoItem"
                :href="appHref(app)"
                :style="{ '--tone': app.tone }"
                :aria-label="app.text"
                :title="app.text"
                :tabindex="pass === 2 ? -1 : undefined"
              >
                <span class="logoIcon" aria-hidden="true">
                  <img v-if="app.icon" :src="app.icon" alt="" loading="eager" decoding="async" />
                  <span v-else class="logoFallback">{{ app.initials }}</span>
                </span>
                <span class="logoName">{{ app.text }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.HomeAppLogoLoop {
  --loop-fade: var(--vp-c-bg);
  --loop-panel: color-mix(in oklch, var(--vp-c-bg-soft) 62%, transparent);
  --loop-panel-deep: color-mix(in oklch, var(--vp-c-brand-soft) 38%, transparent);
  --loop-logo: color-mix(in oklch, var(--vp-c-text-1) 68%, var(--vp-c-text-2));
  position: relative;
  padding: 0 24px 46px;
  overflow: hidden;
}

.container {
  display: grid;
  margin: 0 auto;
  max-width: 1184px;
}

.loopStage {
  position: relative;
  isolation: isolate;
  display: grid;
  gap: 18px;
  padding: 26px 0;
  background:
    linear-gradient(90deg, var(--loop-fade), transparent 14%, transparent 86%, var(--loop-fade)),
    linear-gradient(180deg, transparent, var(--loop-panel), transparent),
    radial-gradient(
      ellipse at 50% 50%,
      color-mix(in oklch, var(--vp-c-brand-1) 9%, transparent),
      transparent 62%
    );
}

.loopStage::before,
.loopStage::after {
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  width: clamp(44px, 12vw, 164px);
  content: '';
  pointer-events: none;
}

.loopStage::before {
  left: 0;
  background: linear-gradient(90deg, var(--loop-fade), transparent);
}

.loopStage::after {
  right: 0;
  background: linear-gradient(270deg, var(--loop-fade), transparent);
}

.logoRow {
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}

.logoTrack {
  position: relative;
  display: flex;
  width: max-content;
  will-change: transform;
}

.logoSequence {
  display: flex;
  flex: 0 0 auto;
  gap: clamp(34px, 6vw, 78px);
  align-items: center;
  min-width: max-content;
  padding-inline: clamp(17px, 3vw, 39px);
}

.logoItem {
  position: relative;
  display: grid;
  flex: 0 0 auto;
  width: 64px;
  height: 56px;
  place-items: center;
  color: var(--loop-logo);
  text-decoration: none;
  transition:
    opacity 240ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

.logoItem:hover {
  opacity: 1;
  transform: scale(1.18);
}

.logoItem:focus-visible {
  border-radius: 10px;
  outline: 2px solid color-mix(in oklch, var(--tone) 58%, var(--vp-c-brand-1));
  outline-offset: 6px;
}

.logoIcon {
  display: grid;
  width: 58px;
  height: 48px;
  place-items: center;
  overflow: hidden;
}

.logoIcon img {
  display: block;
  width: auto;
  max-width: 58px;
  height: 38px;
  object-fit: contain;
  opacity: 0.84;
  filter: grayscale(1) saturate(0) contrast(1.16)
    drop-shadow(0 1px 1px color-mix(in oklch, var(--vp-c-text-1) 20%, transparent));
  transition:
    opacity 300ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

:global(html.dark .HomeAppLogoLoop .logoIcon img) {
  opacity: 0.82;
  filter: grayscale(1) saturate(0) invert(1) brightness(1.18) contrast(0.9)
    drop-shadow(0 1px 1px color-mix(in oklch, var(--vp-c-bg) 52%, transparent));
}

.logoItem:hover .logoIcon img,
.logoItem:focus-visible .logoIcon img,
:global(html.dark .HomeAppLogoLoop .logoItem:hover .logoIcon img),
:global(html.dark .HomeAppLogoLoop .logoItem:focus-visible .logoIcon img) {
  opacity: 1;
  filter: none;
}

.logoFallback {
  color: currentColor;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0;
  opacity: 0.72;
}

.logoName {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 640px) {
  .HomeAppLogoLoop {
    padding: 2px 48px 54px;
  }

  .loopStage {
    padding-block: 30px;
  }
}

@media (min-width: 960px) {
  .HomeAppLogoLoop {
    padding: 4px 64px 60px;
  }

  .loopStage {
    gap: 20px;
    padding-block: 34px;
  }

  .logoItem {
    width: 76px;
    height: 64px;
  }

  .logoIcon {
    width: 70px;
    height: 54px;
  }

  .logoIcon img {
    max-width: 70px;
    height: 44px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .logoRow {
    overflow: visible;
    mask-image: none;
  }

  .logoTrack {
    width: 100%;
  }

  .logoSequence {
    flex-wrap: wrap;
    min-width: 0;
    padding-inline: 0;
  }

  .logoSequence[aria-hidden='true'] {
    display: none;
  }

  .logoItem,
  .logoItem:hover {
    transform: none;
  }
}
</style>
