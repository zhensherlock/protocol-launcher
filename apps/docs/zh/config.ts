import { type DefaultTheme, defineAdditionalConfig } from 'vitepress'
import pkg from '../../../packages/protocol-launcher/package.json' with { type: 'json' }

// https://vitepress.dev/reference/site-config
export default defineAdditionalConfig({
  description: 'Cherry Studio 和 Cursor 的一键启动链接生成器',
  themeConfig: {
    nav: [
      { text: '首页', link: '/zh/' },
      { text: '指南', link: '/zh/guide/getting-started', activeMatch: '/guide/' },
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

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是 Protocol Launcher？', link: '/zh/guide/what-is-it' },
          { text: '快速开始', link: '/zh/guide/getting-started' },
        ],
      },
      {
        text: '应用程序',
        items: [
          { text: 'AFFiNE', link: '/zh/apps/affine' },
          { text: 'Antigravity', link: '/zh/apps/antigravity' },
          { text: 'BBEdit', link: '/zh/apps/bbedit' },
          { text: 'Cherry Studio', link: '/zh/apps/cherry-studio' },
          { text: 'CodeBuddy', link: '/zh/apps/code-buddy' },
          { text: 'CodeLite', link: '/zh/apps/codelite' },
          { text: 'Cursor', link: '/zh/apps/cursor' },
          { text: 'Codex', link: '/zh/apps/codex' },
          { text: 'GitHub Desktop', link: '/zh/apps/github-desktop' },
          { text: 'GoLand', link: '/zh/apps/goland' },
          { text: 'IntelliJ IDEA', link: '/zh/apps/idea' },
          { text: 'Kiro', link: '/zh/apps/kiro' },
          { text: 'Lingma', link: '/zh/apps/lingma' },
          { text: 'MacVim', link: '/zh/apps/macvim' },
          { text: 'Nova', link: '/zh/apps/nova' },
          { text: 'OpenCode', link: '/zh/apps/opencode' },
          { text: 'PearAI', link: '/zh/apps/pearai' },
          { text: 'PhpStorm', link: '/zh/apps/phpstorm' },
          { text: 'PyCharm', link: '/zh/apps/pycharm' },
          { text: 'Qoder', link: '/zh/apps/qoder' },
          { text: 'RustRover', link: '/zh/apps/rustrover' },
          { text: 'Telegram', link: '/zh/apps/telegram' },
          { text: 'TextMate', link: '/zh/apps/textmate' },
          { text: 'Thunder', link: '/zh/apps/thunder' },
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
        items: [{ text: '示例', link: '/zh/extra/examples' }],
      },
    ],

    search: { options: searchOptions() },
  },
})

function searchOptions(): Partial<DefaultTheme.AlgoliaSearchOptions> {
  return {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        searchBox: {
          clearButtonTitle: '清除查询条件',
          clearButtonAriaLabel: '清除查询条件',
          closeButtonText: '关闭',
          closeButtonAriaLabel: '关闭',
          placeholderText: '搜索文档',
          placeholderTextAskAi: '向 AI 提问：',
          placeholderTextAskAiStreaming: '回答中...',
          searchInputLabel: '搜索',
          backToKeywordSearchButtonText: '返回关键字搜索',
          backToKeywordSearchButtonAriaLabel: '返回关键字搜索',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
          recentConversationsTitle: '最近的对话',
          removeRecentConversationButtonTitle: '从历史记录中删除对话',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
        resultsScreen: {
          askAiPlaceholder: '向 AI 提问： ',
        },
        askAiScreen: {
          disclaimerText: '答案由 AI 生成，可能不准确，请自行验证。',
          relatedSourcesText: '相关来源',
          thinkingText: '思考中...',
          copyButtonText: '复制',
          copyButtonCopiedText: '已复制！',
          copyButtonTitle: '复制',
          likeButtonTitle: '赞',
          dislikeButtonTitle: '踩',
          thanksForFeedbackText: '感谢你的反馈！',
          preToolCallText: '搜索中...',
          duringToolCallText: '搜索 ',
          afterToolCallText: '已搜索',
          // aggregatedToolCallText: '已搜索',
        },
        footer: {
          selectText: '选择',
          submitQuestionText: '提交问题',
          selectKeyAriaLabel: 'Enter 键',
          navigateText: '切换',
          navigateUpKeyAriaLabel: '向上箭头',
          navigateDownKeyAriaLabel: '向下箭头',
          closeText: '关闭',
          backToSearchText: '返回搜索',
          closeKeyAriaLabel: 'Esc 键',
          poweredByText: '搜索提供者',
        },
      },
    },
  }
}
