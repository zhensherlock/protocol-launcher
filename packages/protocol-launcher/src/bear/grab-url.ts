import { qs } from '@protocol-launcher/shared'

/**
 * Grab URL command payload definition.
 */
type GrabUrl = {
  /**
   * URL to grab (required).
   */
  url: string

  /**
   * A comma separated list of tags.
   */
  tags?: string

  /**
   * If yes pin the note to the top of the list.
   */
  pin?: boolean

  /**
   * If no x-success is immediately called without identifier and title.
   */
  wait?: boolean
}

/**
 * Create a new note with the content of a web page in Bear.
 *
 * @param payload Grab URL command payload.
 * @returns Bear grab-url URL.
 * @example
 * grabUrl({ url: 'https://bear.app' })
 * // => 'bear://x-callback-url/grab-url?url=https%3A%2F%2Fbear.app'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#grab-url
 */
export function grabUrl(payload: GrabUrl) {
  const { url, tags, pin, wait } = payload

  const params = qs({
    ...(url ? { url } : {}),
    ...(tags ? { tags } : {}),
    ...(pin ? { pin: 'yes' } : {}),
    ...(wait === false ? { wait: 'no' } : {}),
  })

  return `bear://x-callback-url/grab-url${params ? `?${params}` : ''}`
}
