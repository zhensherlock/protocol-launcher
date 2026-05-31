import { qs } from '@protocol-launcher/shared'

export type BuchenBrowser =
  | 'safari'
  | 'edge'
  | 'icab mobile'
  | 'opera'
  | 'brave'
  | 'chrome'
  | 'firefox'
  | 'firefox focus'
  | 'duckduckgo'
  | 'quiche'
  | 'jayson'

/**
 * Buchen add tag payload definition.
 */
export type BuchenAddTagPayload = {
  /**
   * Tag name.
   *
   * @example 'reading'
   */
  name: string
}

/**
 * Buchen add bookmark payload definition.
 */
export type BuchenAddBookmarkPayload = {
  /**
   * Bookmark name.
   *
   * @example 'Protocol Launcher'
   */
  name: string

  /**
   * Bookmark URL. The helper percent-encodes this value as required by Buchen.
   *
   * @example 'https://www.example.com/'
   */
  url: string

  /**
   * Official Buchen browser value.
   *
   * @example 'firefox focus'
   */
  browser?: BuchenBrowser
}

export function buchenAddTagUrl(payload: BuchenAddTagPayload) {
  return `buchen://add-tag${qs({ name: payload.name })}`
}

export function buchenAddBookmarkUrl(payload: BuchenAddBookmarkPayload) {
  const { name, url, browser } = payload

  return `buchen://add${qs({
    name,
    url,
    ...(browser ? { browser } : {}),
  })}`
}

export function buchenNavigationUrl(destination: 'bookmarks' | 'tags' | 'folders') {
  return `buchen://go-${destination}`
}
