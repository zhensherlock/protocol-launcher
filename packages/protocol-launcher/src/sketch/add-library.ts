import { qs } from '@protocol-launcher/shared'

/**
 * Add library payload definition.
 */
type AddLibrary = {
  /**
   * URL to the appcast RSS file for the shared library.
   *
   * @example 'https://developer.apple.com/design/downloads/sketch.rss'
   */
  url: string
}

/**
 * Add a shared Library to Sketch.
 *
 * @param payload Add library definition.
 * @returns Sketch add library URL.
 * @example
 * addLibrary({
 *   url: 'https://developer.apple.com/design/downloads/sketch.rss',
 * })
 * // => 'sketch://add-library?url=https%3A%2F%2Fdeveloper.apple.com%2Fdesign%2Fdownloads%2Fsketch.rss'
 * @link https://developer.sketch.com/app
 */
export function addLibrary(payload: AddLibrary) {
  const { url } = payload
  const params = qs({ url })

  return `sketch://add-library${params}`
}
