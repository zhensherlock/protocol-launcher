import type { DiarlyIdentifier } from './shared'
import { diarlyIdentifierParams, diarlyXCallbackUrl } from './shared'

/**
 * Open endpoint payload definition.
 */
type Open = DiarlyIdentifier

/**
 * Open a Diarly note or daily entry using the documented identifier parameters.
 *
 * @param payload Open endpoint payload.
 * @returns Diarly open x-callback-url.
 * @example
 * open({ id: 'REPLACE_WITH_NOTE_ID' })
 * // => 'diarly://x-callback-url/open?id=REPLACE_WITH_NOTE_ID'
 * @example
 * open({ day: '01-01-2019', journal: '2bc759b2-9dd8-4186-ba64-12890f5642c9' })
 * // => 'diarly://x-callback-url/open?day=01-01-2019&journal=2bc759b2-9dd8-4186-ba64-12890f5642c9'
 * @link https://diarly.app/help/x-callback-url-scheme-documentation.html
 */
export function open(payload: Open) {
  return diarlyXCallbackUrl('open', diarlyIdentifierParams(payload))
}
