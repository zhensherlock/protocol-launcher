import { qs } from '@protocol-launcher/shared'

/**
 * Preference command payload definition.
 */
type Pref = {
  /**
   * The preference page to open.
   */
  page: string
}

/**
 * Open preference page in Longshot.
 *
 * @param payload Preference command payload.
 * @returns Longshot pref URL.
 * @example
 * pref({ page: 'shortcuts' })
 * // => 'longshot://pref?page=shortcuts'
 * @link https://longshot.chitaner.com/blog/urlschemeapi/
 */
export function pref(payload: Pref) {
  const { page } = payload
  const params = qs({ page })
  return `longshot://pref${params}`
}
