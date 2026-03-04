import tailwindcss from '@tailwindcss/vite'
import { isUndefined } from 'lodash-es'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'
import llmstxt from 'vitepress-plugin-llms'
import pkg from '../../../packages/protocol-launcher/package.json' with { type: 'json' }

const isGithubPages = isUndefined(process.env.VERCEL)
const base = isGithubPages ? '/protocol-launcher/' : '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Protocol Launcher',
  description: 'One-click launch URL generator for protocol-based apps.',
  rewrites: {
    'en/:rest*': ':rest*',
    'en/index.md': 'index.md',
    'en/guide/what-is-it.md': 'guide/what-is-it.md',
    'en/guide/getting-started.md': 'guide/getting-started.md',
    'en/extra/examples.md': 'extra/examples.md',
    'en/apps/affine.md': 'apps/affine.md',
    'en/apps/antigravity.md': 'apps/antigravity.md',
    'en/apps/appflowy.md': 'apps/appflowy.md',
    'en/apps/atom.md': 'apps/atom.md',
    'en/apps/bbedit.md': 'apps/bbedit.md',
    'en/apps/cherry-studio.md': 'apps/cherry-studio.md',
    'en/apps/code-buddy.md': 'apps/code-buddy.md',
    'en/apps/codelite.md': 'apps/codelite.md',
    'en/apps/codex.md': 'apps/codex.md',
    'en/apps/cursor.md': 'apps/cursor.md',
    'en/apps/github-desktop.md': 'apps/github-desktop.md',
    'en/apps/goland.md': 'apps/goland.md',
    'en/apps/idea.md': 'apps/idea.md',
    'en/apps/kiro.md': 'apps/kiro.md',
    'en/apps/lingma.md': 'apps/lingma.md',
    'en/apps/macvim.md': 'apps/macvim.md',
    'en/apps/nova.md': 'apps/nova.md',
    'en/apps/opencode.md': 'apps/opencode.md',
    'en/apps/orchids.md': 'apps/orchids.md',
    'en/apps/pearai.md': 'apps/pearai.md',
    'en/apps/phpstorm.md': 'apps/phpstorm.md',
    'en/apps/pycharm.md': 'apps/pycharm.md',
    'en/apps/qoder.md': 'apps/qoder.md',
    'en/apps/rustrover.md': 'apps/rustrover.md',
    'en/apps/telegram.md': 'apps/telegram.md',
    'en/apps/textmate.md': 'apps/textmate.md',
    'en/apps/theia.md': 'apps/theia.md',
    'en/apps/thunder.md': 'apps/thunder.md',
    'en/apps/verdent.md': 'apps/verdent.md',
    'en/apps/vscode.md': 'apps/vscode.md',
    'en/apps/vscodium.md': 'apps/vscodium.md',
    'en/apps/webstorm.md': 'apps/webstorm.md',
    'en/apps/windsurf.md': 'apps/windsurf.md',
    'en/apps/xcode.md': 'apps/xcode.md',
    'en/apps/zed.md': 'apps/zed.md',
  },
  base,
  head: [
    ['link', { rel: 'shortcut icon', href: `${base}logo.svg` }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `${base}logo.svg` }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-hoImtNdY4x' }],
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
            link: 'https://github.com/zhensherlock/protocol-launcher/blob/main/packages/protocol-launcher/CHANGELOG.md',
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
          { text: 'AFFiNE', link: '/apps/affine' },
          { text: 'Antigravity', link: '/apps/antigravity' },
          { text: 'AppFlowy', link: '/apps/appflowy' },
          { text: 'Atom', link: '/apps/atom' },
          { text: 'BBEdit', link: '/apps/bbedit' },
          { text: 'Cherry Studio', link: '/apps/cherry-studio' },
          { text: 'CodeBuddy', link: '/apps/code-buddy' },
          { text: 'CodeLite', link: '/apps/codelite' },
          { text: 'Codex', link: '/apps/codex' },
          { text: 'Cursor', link: '/apps/cursor' },
          { text: 'GitHub Desktop', link: '/apps/github-desktop' },
          { text: 'GoLand', link: '/apps/goland' },
          { text: 'IntelliJ IDEA', link: '/apps/idea' },
          { text: 'Kiro', link: '/apps/kiro' },
          { text: 'Lingma', link: '/apps/lingma' },
          { text: 'MacVim', link: '/apps/macvim' },
          { text: 'Nova', link: '/apps/nova' },
          { text: 'OpenCode', link: '/apps/opencode' },
          { text: 'Orchids', link: '/apps/orchids' },
          { text: 'PearAI', link: '/apps/pearai' },
          { text: 'PhpStorm', link: '/apps/phpstorm' },
          { text: 'PyCharm', link: '/apps/pycharm' },
          { text: 'Qoder', link: '/apps/qoder' },
          { text: 'RustRover', link: '/apps/rustrover' },
          { text: 'Telegram', link: '/apps/telegram' },
          { text: 'TextMate', link: '/apps/textmate' },
          { text: 'Theia', link: '/apps/theia' },
          { text: 'Thunder', link: '/apps/thunder' },
          { text: 'Verdent', link: '/apps/verdent' },
          { text: 'VS Code', link: '/apps/vscode' },
          { text: 'VSCodium', link: '/apps/vscodium' },
          { text: 'WebStorm', link: '/apps/webstorm' },
          { text: 'Windsurf', link: '/apps/windsurf' },
          { text: 'Xcode', link: '/apps/xcode' },
          { text: 'Zed', link: '/apps/zed' },
        ],
      },
      {
        text: 'Extra',
        items: [{ text: 'Examples', link: '/extra/examples' }],
      },
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'V6CF28P0PS',
        apiKey: '692752b7b3c6f794997d8ae22aed79fa',
        indexName: 'protocol-launcher',
        searchParameters: {
          facetFilters: [`tags:${isGithubPages ? 'gh' : 'vercel'}`],
        },
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
        ignoreFiles: ['en/index.md', 'zh/index.md', 'CHANGELOG.md'],
        description:
          'TypeScript library for generating Quick Launch (deep link) URLs to trigger app actions with one click, e.g., installing plugins, configuring servers, or setting API keys.',
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
              { text: 'AFFiNE', link: '/apps/affine' },
              { text: 'Antigravity', link: '/apps/antigravity' },
              { text: 'AppFlowy', link: '/apps/appflowy' },
              { text: 'Atom', link: '/apps/atom' },
              { text: 'BBEdit', link: '/apps/bbedit' },
              { text: 'Cherry Studio', link: '/apps/cherry-studio' },
              { text: 'CodeBuddy', link: '/apps/code-buddy' },
              { text: 'CodeLite', link: '/apps/codelite' },
              { text: 'Codex', link: '/apps/codex' },
              { text: 'Cursor', link: '/apps/cursor' },
              { text: 'GitHub Desktop', link: '/apps/github-desktop' },
              { text: 'GoLand', link: '/apps/goland' },
              { text: 'IntelliJ IDEA', link: '/apps/idea' },
              { text: 'Kiro', link: '/apps/kiro' },
              { text: 'Lingma', link: '/apps/lingma' },
              { text: 'MacVim', link: '/apps/macvim' },
              { text: 'Nova', link: '/apps/nova' },
              { text: 'OpenCode', link: '/apps/opencode' },
              { text: 'Orchids', link: '/apps/orchids' },
              { text: 'PearAI', link: '/apps/pearai' },
              { text: 'PhpStorm', link: '/apps/phpstorm' },
              { text: 'PyCharm', link: '/apps/pycharm' },
              { text: 'Qoder', link: '/apps/qoder' },
              { text: 'RustRover', link: '/apps/rustrover' },
              { text: 'Telegram', link: '/apps/telegram' },
              { text: 'TextMate', link: '/apps/textmate' },
              { text: 'Theia', link: '/apps/theia' },
              { text: 'Thunder', link: '/apps/thunder' },
              { text: 'Verdent', link: '/apps/verdent' },
              { text: 'VS Code', link: '/apps/vscode' },
              { text: 'VSCodium', link: '/apps/vscodium' },
              { text: 'WebStorm', link: '/apps/webstorm' },
              { text: 'Windsurf', link: '/apps/windsurf' },
              { text: 'Xcode', link: '/apps/xcode' },
              { text: 'Zed', link: '/apps/zed' },
            ],
          },
          {
            text: 'Extra',
            base: '',
            items: [{ text: 'Examples', link: '/extra/examples' }],
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
              { text: 'AFFiNE', link: '/zh/apps/affine' },
              { text: 'Antigravity', link: '/zh/apps/antigravity' },
              { text: 'AppFlowy', link: '/zh/apps/appflowy' },
              { text: 'Atom', link: '/zh/apps/atom' },
              { text: 'BBEdit', link: '/zh/apps/bbedit' },
              { text: 'Cherry Studio', link: '/zh/apps/cherry-studio' },
              { text: 'CodeBuddy', link: '/zh/apps/code-buddy' },
              { text: 'CodeLite', link: '/zh/apps/codelite' },
              { text: 'Codex', link: '/zh/apps/codex' },
              { text: 'Cursor', link: '/zh/apps/cursor' },
              { text: 'GitHub Desktop', link: '/zh/apps/github-desktop' },
              { text: 'GoLand', link: '/zh/apps/goland' },
              { text: 'IntelliJ IDEA', link: '/zh/apps/idea' },
              { text: 'Kiro', link: '/zh/apps/kiro' },
              { text: 'Lingma', link: '/zh/apps/lingma' },
              { text: 'MacVim', link: '/zh/apps/macvim' },
              { text: 'Nova', link: '/zh/apps/nova' },
              { text: 'OpenCode', link: '/zh/apps/opencode' },
              { text: 'Orchids', link: '/zh/apps/orchids' },
              { text: 'PearAI', link: '/zh/apps/pearai' },
              { text: 'PhpStorm', link: '/zh/apps/phpstorm' },
              { text: 'PyCharm', link: '/zh/apps/pycharm' },
              { text: 'Qoder', link: '/zh/apps/qoder' },
              { text: 'RustRover', link: '/zh/apps/rustrover' },
              { text: 'Telegram', link: '/zh/apps/telegram' },
              { text: 'TextMate', link: '/zh/apps/textmate' },
              { text: 'Theia', link: '/zh/apps/theia' },
              { text: 'Thunder', link: '/zh/apps/thunder' },
              { text: 'Verdent', link: '/zh/apps/verdent' },
              { text: 'VS Code', link: '/zh/apps/vscode' },
              { text: 'VSCodium', link: '/zh/apps/vscodium' },
              { text: 'WebStorm', link: '/zh/apps/webstorm' },
              { text: 'Windsurf', link: '/zh/apps/windsurf' },
              { text: 'Xcode', link: '/zh/apps/xcode' },
              { text: 'Zed', link: '/zh/apps/zed' },
            ],
          },
          {
            text: '扩展',
            base: '',
            items: [{ text: '示例', link: '/zh/extra/examples' }],
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
      // https://icon-sets.iconify.design/logos/?keyword=logos
      // https://icon-sets.iconify.design/vscode-icons/?keyword=vscode-icons
      groupIconVitePlugin({
        customIcon: {
          'cherry studio': localIconLoader(import.meta.url, '../assets/cherry-studio.svg'),
          codebuddy: localIconLoader(import.meta.url, '../assets/codebuddy.svg'),
          cursor: localIconLoader(import.meta.url, '../assets/cursor.svg'),
          'github desktop': 'logos:github-octocat',
          goland: 'logos:goland',
          idea: 'logos:intellij-idea',
          phpstorm: 'logos:phpstorm',
          pycharm: 'logos:pycharm',
          rustrover: 'logos:rust',
          telegram: 'logos:telegram',
          thunder: localIconLoader(import.meta.url, '../assets/thunder.svg'),
          vscode: 'vscode-icons:file-type-vscode',
          webstorm: 'logos:webstorm',
          xcode: 'logos:xcode',
        },
      }),
    ],
  },
})
