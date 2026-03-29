import { qs } from '@protocol-launcher/shared'

/**
 * ReplaceRange action payload definition.
 */
type ReplaceRange = {
  /**
   * The UUID identifier for a draft.
   */
  uuid: string
  /**
   * Text to insert in the specified range.
   */
  text: string
  /**
   * Start position of the range to replace.
   */
  start: number
  /**
   * Number of characters in the range to replace.
   */
  length: number
}

/**
 * Replace content in an existing draft, based on a range.
 *
 * @param payload ReplaceRange action payload.
 * @returns Drafts replaceRange URL.
 * @example
 * replaceRange({ uuid: 'UUID-TO-VALID-DRAFT', text: 'TEXT-TO-INSERT', start: 0, length: 10 })
 * // => 'drafts:///replaceRange?uuid=UUID-TO-VALID-DRAFT&text=TEXT-TO-INSERT&start=0&length=10'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function replaceRange(payload: ReplaceRange) {
  const { uuid, text, start, length } = payload

  const params = qs({
    uuid,
    text,
    start,
    length,
  })

  return `drafts:///replaceRange${params}`
}
