import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'
import llmstxt from 'vitepress-plugin-llms'
import pkg from '../../../packages/protocol-launcher/package.json' with { type: 'json' }

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Protocol Launcher',
  description: 'One-click launch URL generator for protocol-based apps.',
  rewrites: {
    'en/:rest*': ':rest*',
    'en/index.md': 'index.md',
  },
  base: process.env.VERCEL ? '/' : '/protocol-launcher/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/protocol-launcher/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/protocol-launcher/logo.svg' }],
  ],
  locales: {
    root: { label: 'English', lang: 'en-US', dir: 'ltr' },
    zh: { label: '简体中文', lang: 'zh-Hans', dir: 'ltr' },
  },
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/zhensherlock/protocol-launcher' }],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/zhensherlock/protocol-launcher/blob/main/packages/core/CHANGELOG.md',
          },
        ],
      },
    ],

    outline: {
      level: [2, 6],
    },

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Protocol Launcher?', link: '/guide/what-is-it' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'Applications',
        items: [
          { text: 'Cherry Studio', link: '/apps/cherry-studio' },
          { text: 'Cursor', link: '/apps/cursor' },
        ],
      },
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'V6CF28P0PS',
        apiKey: '692752b7b3c6f794997d8ae22aed79fa',
        indexName: 'protocol-launcher',
      },
    },
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    server: {
      open: true,
    },
    plugins: [
      tailwindcss(),
      llmstxt({
        ignoreFiles: ['en/index.md', 'zh/index.md'],
        description: 'TypeScript library for generating Quick Launch (deep link) URLs to trigger app actions with one click, e.g., installing plugins, configuring servers, or setting API keys.',
        sidebar: [
          {
            text: 'Introduction',
            base: '',
            items: [
              { text: 'What is Protocol Launcher?', link: '/guide/what-is-it' },
              { text: 'Getting Started', link: '/guide/getting-started' },
            ],
          },
          {
            text: 'Applications',
            base: '',
            items: [
              { text: 'Cherry Studio', link: '/apps/cherry-studio' },
              { text: 'Cursor', link: '/apps/cursor' },
            ],
          },
          {
            text: '简介',
            base: '',
            items: [
              { text: '什么是 Protocol Launcher？', link: '/zh/guide/what-is-it' },
              { text: '快速开始', link: '/zh/guide/getting-started' },
            ],
          },
          {
            text: '应用程序',
            base: '',
            items: [
              { text: 'Cherry Studio', link: '/zh/apps/cherry-studio' },
              { text: 'Cursor', link: '/zh/apps/cursor' },
            ],
          },
        ],
        details: `\
- 🛡️ Type-Safe
- 🧩 Multi-App Ready
- 🔬 On-Demand / Tree-shakable
- 🔐 Secure Encoding (safe configs, Unicode)
- ⚙️ Zero Runtime Dependencies
- 📦 ESM First
- 🚀 One-click deep links to trigger app actions
`,
      }),
      groupIconVitePlugin({
        customIcon: {
          cursor: localIconLoader(import.meta.url, '../assets/cursor.svg'),
          'cherry studio': localIconLoader(import.meta.url, '../assets/cherry-studio.svg'),
        },
      }),
    ],
  },
})
