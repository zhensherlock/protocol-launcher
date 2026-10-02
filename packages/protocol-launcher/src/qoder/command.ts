import { qs } from '@protocol-launcher/shared'

type CreateCommand = {
  /** Filename containing only lowercase letters, numbers, hyphens, and underscores. */
  name: string
  /** Content of the command. */
  text: string
  /** Optional command description. */
  description?: string
  /** Installation scope. Qoder defaults to user. */
  scope?: 'user' | 'project'
}

/**
 * Import a custom command into Qoder for the user to review.
 *
 * @param payload Command name and content.
 * @returns Qoder command URL.
 * @example
 * createCommand({ name: 'review', text: 'Review the changes' })
 * // => 'qoder://aicoding.aicoding-deeplink/command?name=review&text=Review%20the%20changes'
 * @link https://docs.qoder.com/user-guide/deeplink
 */
export function createCommand(payload: CreateCommand) {
  const { name, text, description, scope } = payload
  if (!/^[a-z0-9_-]+$/.test(name)) {
    throw new Error('Command name can only contain lowercase letters, numbers, hyphens, and underscores.')
  }
  return `qoder://aicoding.aicoding-deeplink/command${qs({ name, text, description, scope })}`
}
