import type { PanoramaXQueryValue } from './shared'
import { panoramaXUrl } from './shared'

export type WritePreferencePayload = {
  /**
   * Panorama preference name to set.
   */
  name: string

  /**
   * Preference value. Panorama's official docs note that URL values are supplied as text.
   */
  value: PanoramaXQueryValue
}

/**
 * Set one Panorama X preference through the documented writepreference URL.
 *
 * @param payload Preference payload.
 * @returns Panorama X writepreference URL.
 * @example
 * writePreference({ name: 'newwindowwidth', value: 800 })
 * // => 'panoramax://writepreference?newwindowwidth=800'
 * @link https://www.provue.com/panoramax/help/statement_writepreference.html
 */
export function writePreference(payload: WritePreferencePayload) {
  const { name, value } = payload

  return panoramaXUrl('writepreference', { [name]: value })
}
