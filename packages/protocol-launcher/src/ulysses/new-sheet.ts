import { qs } from '@protocol-launcher/shared'

/**
 * New sheet payload definition.
 */
type NewSheet = {
  /**
   * The contents that should be inserted to the new sheet.
   * Contents are imported as Markdown by default.
   *
   * @example 'My new sheet content'
   */
  text?: string
  /**
   * Specifies the group the new sheet should be inserted to.
   * This can be:
   * - A group name (e.g. 'My Group') that will match the first group having the same name
   * - A path to a particular target group (e.g. '/My Group/My Subgroup'). Any path must begin with a slash
   * - A unique identifier of the target group
   * If no value is given, the sheet is created inside the Inbox.
   *
   * @example 'My Group'
   * @example '/My Group/My Subgroup'
   */
  group?: string
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
   * The position of the new sheet in its parent group.
   * Use 0 to make it the first sheet.
   *
   * @example 0
   * @example 2
   */
  index?: number
}

/**
 * Creates a new sheet in Ulysses.
 *
 * Available on iOS since Ulysses 2.6 (API version 1), on Mac since Ulysses 2.8 (API version 2).
 *
 * @param payload New sheet definition.
 * @returns Ulysses new-sheet URL.
 * @example
 * newSheet()
 * // => 'ulysses://x-callback-url/new-sheet'
 * @example
 * newSheet({ text: 'My new sheet' })
 * // => 'ulysses://x-callback-url/new-sheet?text=My%20new%20sheet'
 * @example
 * newSheet({ text: 'My new sheet', index: 2 })
 * // => 'ulysses://x-callback-url/new-sheet?text=My%20new%20sheet&index=2'
 * @example
 * newSheet({ text: 'Content', group: '/My Group', format: 'text' })
 * // => 'ulysses://x-callback-url/new-sheet?text=Content&group=%2FMy%20Group&format=text'
 * @link https://refined-github-html-preview.kidonng.workers.dev/softwarehistorysociety/UlyssesX-Callback-URL/raw/main/x-callback.html#new-sheet
 */
export function newSheet(payload: NewSheet = {}) {
  const { text, group, format, index } = payload
  const params = qs({
    ...(text ? { text } : {}),
    ...(group ? { group } : {}),
    ...(format ? { format } : {}),
    ...(index !== undefined ? { index: String(index) } : {}),
  })

  return `ulysses://x-callback-url/new-sheet${params}`
}
