import type { SmsPayload } from './shared'
import { gvConnectQuery, gvConnectSmsRecipientList } from './shared'

/**
 * Open GV Connect's SMS compose window with an optional recipient and/or message.
 *
 * @param payload SMS compose payload.
 * @returns GV Connect SMS URL.
 * @example
 * sms({ number: '+15551234567', message: 'On my way' })
 * // => 'gvconnect://sms?number=%2B15551234567&message=On%20my%20way'
 *
 * @link https://gvconnect.com/#Push
 */
export function sms(payload: SmsPayload) {
  const { number, message, account } = payload

  return `gvconnect://sms${gvConnectQuery({
    number: gvConnectSmsRecipientList(number),
    message,
    account,
  })}`
}
