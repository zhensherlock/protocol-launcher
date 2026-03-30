import { qs } from '@protocol-launcher/shared'

/**
 * Add bookmark command payload definition.
 */
type AddBookmark = {
  /**
   * The URL to bookmark.
   */
  url: string
  /**
   * The title of the bookmark.
   */
  title?: string
  /**
   * The folder to add the bookmark to.
   */
  folder?: string
}

/**
 * Add a bookmark in iCab Mobile.
 *
 * @param payload Add bookmark command payload.
 * @returns iCab Mobile add bookmark URL.
 * @example
 * addBookmark({ url: 'https://www.example.com/', title: 'Example' })
 * // => 'icabmobile://x-callback-url/add-bookmark?url=https://www.example.com/&title=Example'
 * @example
 * addBookmark({ url: 'https://www.example.com/', title: 'Example', folder: 'Favorites' })
 * // => 'icabmobile://x-callback-url/add-bookmark?url=https://www.example.com/&title=Example&folder=Favorites'
 * @link http://www.icab.de/blog-archive/2012/07/01/icab-mobile-6-0-supports-x-callback-url/
 */
export function addBookmark(payload: AddBookmark) {
  const { url, title, folder } = payload
  const params = qs({
    url,
    ...(title ? { title } : {}),
    ...(folder ? { folder } : {}),
  })

  return `icabmobile://x-callback-url/add-bookmark${params}`
}
