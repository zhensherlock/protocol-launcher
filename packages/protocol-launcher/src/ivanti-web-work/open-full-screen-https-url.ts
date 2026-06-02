import type { IvantiWebWorkUrlPayload } from './shared'
import { webWorkUrl } from './shared'

/**
 * Open full-screen HTTPS URL definition.
 */
export type OpenFullScreenHttpsUrl = IvantiWebWorkUrlPayload

/**
 * Open an HTTPS full-screen web clip URL in Ivanti Web@Work for iOS.
 *
 * @param payload Open full-screen HTTPS URL command payload.
 * @returns Ivanti Web@Work URL with the official full-screen HTTPS scheme.
 * @throws When the URL does not start with `https://`.
 * @example
 * openFullScreenHttpsUrl({ url: 'https://www.example.com/app' })
 * // => 'mibrowsersf://www.example.com/app'
 * @link https://help.ivanti.com/mi/help/en_US/WW/2.x.x/gdi/WebAtWorkForiOS/Website_authentication_u.htm
 */
export function openFullScreenHttpsUrl(payload: OpenFullScreenHttpsUrl) {
  return webWorkUrl(payload, 'https', 'mibrowsersf')
}
