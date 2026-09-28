import { qs } from '@protocol-launcher/shared'

type CreateCommand = {
  /** Name used for the command file. */
  name: string
  /** Content of the command. */
  text: string
}

/**
 * Import a custom command into Cursor for the user to review.
 *
 * @param payload Command name and content.
 * @returns Cursor command URL.
 * @example
 * createCommand({ name: 'review', text: 'Review the changes' })
 * // => 'cursor://anysphere.cursor-deeplink/command?name=review&text=Review%20the%20changes'
 * @link https://cursor.com/docs/reference/deeplinks
 */
export function createCommand(payload: CreateCommand) {
  const { name, text } = payload
  return `cursor://anysphere.cursor-deeplink/command${qs({ name, text })}`
}
