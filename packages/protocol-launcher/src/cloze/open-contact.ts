import { type ClozeContactPayload, clozeContactUrl } from './shared'

/**
 * Open contact payload definition.
 */
export type OpenContact = ClozeContactPayload

/**
 * Open a Cloze contact profile using the simplified iOS URL form.
 *
 * @param payload Open contact payload.
 * @returns Cloze contact URL.
 * @example
 * openContact({ identifier: 'someone@company.com' })
 * // => 'cloze://contact/someone@company.com'
 * @link https://help.cloze.com/article/2197-cloze-url-scheme-x-callback-urls
 */
export function openContact(payload: OpenContact) {
  return clozeContactUrl('contact', payload)
}
