import type { XCallbackSave } from './shared'
import { anyboxUrl, saveParams, xCallbackParams } from './shared'

/**
 * Save text content to Anybox through x-callback-url.
 *
 * @param payload x-callback-url save payload.
 * @returns Anybox x-callback-url save URL.
 * @example
 * xCallbackSave({ text: 'helloWorld', xSuccess: 'successURL', xError: 'errorURL' })
 * // => 'anybox://x-callback-url/save?text=helloWorld&x-success=successURL&x-error=errorURL'
 * @link https://anybox.app/url-schemes
 */
export function xCallbackSave(payload: XCallbackSave) {
  return anyboxUrl('x-callback-url/save', {
    ...saveParams(payload),
    ...xCallbackParams(payload),
  })
}
