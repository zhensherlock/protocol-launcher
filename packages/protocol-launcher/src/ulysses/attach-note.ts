import { qs } from '@protocol-launcher/shared'

/**
 * Attach note payload definition.
 */
type AttachNote = {
  /**
   * The identifier of the sheet the note should be attached to.
   *
   * @example 'H8zLAmc1I0njH-0Ql-3YGQ'
   */
  id: string
  /**
   * The contents that should be attached as note to the sheet.
   * Contents are imported as Markdown by default.
   *
   * @example 'My new note'
   */
  text: string
  /**
   * Specifies the format of the imported text.
   *
   * @default 'markdown'
   * @example 'markdown'
   * @example 'text'
   * @example 'html'
   */
  format?: 'markdown' | 'text' | 'html'
}

/**
 * Creates a new note attachment on a sheet in Ulysses.
 *
 * Available on iOS since Ulysses 2.6 (API version 1), on Mac since Ulysses 2.8 (API version 2).
 *
 * @param payload Attach note definition.
 * @returns Ulysses attach-note URL.
 * @example
 * attachNote({ id: 'H8zLAmc1I0njH-0Ql-3YGQ', text: 'My new note' })
 * // => 'ulysses://x-callback-url/attach-note?id=H8zLAmc1I0njH-0Ql-3YGQ&text=My%20new%20note'
 * @example
 * attachNote({ id: 'H8zLAmc1I0njH-0Ql-3YGQ', text: 'Note', format: 'text' })
 * // => 'ulysses://x-callback-url/attach-note?id=H8zLAmc1I0njH-0Ql-3YGQ&text=Note&format=text'
 * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html#attach-note
 */
export function attachNote(payload: AttachNote) {
  const { id, text, format } = payload
  const params = qs({
    id,
    text,
    ...(format ? { format } : {}),
  })

  return `ulysses://x-callback-url/attach-note${params}`
}
