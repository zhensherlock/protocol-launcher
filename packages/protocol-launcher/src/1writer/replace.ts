import { qs } from '@protocol-launcher/shared'

/**
 * Replace document payload definition.
 */
type Replace = {
  /**
   * The path to the document.
   *
   * @example 'Dropbox/Documents/Notes.txt'
   */
  path?: string
  /**
   * The new content for the document. If not specified, the content of the clipboard will be used.
   *
   * @example 'Hello world'
   */
  text?: string
}

/**
 * Replaces content of a document in 1Writer.
 *
 * @param payload Replace document payload.
 * @returns 1Writer replace document URL.
 * @example
 * replace({
 *   path: 'Dropbox/Documents/Notes.txt',
 *   text: 'Hello world',
 * })
 * // => 'onewriter://x-callback-url/replace?path=Dropbox%2FDocuments%2FNotes.txt&text=Hello%20world'
 * @example
 * replace({ path: 'iCloud/Work/Actions.txt' })
 * // => 'onewriter://x-callback-url/replace?path=iCloud%2FWork%2FActions.txt'
 * @link https://1writerapp.com/url-scheme/
 */
export function replace(payload: Replace = {}) {
  const { path, text } = payload
  const params = qs({
    ...(path ? { path } : {}),
    ...(text ? { text } : {}),
  })

  return `onewriter://x-callback-url/replace${params}`
}
