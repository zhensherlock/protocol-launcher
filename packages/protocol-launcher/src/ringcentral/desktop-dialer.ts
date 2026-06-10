import { ringCentralDesktopPath } from './shared'

export type DesktopDialer = {
  /**
   * Optional phone number to prefill in the RingCentral desktop dialer.
   *
   * @example '15551234567'
   */
  phoneNumber?: string
}

/**
 * Open the RingCentral in-app dialer, optionally with a prefilled number.
 *
 * @param payload RingCentral desktop dialer payload.
 * @returns RingCentral desktop dialer deep link.
 * @example
 * desktopDialer()
 * // => '/r/dialer'
 * @example
 * desktopDialer({ phoneNumber: '15551234567' })
 * // => '/r/dialer?number=15551234567'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function desktopDialer(payload: DesktopDialer = {}) {
  return ringCentralDesktopPath('dialer', {
    number: payload.phoneNumber,
  })
}
