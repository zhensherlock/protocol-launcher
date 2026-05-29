import type { ZoomCallerIdPayload, ZoomPhoneNumberPayload } from './shared'
import { zoomPhoneUrl } from './shared'

export type PhoneCall = ZoomPhoneNumberPayload & ZoomCallerIdPayload

/**
 * Launch Zoom Phone and place an outbound call.
 *
 * @param payload Zoom Phone outbound call payload.
 * @returns Zoom Phone outbound call URL.
 * @example
 * phoneCall({ phoneNumber: '+15551234567' })
 * // => 'zoomphonecall://+15551234567'
 * @example
 * phoneCall({ phoneNumber: '+15551234567', callerId: '+15557654321' })
 * // => 'zoomphonecall://+15551234567?callerid=%2B15557654321'
 * @link https://developers.zoom.us/docs/phone/outbound-call/
 */
export function phoneCall(payload: PhoneCall) {
  const { phoneNumber, callerId } = payload

  return zoomPhoneUrl('zoomphonecall', phoneNumber, {
    callerid: callerId,
  })
}
