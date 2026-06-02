import type { DialPayload } from './shared'
import { gvConnectBareQuery } from './shared'

/**
 * Open GV Connect's dial pad with a phone number entered.
 *
 * @param payload Dial pad payload.
 * @returns GV Connect dial pad URL.
 * @example
 * dial({ number: '+15551234567' })
 * // => 'gvconnect://call?%2B15551234567'
 *
 * @link https://gvconnect.com/#Push
 */
export function dial(payload: DialPayload) {
  const { number, account } = payload

  return `gvconnect://call${gvConnectBareQuery(number, account)}`
}
