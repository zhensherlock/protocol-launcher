import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'
/**
 * Open the selected project in Agenda.
 *
 * @param payload Optional callback parameters.
 * @returns Agenda get selected project URL.
 * @example
 * getSelectedProject()
 * // => 'agenda://x-callback-url/get-selected-project'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function getSelectedProject(payload: Callbacks = {}) {
  return `agenda://x-callback-url/get-selected-project${qs(callbackParams(payload))}`
}
