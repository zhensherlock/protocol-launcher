import { type ClozeWebContactPayload, clozeWebContactUrl } from './shared'

/**
 * Open web contact payload definition.
 */
export type OpenWebContact = ClozeWebContactPayload

/**
 * Open a Cloze contact profile using Cloze's documented web URL form.
 *
 * @param payload Open web contact payload.
 * @returns Cloze web contact URL.
 * @example
 * openWebContact({ identifier: 'someone@company.com' })
 * // => 'https://www.cloze.com/in/#contact=someone@company.com'
 * @example
 * openWebContact({ identifier: 'someone@company.com', syntax: 'path' })
 * // => 'https://www.cloze.com/in/contact/someone@company.com'
 * @example
 * openWebContact({ identifier: 'someone@company.com', full: true, back: 'http://www.evernote.com' })
 * // => 'https://www.cloze.com/in/#contact=someone@company.com,full,back=http%3A%2F%2Fwww.evernote.com'
 * @link https://help.cloze.com/article/2197-cloze-url-scheme-x-callback-urls
 */
export function openWebContact(payload: OpenWebContact) {
  return clozeWebContactUrl(payload)
}
