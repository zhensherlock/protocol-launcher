import { webexTeamsUrl } from './shared'

export type Meet = {
  /**
   * SIP address to meet or call with the Webex App.
   *
   * @example 'user@example.com'
   */
  sip: string
}

/**
 * Place a Webex App meeting/call to a SIP address.
 *
 * @param payload Webex SIP meeting payload.
 * @returns Webex Teams meet URL.
 * @example
 * meet({
 *   sip: 'user@example.com',
 * })
 * // => 'webexteams://meet?sip=user%40example.com'
 * @link https://developer.webex.com/blog/build-a-click-to-call-shortcut-using-adaptive-cards-in-webex
 */
export function meet(payload: Meet) {
  return webexTeamsUrl('meet', {
    sip: payload.sip,
  })
}
