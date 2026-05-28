import type { JoplinItemLink } from './shared'
import { joplinUrl } from './shared'

/**
 * Open a Joplin note.
 *
 * @param payload Joplin note link payload.
 * @returns Joplin openNote URL.
 * @example
 * openNote({ id: '0123456789abcdef0123456789abcdef' })
 * // => 'joplin://x-callback-url/openNote?id=0123456789abcdef0123456789abcdef'
 * @link https://joplinapp.org/help/apps/external_links/
 */
export function openNote(payload: JoplinItemLink) {
  return joplinUrl('openNote', payload)
}
