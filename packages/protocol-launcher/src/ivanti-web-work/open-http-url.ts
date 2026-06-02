import type { IvantiWebWorkUrlPayload } from './shared'
import { webWorkUrl } from './shared'

/**
 * Open HTTP URL definition.
 */
export type OpenHttpUrl = IvantiWebWorkUrlPayload

/**
 * Open an HTTP URL in Ivanti Web@Work for iOS.
 *
 * @param payload Open HTTP URL command payload.
 * @returns Ivanti Web@Work URL with the official HTTP scheme.
 * @throws When the URL does not start with `http://`.
 * @example
 * openHttpUrl({ url: 'http://www.example.com/intranet' })
 * // => 'mibrowser://www.example.com/intranet'
 * @link https://help.ivanti.com/mi/help/en_US/WW/2.x.x/gdi/WebAtWorkForiOS/Website_authentication_u.htm
 */
export function openHttpUrl(payload: OpenHttpUrl) {
  return webWorkUrl(payload, 'http', 'mibrowser')
}
