import { ringCentralMobileUrl } from './shared'

/**
 * Launch the RingCentral Meetings or Video interface.
 *
 * @returns RingCentral mobile meeting URI.
 * @example
 * meeting()
 * // => 'rcmobile://meeting'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function meeting() {
  return ringCentralMobileUrl('meeting')
}
