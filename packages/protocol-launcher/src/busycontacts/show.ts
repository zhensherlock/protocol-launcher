import type { BusyContactsContactPayload } from './shared'
import { busyContactsPathUrl } from './shared'

/**
 * Show a contact in BusyContacts.
 *
 * @param payload BusyContacts contact lookup payload.
 * @returns BusyContacts show URL.
 * @example
 * show({ identifier: 'test@apple.com' })
 * // => 'busycontacts://show/test@apple.com'
 * @example
 * show({ identifier: 'f90221ac-84a8-4f40-a699-5930b59a24d1' })
 * // => 'busycontacts://show/f90221ac-84a8-4f40-a699-5930b59a24d1'
 * @link https://www.busymac.com/docs/busycontacts/56235-url-handler
 */
export function show(payload: BusyContactsContactPayload) {
  return busyContactsPathUrl('show', payload.identifier)
}
