import type { GvConnectAccountPayload, GvConnectTab, OpenTabPayload } from './shared'
import { gvConnectQuery } from './shared'

/**
 * Open a documented GV Connect tab.
 *
 * @param payload GV Connect tab payload.
 * @returns GV Connect tab URL.
 * @example
 * openTab({ tab: 'history' })
 * // => 'gvconnect://history'
 *
 * @link https://gvconnect.com/#Push
 */
export function openTab(payload: OpenTabPayload) {
  const { tab, account } = payload

  return `gvconnect://${tab}${gvConnectQuery({ account })}`
}

function openFixedTab(tab: GvConnectTab, payload: GvConnectAccountPayload = {}) {
  return openTab({ ...payload, tab })
}

/**
 * Open GV Connect's call tab.
 *
 * @param payload Optional GV Connect account payload.
 * @returns GV Connect call tab URL.
 * @example
 * openCallTab()
 * // => 'gvconnect://call'
 *
 * @link https://gvconnect.com/#Push
 */
export function openCallTab(payload: GvConnectAccountPayload = {}) {
  return openFixedTab('call', payload)
}

/**
 * Open GV Connect's SMS tab.
 *
 * @param payload Optional GV Connect account payload.
 * @returns GV Connect SMS tab URL.
 * @example
 * openSmsTab()
 * // => 'gvconnect://sms'
 *
 * @link https://gvconnect.com/#Push
 */
export function openSmsTab(payload: GvConnectAccountPayload = {}) {
  return openFixedTab('sms', payload)
}

/**
 * Open GV Connect's voicemail tab.
 *
 * @param payload Optional GV Connect account payload.
 * @returns GV Connect voicemail tab URL.
 * @example
 * openVoicemailTab()
 * // => 'gvconnect://vm'
 *
 * @link https://gvconnect.com/#Push
 */
export function openVoicemailTab(payload: GvConnectAccountPayload = {}) {
  return openFixedTab('vm', payload)
}

/**
 * Open GV Connect's history tab.
 *
 * @param payload Optional GV Connect account payload.
 * @returns GV Connect history tab URL.
 * @example
 * openHistory()
 * // => 'gvconnect://history'
 *
 * @link https://gvconnect.com/#Push
 */
export function openHistory(payload: GvConnectAccountPayload = {}) {
  return openFixedTab('history', payload)
}

/**
 * Open GV Connect's settings tab.
 *
 * @param payload Optional GV Connect account payload.
 * @returns GV Connect settings tab URL.
 * @example
 * openSettings()
 * // => 'gvconnect://settings'
 *
 * @link https://gvconnect.com/#Push
 */
export function openSettings(payload: GvConnectAccountPayload = {}) {
  return openFixedTab('settings', payload)
}
