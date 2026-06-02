import type { IvantiWebWorkUrlPayload } from './shared'
import { webWorkUrl } from './shared'

/**
 * Open full-screen HTTP URL definition.
 */
export type OpenFullScreenHttpUrl = IvantiWebWorkUrlPayload

/**
 * Open an HTTP full-screen web clip URL in Ivanti Web@Work for iOS.
 *
 * @param payload Open full-screen HTTP URL command payload.
 * @returns Ivanti Web@Work URL with the official full-screen HTTP scheme.
 * @throws When the URL does not start with `http://`.
 * @example
 * openFullScreenHttpUrl({ url: 'http://www.example.com/app' })
 * // => 'mibrowserf://www.example.com/app'
 * @link https://help.ivanti.com/mi/help/en_US/WW/2.x.x/gdi/WebAtWorkForiOS/Website_authentication_u.htm
 */
export function openFullScreenHttpUrl(payload: OpenFullScreenHttpUrl) {
  return webWorkUrl(payload, 'http', 'mibrowserf')
}
