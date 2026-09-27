import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'
/**
 * Open the selected note or project in Agenda.
 *
 * @param payload Optional callback parameters.
 * @returns Agenda get selection URL.
 * @example
 * getSelection()
 * // => 'agenda://x-callback-url/get-selection'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function getSelection(payload: Callbacks = {}) {
  return `agenda://x-callback-url/get-selection${qs(callbackParams(payload))}`
}
