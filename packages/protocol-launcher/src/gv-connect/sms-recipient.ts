import type { SmsRecipientPayload } from './shared'
import { gvConnectBareQuery, gvConnectSmsRecipientList } from './shared'

/**
 * Open GV Connect's SMS compose window using the compact recipient-only URL form.
 *
 * @param payload SMS recipient payload.
 * @returns GV Connect SMS recipient URL.
 * @example
 * smsRecipient({ number: ['+15551234567', '+15557654321'] })
 * // => 'gvconnect://sms?%2B15551234567%2C%2B15557654321'
 *
 * @link https://gvconnect.com/#Push
 */
export function smsRecipient(payload: SmsRecipientPayload) {
  const { number, account } = payload

  return `gvconnect://sms${gvConnectBareQuery(gvConnectSmsRecipientList(number), account)}`
}
