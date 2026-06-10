import type { RingCentralPhoneNumberPayload } from './shared'
import { ringCentralDesktopPath } from './shared'

export type DesktopCall = RingCentralPhoneNumberPayload

/**
 * Initiate a call in-app from RingCentral desktop.
 *
 * @param payload RingCentral desktop call payload.
 * @returns RingCentral desktop call deep link.
 * @example
 * desktopCall({ phoneNumber: '15551234567' })
 * // => '/r/call?number=15551234567'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function desktopCall(payload: DesktopCall) {
  return ringCentralDesktopPath('call', {
    number: payload.phoneNumber,
  })
}
