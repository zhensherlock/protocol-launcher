import { ringCentralMobileUrl } from './shared'

/**
 * Open voicemail inbox in the RingCentral mobile app.
 *
 * @returns RingCentral mobile voicemail URI.
 * @example
 * voicemail()
 * // => 'rcmobile://voicemail'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function voicemail() {
  return ringCentralMobileUrl('voicemail')
}
