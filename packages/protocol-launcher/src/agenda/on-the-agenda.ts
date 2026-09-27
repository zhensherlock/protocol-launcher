import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'
/**
 * Open the On the Agenda overview.
 *
 * @param payload Optional callback parameters.
 * @returns Agenda on the agenda URL.
 * @example
 * onTheAgenda()
 * // => 'agenda://x-callback-url/on-the-agenda'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function onTheAgenda(payload: Callbacks = {}) {
  return `agenda://x-callback-url/on-the-agenda${qs(callbackParams(payload))}`
}
