/**
 * Open Shortcuts gallery definition.
 */
type OpenGallery = {
  /**
   * Search query for the gallery.
   */
  query?: string
}

/**
 * Open Shortcuts gallery.
 *
 * @param payload Open gallery definition.
 * @returns Shortcuts gallery URL.
 * @example
 * openGallery()
 * // => 'shortcuts://gallery'
 * @example
 * openGallery({ query: 'photos' })
 * // => 'shortcuts://gallery/search?query=photos'
 * @link https://support.apple.com/zh-cn/guide/shortcuts/apd9c112ca23/9.0/ios/26
 */
export function openGallery(payload: OpenGallery = {}) {
  const { query } = payload
  if (query) {
    return `shortcuts://gallery/search?query=${encodeURIComponent(query)}`
  }
  return 'shortcuts://gallery'
}
