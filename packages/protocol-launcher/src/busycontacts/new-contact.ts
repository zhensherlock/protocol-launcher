import type { BusyContactsNewContactPayload } from './shared'
import { busyContactsPathUrl } from './shared'

/**
 * Create a new BusyContacts contact using a natural language string.
 *
 * @param payload BusyContacts natural language contact creation payload.
 * @returns BusyContacts new contact URL.
 * @example
 * newContact({ text: 'Bob Jones 555-1212' })
 * // => 'busycontacts://new/Bob%20Jones%20555-1212'
 * @example
 * newContact({ text: 'Bob Jones 123 Main Street, Anytown USA /iCloud' })
 * // => 'busycontacts://new/Bob%20Jones%20123%20Main%20Street,%20Anytown%20USA%20/iCloud'
 * @link https://www.busymac.com/docs/busycontacts/56235-url-handler
 */
export function newContact(payload: BusyContactsNewContactPayload) {
  return busyContactsPathUrl('new', payload.text)
}
