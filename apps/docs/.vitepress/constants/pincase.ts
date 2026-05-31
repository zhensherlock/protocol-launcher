export const addBookmarkParams = {
  url: 'http://pincaseapp.com/',
  title: 'Pincase - A simple, elegant and powerful Pinboard.in client for iOS',
  noui: 'yes',
  later: 'yes',
} as const

export const addBookmarkWithCallbacksParams = {
  url: 'https://www.example.com/article?ref=url scheme',
  title: 'Example Article',
  private: 'no',
  toread: 'no',
  noui: 'no',
  xSuccess: 'myapp://success',
  xError: 'myapp://error',
  xCancel: 'myapp://cancel',
} as const

export const openPublicTagParams = {
  mode: 'public_tag',
  tag: 'iOS',
} as const

export const openTagParams = {
  mode: 'personal_tag',
  tag: 'reading list',
} as const
