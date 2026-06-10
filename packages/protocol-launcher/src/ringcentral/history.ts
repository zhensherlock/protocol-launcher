import { ringCentralMobileUrl } from './shared'

/**
 * Show the call history screen in the RingCentral mobile app.
 *
 * @returns RingCentral mobile history URI.
 * @example
 * history()
 * // => 'rcmobile://history'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function history() {
  return ringCentralMobileUrl('history')
}
