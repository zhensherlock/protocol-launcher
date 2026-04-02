import { qs } from '@protocol-launcher/shared'

/**
 * Insert text payload definition.
 */
type Insert = {
  /**
   * The identifier of the sheet the text should be inserted to.
   *
   * @example 'H8zLAmc1I0njH-0Ql-3YGQ'
   */
  id: string
  /**
   * The contents that should be inserted to the sheet.
   * Contents are imported as Markdown by default.
   *
   * @example 'Inserted text'
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
  /**
   * Set to insert text at the beginning of a document.
   * If not given, the text is appended.
   *
   * @example 'begin'
   * @example 'end'
   */
  position?: 'begin' | 'end'
  /**
   * Specifies how newlines should be inserted to the text.
   * - 'prepend': prepend the inserted text by a newline
   * - 'append': append the inserted text with a newline
   * - 'enclose': enclose the entire text with newlines
   *
   * @example 'prepend'
   * @example 'append'
   * @example 'enclose'
   */
  newline?: 'prepend' | 'append' | 'enclose'
}

/**
 * Inserts or appends text to a sheet in Ulysses.
 *
 * Available on iOS since Ulysses 2.6 (API version 1), on Mac since Ulysses 2.8 (API version 2).
 *
 * @param payload Insert text definition.
 * @returns Ulysses insert URL.
 * @example
 * insert({ id: 'H8zLAmc1I0njH-0Ql-3YGQ', text: 'Inserted text' })
 * // => 'ulysses://x-callback-url/insert?id=H8zLAmc1I0njH-0Ql-3YGQ&text=Inserted%20text'
 * @example
 * insert({ id: 'H8zLAmc1I0njH-0Ql-3YGQ', text: 'Text', position: 'begin' })
 * // => 'ulysses://x-callback-url/insert?id=H8zLAmc1I0njH-0Ql-3YGQ&text=Text&position=begin'
 * @example
 * insert({ id: 'H8zLAmc1I0njH-0Ql-3YGQ', text: 'Text', format: 'html', newline: 'prepend' })
 * // => 'ulysses://x-callback-url/insert?id=H8zLAmc1I0njH-0Ql-3YGQ&text=Text&format=html&newline=prepend'
 * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html#insert
 */
export function insert(payload: Insert) {
  const { id, text, format, position, newline } = payload
  const params = qs({
    id,
    text,
    ...(format ? { format } : {}),
    ...(position ? { position } : {}),
    ...(newline ? { newline } : {}),
  })

  return `ulysses://x-callback-url/insert${params}`
}
