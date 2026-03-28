import { qs } from '@protocol-launcher/shared'

/**
 * Append document payload definition.
 */
type Append = {
  /**
   * The path to the document.
   *
   * @example 'Dropbox/Documents/Notes.txt'
   */
  path?: string
  /**
   * The content to append. If not specified, the content of the clipboard will be used.
   *
   * @example 'Hello world'
   */
  text?: string
}

/**
 * Appends content to an existing document in 1Writer.
 *
 * @param payload Append document payload.
 * @returns 1Writer append document URL.
 * @example
 * append({
 *   path: 'Dropbox/Documents/Notes.txt',
 *   text: 'Hello world',
 * })
 * // => 'onewriter://x-callback-url/append?path=Dropbox%2FDocuments%2FNotes.txt&text=Hello%20world'
 * @example
 * append({ path: 'Notes.txt' })
 * // => 'onewriter://x-callback-url/append?path=Notes.txt'
 * @link https://1writerapp.com/url-scheme/
 */
export function append(payload: Append = {}) {
  const { path, text } = payload
  const params = qs({
    ...(path ? { path } : {}),
    ...(text ? { text } : {}),
  })

  return `onewriter://x-callback-url/append${params}`
}
