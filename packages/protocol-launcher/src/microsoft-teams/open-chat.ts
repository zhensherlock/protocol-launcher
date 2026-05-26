import { teamsUrl } from './shared'

/**
 * Microsoft Teams chat payload definition.
 */
type OpenChat = {
  /**
   * Teams chat ID. Supported format starts with `19:`.
   */
  chatId: string
}

/**
 * Navigate to a Microsoft Teams chat conversation.
 *
 * @param payload - Teams chat payload.
 * @returns Microsoft Teams chat deep link.
 * @example
 * openChat({ chatId: '19:c6d70e392a384916c3262b15406d763e@thread.v2' })
 * // => 'https://teams.microsoft.com/l/chat/19:c6d70e392a384916c3262b15406d763e@thread.v2/conversations'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-teams#deep-link-to-navigate-to-a-chat
 */
export function openChat(payload: OpenChat) {
  const { chatId } = payload

  return teamsUrl(`chat/${chatId}/conversations`)
}
