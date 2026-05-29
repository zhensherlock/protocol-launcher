import type { ZoomPhoneNumberPayload } from './shared'

export type Callto = ZoomPhoneNumberPayload

/**
 * Launch Zoom Phone with the callto URI scheme.
 *
 * @param payload Zoom Phone callto payload.
 * @returns Zoom Phone callto URL.
 * @example
 * callto({ phoneNumber: '+123456789' })
 * // => 'callto:+123456789'
 * @link https://developers.zoom.us/docs/phone/outbound-call/
 */
export function callto(payload: Callto) {
  return `callto:${payload.phoneNumber}`
}
