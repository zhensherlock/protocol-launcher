import type { QuickSettingPayload } from './shared'
import { gvConnectBareQuery } from './shared'

/**
 * Switch GV Connect to a named Quick Setting.
 *
 * @param payload Quick Setting payload.
 * @returns GV Connect Quick Setting URL.
 * @example
 * quickSetting({ name: 'Do Not Disturb' })
 * // => 'gvconnect://quicksetting?Do%20Not%20Disturb'
 *
 * @link https://gvconnect.com/#Push
 */
export function quickSetting(payload: QuickSettingPayload) {
  const { name, account } = payload

  return `gvconnect://quicksetting${gvConnectBareQuery(name, account)}`
}
