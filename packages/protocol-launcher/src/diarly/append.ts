import type { DiarlyIdentifier } from './shared'
import { diarlyIdentifierParams, diarlyXCallbackUrl } from './shared'

/**
 * Append endpoint payload definition.
 */
type Append = DiarlyIdentifier & {
  /**
   * Text to append/add to the note specified by the identifier.
   */
  text: string
}

/**
 * Append text to a Diarly note or daily entry using the documented identifier parameters.
 *
 * @param payload Append endpoint payload.
 * @returns Diarly append x-callback-url.
 * @example
 * append({ day: '16-12-2020', text: 'Hello World' })
 * // => 'diarly://x-callback-url/append?day=16-12-2020&text=Hello%20World'
 * @example
 * append({ id: 'REPLACE_WITH_NOTE_ID', text: 'Hello World' })
 * // => 'diarly://x-callback-url/append?id=REPLACE_WITH_NOTE_ID&text=Hello%20World'
 * @link https://diarly.app/help/x-callback-url-scheme-documentation.html
 */
export function append(payload: Append) {
  const { text } = payload

  return diarlyXCallbackUrl('append', {
    ...diarlyIdentifierParams(payload),
    text,
  })
}
