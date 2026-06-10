import type { RingCentralPhoneNumberPayload } from './shared'
import { ringCentralMobileUrl } from './shared'

export type Call = RingCentralPhoneNumberPayload

/**
 * Initiate a phone call in the RingCentral mobile app.
 *
 * @param payload RingCentral mobile call payload.
 * @returns RingCentral mobile call URI.
 * @example
 * call({ phoneNumber: '15551234567' })
 * // => 'rcmobile://call?number=15551234567'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function call(payload: Call) {
  return ringCentralMobileUrl('call', {
    number: payload.phoneNumber,
  })
}
