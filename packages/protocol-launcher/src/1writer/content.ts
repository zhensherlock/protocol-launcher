import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

/**
 * Content payload definition.
 */
type Content = Callbacks & {
  /**
   * The path to the document.
   *
   * @example 'Dropbox/Documents/Notes.txt'
   */
  path?: string
  /**
   * The content will be passed to the x-success URL using this parameter name. Default value is "text".
   *
   * @example 'content'
   */
  param?: string
}

/**
 * Returns content of a document in 1Writer.
 *
 * @param payload Content payload.
 * @returns 1Writer content URL.
 * @example
 * content({ path: 'Dropbox/Documents/Notes.txt' })
 * // => 'onewriter://x-callback-url/content?path=Dropbox%2FDocuments%2FNotes.txt'
 * @example
 * content({ path: 'Notes.txt', param: 'content' })
 * // => 'onewriter://x-callback-url/content?path=Notes.txt&param=content'
 * @link https://1writerapp.com/url-scheme/
 */
export function content(payload: Content = {}) {
  const { path, param } = payload
  const params = qs({
    ...(path ? { path } : {}),
    ...(param ? { param } : {}),
    ...callbackParams(payload),
  })

  return `onewriter://x-callback-url/content${params}`
}
