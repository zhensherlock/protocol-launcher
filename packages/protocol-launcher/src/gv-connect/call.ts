import type { CallPayload } from './shared'
import { gvConnectQuery } from './shared'

/**
 * Initiate a GV Connect call with a documented calling method.
 *
 * @param payload GV Connect call payload.
 * @returns GV Connect call URL.
 * @example
 * call({ number: '+15551234567', callMethod: 'DirectCall' })
 * // => 'gvconnect://call?number=%2B15551234567&callmethod=DirectCall'
 *
 * @link https://gvconnect.com/#Push
 */
export function call(payload: CallPayload) {
  const { number, callMethod, account } = payload

  return `gvconnect://call${gvConnectQuery({
    number,
    callmethod: callMethod,
    account,
  })}`
}
