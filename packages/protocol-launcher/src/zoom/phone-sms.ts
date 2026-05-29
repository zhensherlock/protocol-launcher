import type { ZoomCallerIdPayload, ZoomPhoneNumberPayload } from './shared'
import { zoomPhoneUrl } from './shared'

export type PhoneSms = ZoomPhoneNumberPayload & ZoomCallerIdPayload

/**
 * Launch Zoom Phone SMS.
 *
 * @param payload Zoom Phone SMS payload.
 * @returns Zoom Phone SMS URL.
 * @example
 * phoneSms({ phoneNumber: '+123456789', callerId: '+16692520210' })
 * // => 'zoomphonesms://+123456789?callerid=%2B16692520210'
 * @link https://developers.zoom.us/docs/phone/outbound-sms/
 */
export function phoneSms(payload: PhoneSms) {
  const { phoneNumber, callerId } = payload

  return zoomPhoneUrl('zoomphonesms', phoneNumber, {
    callerid: callerId,
  })
}
