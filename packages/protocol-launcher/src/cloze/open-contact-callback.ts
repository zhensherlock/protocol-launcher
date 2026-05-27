import { type ClozeCallbackPayload, clozeContactUrl } from './shared'

/**
 * Open contact x-callback-url payload definition.
 */
export type OpenContactCallback = ClozeCallbackPayload

/**
 * Open a Cloze contact profile using Cloze's x-callback-url contact form.
 *
 * @param payload Open contact x-callback-url payload.
 * @returns Cloze contact x-callback-url.
 * @example
 * openContactCallback({ identifier: 'someone@company.com' })
 * // => 'cloze://x-callback-url/contact/someone@company.com'
 * @example
 * openContactCallback({ identifier: 'someone@company.com', xSuccess: 'myapp://back' })
 * // => 'cloze://x-callback-url/contact/someone@company.com?x-success=myapp%3A%2F%2Fback'
 * @link https://help.cloze.com/article/2197-cloze-url-scheme-x-callback-urls
 */
export function openContactCallback(payload: OpenContactCallback) {
  return clozeContactUrl('x-callback-url/contact', payload)
}
