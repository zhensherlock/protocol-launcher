import type { ZoomPhoneNumberPayload } from './shared'

export type Tel = ZoomPhoneNumberPayload

/**
 * Launch Zoom Phone with the tel URI scheme.
 *
 * @param payload Zoom Phone tel payload.
 * @returns Zoom Phone tel URL.
 * @example
 * tel({ phoneNumber: '+123456789' })
 * // => 'tel:+123456789'
 * @link https://developers.zoom.us/docs/phone/outbound-call/
 */
export function tel(payload: Tel) {
  return `tel:${payload.phoneNumber}`
}
