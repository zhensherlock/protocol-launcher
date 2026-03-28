import { qs } from '@protocol-launcher/shared'

/**
 * Create document payload definition.
 */
type Create = {
  /**
   * The path to the folder in which you want to create the document.
   *
   * @example 'Dropbox/Documents'
   */
  path?: string
  /**
   * The name for the document.
   *
   * @example 'Notes.txt'
   */
  name?: string
  /**
   * The content for the document. If not specified, the content of the clipboard will be used.
   *
   * @example 'Hello world'
   */
  text?: string
}

/**
 * Creates a new document in 1Writer.
 *
 * @param payload Create document payload.
 * @returns 1Writer create document URL.
 * @example
 * create({
 *   path: 'Dropbox/Documents',
 *   name: 'Notes.txt',
 *   text: 'Hello world',
 * })
 * // => 'onewriter://x-callback-url/create?path=Dropbox%2FDocuments&name=Notes.txt&text=Hello%20world'
 * @example
 * create({ path: 'iCloud/Work' })
 * // => 'onewriter://x-callback-url/create?path=iCloud%2FWork'
 * @link https://1writerapp.com/url-scheme/
 */
export function create(payload: Create = {}) {
  const { path, name, text } = payload
  const params = qs({
    ...(path ? { path } : {}),
    ...(name ? { name } : {}),
    ...(text ? { text } : {}),
  })

  return `onewriter://x-callback-url/create${params}`
}
