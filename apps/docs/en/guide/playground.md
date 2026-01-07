---
layout: home
---

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { installMCP as installCursorMCP } from 'protocol-launcher/cursor'
import { installMCP as installCherryMCP, installProvider as installCherryProvider } from 'protocol-launcher/cherry-studio'

const app = ref<'Cherry Studio' | 'Cursor'>('Cherry Studio')
const method = ref<'installMCP' | 'installProvider'>('installMCP')

const cherryMCPDefault = `{
  "name": "server-everything",
  "type": "stdio",
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-everything"]
}`
const cherryProviderDefault = `{
  "id": "new-api",
  "baseUrl": "https://open.cherryin.ai",
  "apiKey": "sk-xxxx"
}`
const cursorMCPDefault = `{
  "name": "server-everything",
  "type": "stdio",
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-everything"]
}`

const jsonText = ref(cherryMCPDefault)
watch([app, method], ([a, m]) => {
  if (a === 'Cursor') {
    method.value = 'installMCP'
    jsonText.value = cursorMCPDefault
  } else {
    jsonText.value = m === 'installProvider' ? cherryProviderDefault : cherryMCPDefault
  }
})

function parsePayload(text: string) {
  try { return JSON.parse(text) } catch { return null }
}

const generatedUrl = computed(() => {
  const payload = parsePayload(jsonText.value)
  if (!payload) return ''
  try {
    if (app.value === 'Cursor') {
      return installCursorMCP(payload)
    }
    if (method.value === 'installProvider') {
      return installCherryProvider(payload as any)
    }
    return installCherryMCP(payload as any)
  } catch {
    return ''
  }
})
</script>

<div class="playground-container">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="card rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-black/30 p-6">
      <div class="mb-4">
        <h2 class="card-title text-xl">Configuration</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label class="block">
          <span class="text-sm">App</span>
          <select v-model="app" class="mt-1 w-full rounded-lg border p-2">
            <option value="Cherry Studio">Cherry Studio</option>
            <option value="Cursor">Cursor</option>
          </select>
        </label>
        <label class="block">
          <span class="text-sm">Method</span>
          <select v-model="method" class="mt-1 w-full rounded-lg border p-2">
            <option value="installMCP">installMCP</option>
            <option value="installProvider" :disabled="app === 'Cursor'">installProvider</option>
          </select>
        </label>
      </div>
      <div class="mt-4">
        <label class="block">
          <span class="text-sm">Parameters (JSON)</span>
          <textarea v-model="jsonText" rows="16" class="editor font-mono" spellcheck="false"></textarea>
        </label>
        <div class="text-xs text-gray-600 dark:text-gray-400 mt-2" v-if="app === 'Cherry Studio' && method === 'installProvider'">
          Tip: Provider requires keys: <code>id</code>, <code>baseUrl</code>, <code>apiKey</code>.
        </div>
      </div>
    </div>
    <div class="card result-card rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-black/30 p-5">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-lg font-semibold">Result</h2>
        <div class="flex gap-2">
          <VPButton :disabled="!generatedUrl" theme="brand" text="Open" class="cursor-pointer">
            <VPLink :href="generatedUrl" target="_self">Open</VPLink>
          </VPButton>
          <button
            class="px-3 py-1.5 rounded-lg text-sm bg-gray-200 dark:bg-gray-700"
            :disabled="!generatedUrl"
            @click="navigator.clipboard?.writeText(generatedUrl)"
          >
            Copy URL
          </button>
        </div>
      </div>
      <div class="code-block rounded-lg p-4 break-all min-h-24">
        <code v-if="generatedUrl">{{ generatedUrl }}</code>
        <span v-else class="text-gray-500">Edit the JSON to generate a deep link.</span>
      </div>
    </div>
  </div>
</div>
