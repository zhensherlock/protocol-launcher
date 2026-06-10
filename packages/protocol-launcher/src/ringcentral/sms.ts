import type { RingCentralPhoneNumberPayload } from './shared'
import { ringCentralMobileUrl } from './shared'

export type Sms = RingCentralPhoneNumberPayload

/**
 * Open a new SMS message draft in the RingCentral mobile app.
 *
 * @param payload RingCentral mobile SMS payload.
 * @returns RingCentral mobile SMS URI.
 * @example
 * sms({ phoneNumber: '15551234567' })
 * // => 'rcmobile://sms?number=15551234567'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function sms(payload: Sms) {
  return ringCentralMobileUrl('sms', {
    number: payload.phoneNumber,
  })
}
