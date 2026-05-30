import type { OneNoteClientUrlPayload } from './shared'
import { oneNoteClientUrl } from './shared'

/**
 * Open a known OneNote client URL returned by Microsoft Graph.
 *
 * @param payload OneNote client URL payload.
 * @returns OneNote client URL.
 * @example
 * openClientUrl({ href: 'onenote:https://...' })
 * // => 'onenote:https://...'
 *
 * @link https://learn.microsoft.com/en-us/graph/open-onenote-client
 */
export function openClientUrl(payload: OneNoteClientUrlPayload) {
  return oneNoteClientUrl(payload.href)
}
