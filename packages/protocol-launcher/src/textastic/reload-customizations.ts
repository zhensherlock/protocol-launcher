import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'
/**
 * Reload customizations (custom syntax definitions, themes, and code completions)
 * from the "Local Files/#Textastic" folder.
 *
 * @param payload Optional callback parameters.
 * @returns Textastic reload customizations URL.
 * @example
 * reloadCustomizations()
 * // => 'textastic://x-callback-url/reloadCustomizations'
 * @link https://www.textasticapp.com/v10/manual/integration_other_apps/x-callback-url.html#reloadcustomizations
 */
export function reloadCustomizations(payload: Callbacks = {}) {
  return `textastic://x-callback-url/reloadCustomizations${qs(callbackParams(payload))}`
}
