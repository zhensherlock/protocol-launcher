import type { OneNoteClientUrlPayload } from './shared'
import { oneNoteAndroidClientUrl } from './shared'

/**
 * Open a known OneNote client URL on Android.
 *
 * Microsoft documents that Android callers must surround GUID strings with
 * braces before starting the Intent.
 *
 * @param payload OneNote client URL payload.
 * @returns OneNote Android client URL.
 * @example
 * const androidClientUrl = openAndroidClientUrl({ href: oneNoteClientUrl })
 *
 * @link https://learn.microsoft.com/en-us/graph/open-onenote-client
 */
export function openAndroidClientUrl(payload: OneNoteClientUrlPayload) {
  return oneNoteAndroidClientUrl(payload.href)
}
