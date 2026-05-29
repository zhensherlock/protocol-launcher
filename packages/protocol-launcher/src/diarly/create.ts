import { diarlyXCallbackUrl } from './shared'

/**
 * Create endpoint payload definition.
 */
type Create = {
  /**
   * Text of the new note.
   */
  text: string

  /**
   * Name or identifier of a journal to create a new note in.
   */
  journal?: string
}

/**
 * Create a new note in Diarly.
 *
 * @param payload Create endpoint payload.
 * @returns Diarly create x-callback-url.
 * @example
 * create({ text: 'Hello World' })
 * // => 'diarly://x-callback-url/create?text=Hello%20World'
 * @example
 * create({ journal: 'Personal', text: 'Hello World' })
 * // => 'diarly://x-callback-url/create?journal=Personal&text=Hello%20World'
 * @link https://diarly.app/help/x-callback-url-scheme-documentation.html
 */
export function create(payload: Create) {
  const { journal, text } = payload

  return diarlyXCallbackUrl('create', {
    journal,
    text,
  })
}
