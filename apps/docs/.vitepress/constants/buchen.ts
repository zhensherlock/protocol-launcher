export const addTagParams = {
  name: 'reading list',
} as const

export const addBookmarkParams = {
  name: 'Protocol Launcher',
  url: 'https://www.example.com/',
} as const

export const addBookmarkWithBrowserParams = {
  name: 'Protocol Launcher',
  url: 'https://www.example.com/search?q=url scheme',
  browser: 'firefox focus',
} as const
