import type { RingCentralPhoneNumberPayload } from './shared'

export type Tel = RingCentralPhoneNumberPayload

/**
 * Initiate a phone call using the default phone app.
 *
 * @param payload Phone app call payload.
 * @returns Default phone app tel URI.
 * @example
 * tel({ phoneNumber: '15551234567' })
 * // => 'tel:15551234567'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function tel(payload: Tel) {
  return `tel:${payload.phoneNumber}`
}
