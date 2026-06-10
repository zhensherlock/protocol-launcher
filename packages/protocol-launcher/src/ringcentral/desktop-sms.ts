import { ringCentralDesktopPath } from './shared'

export type DesktopSms =
  | {
      /**
       * Phone number to prefill in the RingCentral desktop SMS composer.
       *
       * @example '15551234567'
       */
      phoneNumber: string

      /**
       * Text to prefill in the RingCentral desktop SMS composer.
       *
       * @example 'Hello from Protocol Launcher'
       */
      content?: string
    }
  | {
      phoneNumber?: undefined
      content?: undefined
    }

/**
 * Open the RingCentral SMS composer.
 *
 * @param payload RingCentral desktop SMS payload.
 * @returns RingCentral desktop SMS deep link.
 * @example
 * desktopSms()
 * // => '/r/sms?type=new'
 * @example
 * desktopSms({ phoneNumber: '15551234567', content: 'Hello from Protocol Launcher' })
 * // => '/r/sms?type=new&number=15551234567&content=Hello%20from%20Protocol%20Launcher'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function desktopSms(payload: DesktopSms = {}) {
  return ringCentralDesktopPath('sms', {
    type: 'new',
    number: payload.phoneNumber,
    content: payload.phoneNumber ? payload.content : undefined,
  })
}
