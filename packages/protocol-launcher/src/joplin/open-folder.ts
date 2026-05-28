import type { JoplinItemLink } from './shared'
import { joplinUrl } from './shared'

/**
 * Open a Joplin folder.
 *
 * @param payload Joplin folder link payload.
 * @returns Joplin openFolder URL.
 * @example
 * openFolder({ id: '0123456789abcdef0123456789abcdef' })
 * // => 'joplin://x-callback-url/openFolder?id=0123456789abcdef0123456789abcdef'
 * @link https://joplinapp.org/help/apps/external_links/
 */
export function openFolder(payload: JoplinItemLink) {
  return joplinUrl('openFolder', payload)
}
