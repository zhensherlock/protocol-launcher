import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'
/**
 * Open the Today overview.
 *
 * @param payload Optional callback parameters.
 * @returns Agenda today URL.
 * @example
 * today()
 * // => 'agenda://x-callback-url/today'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function today(payload: Callbacks = {}) {
  return `agenda://x-callback-url/today${qs(callbackParams(payload))}`
}
