import { ringCentralMobileUrl } from './shared'

/**
 * Open the audio conference dialer in the RingCentral mobile app.
 *
 * @returns RingCentral mobile conference URI.
 * @example
 * conference()
 * // => 'rcmobile://conference'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function conference() {
  return ringCentralMobileUrl('conference')
}
