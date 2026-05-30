import type { BusyContactsContactPayload } from './shared'
import { busyContactsPathUrl } from './shared'

/**
 * Open a contact in a separate BusyContacts floating window.
 *
 * @param payload BusyContacts contact lookup payload.
 * @returns BusyContacts open URL.
 * @example
 * openContact({ identifier: 'B8FB81A6-659D-4E66-B1B7-97A95A144C83:ABPerson' })
 * // => 'busycontacts://open/B8FB81A6-659D-4E66-B1B7-97A95A144C83:ABPerson'
 * @link https://www.busymac.com/docs/busycontacts/56235-url-handler
 */
export function openContact(payload: BusyContactsContactPayload) {
  return busyContactsPathUrl('open', payload.identifier)
}
