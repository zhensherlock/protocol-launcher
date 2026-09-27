import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'
/**
 * Open the selected note in Agenda.
 *
 * @param payload Optional callback parameters.
 * @returns Agenda get selected note URL.
 * @example
 * getSelectedNote()
 * // => 'agenda://x-callback-url/get-selected-note'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function getSelectedNote(payload: Callbacks = {}) {
  return `agenda://x-callback-url/get-selected-note${qs(callbackParams(payload))}`
}
