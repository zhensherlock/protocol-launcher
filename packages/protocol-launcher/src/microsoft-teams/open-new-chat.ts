import { teamsUrl, teamsUserListParam } from './shared'

/**
 * Microsoft Teams new chat payload definition.
 */
type OpenNewChat = {
  /**
   * Microsoft Entra tenant ID.
   */
  tenantId?: string

  /**
   * Microsoft Entra UserPrincipalName values, such as email addresses.
   * Bot chats may use a bot ID prefixed with `28:`.
   */
  users: string[]

  /**
   * Chat display name for chats with three or more users.
   */
  topicName?: string

  /**
   * Draft message text to insert into the compose box.
   */
  message?: string
}

/**
 * Open or create a Microsoft Teams chat.
 *
 * @param payload - Teams new chat payload.
 * @returns Microsoft Teams new chat deep link.
 * @example
 * openNewChat({
 *   users: ['joe@contoso.com', 'bob@contoso.com'],
 *   topicName: 'Prep For Meeting Tomorrow',
 *   message: 'Hi folks, kicking off a chat about our meeting tomorrow',
 * })
 * // => 'https://teams.microsoft.com/l/chat/0/0?users=joe@contoso.com,bob@contoso.com&topicName=Prep%20For%20Meeting%20Tomorrow&message=Hi%20folks%2C%20kicking%20off%20a%20chat%20about%20our%20meeting%20tomorrow'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-teams#configure-deep-link-to-start-a-chat-manually
 */
export function openNewChat(payload: OpenNewChat) {
  const { tenantId, users, topicName, message } = payload

  return teamsUrl('chat/0/0', {
    tenantId,
    users: teamsUserListParam(users),
    topicName,
    message,
  })
}
