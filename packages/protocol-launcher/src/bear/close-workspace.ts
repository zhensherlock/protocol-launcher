import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'
/**
 * Close the workspace currently open in Bear.
 *
 * @param payload Optional callback parameters.
 * @returns Bear close-workspace URL.
 * @example
 * closeWorkspace()
 * // => 'bear://x-callback-url/close-workspace'
 * @link https://bear.app/faq/x-callback-url-scheme-documentation/#close-workspace
 */
export function closeWorkspace(payload: Callbacks = {}) {
  return `bear://x-callback-url/close-workspace${qs(callbackParams(payload))}`
}
