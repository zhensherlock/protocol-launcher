export type Call = {
  /**
   * Telephone number or SIP-style address to call with Webex App.
   *
   * @example '+1234567890'
   * @example 'device@example.com'
   */
  destination: string
}

/**
 * Place a URI based call with the Webex App.
 *
 * @param payload Webex call payload.
 * @returns Webex click-to-call URL.
 * @example
 * call({
 *   destination: '+1234567890',
 * })
 * // => 'webextel:+1234567890'
 * @example
 * call({
 *   destination: 'device@example.com',
 * })
 * // => 'webextel:device@example.com'
 * @link https://developer.webex.com/blog/build-a-click-to-call-shortcut-using-adaptive-cards-in-webex
 */
export function call(payload: Call) {
  return `webextel:${payload.destination}`
}
