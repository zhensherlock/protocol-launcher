import { qs } from '@protocol-launcher/shared'

type CreateRule = {
  /** Name used for the rule file. */
  name: string
  /** Content of the rule. */
  text: string
}

/**
 * Import a custom rule into Cursor for the user to review.
 *
 * @param payload Rule name and content.
 * @returns Cursor rule URL.
 * @example
 * createRule({ name: 'review', text: 'Review the changes' })
 * // => 'cursor://anysphere.cursor-deeplink/rule?name=review&text=Review%20the%20changes'
 * @link https://cursor.com/docs/reference/deeplinks
 */
export function createRule(payload: CreateRule) {
  const { name, text } = payload
  return `cursor://anysphere.cursor-deeplink/rule${qs({ name, text })}`
}
