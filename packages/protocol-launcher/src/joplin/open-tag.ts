import type { JoplinItemLink } from './shared'
import { joplinUrl } from './shared'

/**
 * Open a Joplin tag.
 *
 * @param payload Joplin tag link payload.
 * @returns Joplin openTag URL.
 * @example
 * openTag({ id: '0123456789abcdef0123456789abcdef' })
 * // => 'joplin://x-callback-url/openTag?id=0123456789abcdef0123456789abcdef'
 * @link https://joplinapp.org/help/apps/external_links/
 */
export function openTag(payload: JoplinItemLink) {
  return joplinUrl('openTag', payload)
}
