import type { IvantiWebWorkUrlPayload } from './shared'
import { webWorkUrl } from './shared'

/**
 * Open HTTPS URL definition.
 */
export type OpenHttpsUrl = IvantiWebWorkUrlPayload

/**
 * Open an HTTPS URL in Ivanti Web@Work for iOS.
 *
 * @param payload Open HTTPS URL command payload.
 * @returns Ivanti Web@Work URL with the official HTTPS scheme.
 * @throws When the URL does not start with `https://`.
 * @example
 * openHttpsUrl({ url: 'https://www.example.com/secure' })
 * // => 'mibrowsers://www.example.com/secure'
 * @link https://help.ivanti.com/mi/help/en_US/WW/2.x.x/gdi/WebAtWorkForiOS/Website_authentication_u.htm
 */
export function openHttpsUrl(payload: OpenHttpsUrl) {
  return webWorkUrl(payload, 'https', 'mibrowsers')
}
