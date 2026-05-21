import type { XCallbackPaste } from './shared'
import { anyboxUrl, pasteParams, xCallbackParams } from './shared'

/**
 * Save clipboard content to Anybox through x-callback-url.
 *
 * @param payload x-callback-url paste payload.
 * @returns Anybox x-callback-url paste URL.
 * @example
 * xCallbackPaste({ xSuccess: 'successURL', xError: 'errorURL' })
 * // => 'anybox://x-callback-url/paste?x-success=successURL&x-error=errorURL'
 * @link https://anybox.app/url-schemes
 */
export function xCallbackPaste(payload: XCallbackPaste) {
  return anyboxUrl('x-callback-url/paste', {
    ...pasteParams(payload),
    ...xCallbackParams(payload),
  })
}
