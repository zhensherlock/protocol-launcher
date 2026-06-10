import type { RingCentralPhoneNumberPayload } from './shared'

export type SystemSms = RingCentralPhoneNumberPayload

/**
 * Open the default SMS app with a prefilled number.
 *
 * @param payload Default SMS app payload.
 * @returns Default SMS app URI.
 * @example
 * systemSms({ phoneNumber: '15551234567' })
 * // => 'sms:15551234567'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function systemSms(payload: SystemSms) {
  return `sms:${payload.phoneNumber}`
}
