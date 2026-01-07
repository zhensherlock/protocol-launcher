import { createPinia } from 'pinia'
import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import '../styles/custom.css'
import type { EnhanceAppContext } from 'vitepress/client'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }: EnhanceAppContext) => {
    const store = createPinia()
    app.use(store)
  },
}
