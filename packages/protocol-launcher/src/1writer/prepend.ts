import { qs } from '@protocol-launcher/shared'

/**
 * Prepend document payload definition.
 */
type Prepend = {
  /**
   * The path to the document.
   *
   * @example 'Dropbox/Documents/Notes.txt'
   */
  path?: string
  /**
   * The content to prepend. If not specified, the content of the clipboard will be used.
   *
   * @example 'Hello world'
   */
  text?: string
}

/**
 * Prepends content to an existing document in 1Writer.
 *
 * @param payload Prepend document payload.
 * @returns 1Writer prepend document URL.
 * @example
 * prepend({
 *   path: 'Dropbox/Documents/Notes.txt',
 *   text: 'Hello world',
 * })
 * // => 'onewriter://x-callback-url/prepend?path=Dropbox%2FDocuments%2FNotes.txt&text=Hello%20world'
 * @example
 * prepend({ path: 'Notes.txt' })
 * // => 'onewriter://x-callback-url/prepend?path=Notes.txt'
 * @link https://1writerapp.com/url-scheme/
 */
export function prepend(payload: Prepend = {}) {
  const { path, text } = payload
  const params = qs({
    ...(path ? { path } : {}),
    ...(text ? { text } : {}),
  })

  return `onewriter://x-callback-url/prepend${params}`
}
