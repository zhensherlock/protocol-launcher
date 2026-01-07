<template>
  <div class="p-5 my-6 rounded-xl border border-(--vp-c-divider) bg-(--vp-c-bg-soft)">
    <h3 class="text-base! font-bold! text-(--vp-c-text-1)! mb-3! mt-0!">
      {{ i18nContent[language].title }}
    </h3>
    <div class="flex flex-col sm:flex-row gap-3">
      <div
        class="flex-1 relative flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200"
        :class="currentMethod === 'On-Demand' ? 'border-(--vp-c-brand) bg-(--vp-c-bg) shadow-sm' : 'border-transparent bg-(--vp-c-bg-mute) hover:bg-(--vp-c-bg) opacity-70 hover:opacity-100'"
        @click="currentMethod = 'On-Demand'"
      >
        <div
          class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
          :class="currentMethod === 'On-Demand' ? 'border-(--vp-c-brand)' : 'border-(--vp-c-text-3)'"
        >
          <div v-if="currentMethod === 'On-Demand'" class="w-2.5 h-2.5 rounded-full bg-(--vp-c-brand)"></div>
        </div>
        <div>
          <div class="font-bold text-sm" :class="currentMethod === 'On-Demand' ? 'text-(--vp-c-brand)' : 'text-(--vp-c-text-1)'">{{ i18nContent[language].onDemand }}</div>
          <div class="text-xs text-(--vp-c-text-2)">{{ i18nContent[language].onDemandDesc }}</div>
        </div>
      </div>
      <div
        class="flex-1 relative flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200"
        :class="currentMethod === 'Full Import' ? 'border-(--vp-c-brand) bg-(--vp-c-bg) shadow-sm' : 'border-transparent bg-(--vp-c-bg-mute) hover:bg-(--vp-c-bg) opacity-70 hover:opacity-100'"
        @click="currentMethod = 'Full Import'"
      >
        <div
          class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
          :class="currentMethod === 'Full Import' ? 'border-(--vp-c-brand)' : 'border-(--vp-c-text-3)'"
        >
          <div v-if="currentMethod === 'Full Import'" class="w-2.5 h-2.5 rounded-full bg-(--vp-c-brand)"></div>
        </div>
        <div>
          <div class="font-bold text-sm" :class="currentMethod === 'Full Import' ? 'text-(--vp-c-brand)' : 'text-(--vp-c-text-1)'">{{ i18nContent[language].fullImport }}</div>
          <div class="text-xs text-(--vp-c-text-2)">{{ i18nContent[language].fullImportDesc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { lang } = useData()
const language = lang as unknown as 'en-US' | 'zh-Hans'

const props = defineProps<{
  modelValue?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const currentMethod = computed<string>({
  get() {
    return props.modelValue ?? 'On-Demand'
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const i18nContent = {
  'en-US': {
    title: 'Select Installation Method',
    onDemand: 'On-Demand',
    onDemandDesc: 'Recommended. Optimized for production.',
    fullImport: 'Full Import',
    fullImportDesc: 'Convenient. Good for quick scripts.',
  },
  'zh-Hans': {
    title: '选择安装方式',
    onDemand: '按需加载',
    onDemandDesc: '推荐使用。生产环境优化。',
    fullImport: '全量导入',
    fullImportDesc: '使用便捷。适合快速脚本。',
  }
}
</script>

<style scoped>

</style>
