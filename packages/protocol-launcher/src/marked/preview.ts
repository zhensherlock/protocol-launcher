import { type MarkedCallback, markedUrl } from './shared'

/**
 * Preview payload definition.
 */
export type Preview = MarkedCallback & {
  /**
   * Text to insert into a temporary preview document.
   */
  text: string
}

/**
 * Preview text in a new Marked document.
 *
 * @param payload Preview payload.
 * @returns Marked preview URL.
 * @example
 * preview({ text: 'Some text to preview\n' })
 * // => 'x-marked://preview?text=Some%20text%20to%20preview%0A'
 * @link https://marked2app.com/help/URL_Handler.html#preview
 */
export function preview(payload: Preview) {
  return markedUrl('preview', { text: payload.text }, payload)
}
