import type { BusyContactsFilterPayload } from './shared'
import { busyContactsPathUrl } from './shared'

/**
 * Select a Smart Filter in BusyContacts.
 *
 * @param payload BusyContacts Smart Filter payload.
 * @returns BusyContacts Smart Filter URL.
 * @example
 * selectFilter({ name: 'friends' })
 * // => 'busycontacts://filter/friends'
 * @link https://www.busymac.com/docs/busycontacts/56235-url-handler
 */
export function selectFilter(payload: BusyContactsFilterPayload) {
  return busyContactsPathUrl('filter', payload.name)
}
