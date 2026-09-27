import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

/**
 * Open document payload definition.
 */
type Open = Callbacks & {
  /**
   * The path to the document.
   *
   * @example 'Dropbox/Documents/Notes.txt'
   */
  path?: string
}

/**
 * Opens an existing document in 1Writer.
 *
 * @param payload Open document payload.
 * @returns 1Writer open document URL.
 * @example
 * open({ path: 'Dropbox/Documents/Notes.txt' })
 * // => 'onewriter://x-callback-url/open?path=Dropbox%2FDocuments%2FNotes.txt'
 * @example
 * open({})
 * // => 'onewriter://x-callback-url/open'
 * @link https://1writerapp.com/url-scheme/
 */
export function open(payload: Open = {}) {
  const { path } = payload
  const params = qs({
    ...(path ? { path } : {}),
    ...callbackParams(payload),
  })

  return `onewriter://x-callback-url/open${params}`
}
