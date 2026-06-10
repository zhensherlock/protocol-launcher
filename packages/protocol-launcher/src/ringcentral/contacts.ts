import { ringCentralMobileUrl } from './shared'

/**
 * Open the contacts screen in the RingCentral mobile app.
 *
 * @returns RingCentral mobile contacts URI.
 * @example
 * contacts()
 * // => 'rcmobile://contacts'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function contacts() {
  return ringCentralMobileUrl('contacts')
}
