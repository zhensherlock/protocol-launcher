import { qs } from '@protocol-launcher/shared'

export type ZoomPhoneNumberPayload = {
  /**
   * Phone number or extension.
   */
  phoneNumber: string
}

export type ZoomCallerIdPayload = {
  /**
   * Caller ID to display. Zoom documents this as an extension or E.164 number.
   */
  callerId?: string
}

export function zoomPhoneUrl(
  scheme: 'zoomphonecall' | 'zoomphonesms',
  phoneNumber: string,
  params: Record<string, unknown> = {},
) {
  return `${scheme}://${phoneNumber}${qs(params)}`
}
