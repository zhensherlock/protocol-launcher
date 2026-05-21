import type { SaveTab } from './shared'
import { anyboxUrl } from './shared'

/**
 * Save the current browser tab to Anybox on macOS.
 *
 * @param payload Save current browser tab payload.
 * @returns Anybox save-tab URL.
 * @example
 * saveTab({ tag: 'Reading', starred: 'yes', archive: 'pdf' })
 * // => 'anybox://save-tab?tag=Reading&starred=yes&archive=pdf'
 * @link https://anybox.app/url-schemes
 */
export function saveTab(payload: SaveTab = {}) {
  const { tag, starred, archive } = payload

  return anyboxUrl('save-tab', {
    ...(tag ? { tag } : {}),
    ...(starred ? { starred } : {}),
    ...(archive ? { archive } : {}),
  })
}
