import { chatContextParam, teamsUrl } from './shared'

/**
 * Microsoft Teams chat message payload definition.
 */
type OpenChatMessage = {
  /**
   * Chat ID of the conversation. Supported format starts with `19:`.
   */
  chatId: string

  /**
   * Unique message ID.
   */
  messageId: string
}

/**
 * Navigate to a Microsoft Teams message in a personal or group chat.
 *
 * @param payload - Teams chat message payload.
 * @returns Microsoft Teams chat message deep link.
 * @example
 * openChatMessage({
 *   chatId: '19:253f5895-9a62-4362-8d38-43f0205c702c_f1b94dcf-0aa3-4989-bcdf-ef4a5ed00f86@unq.gbl.spaces',
 *   messageId: '1563480968434',
 * })
 * // => 'https://teams.microsoft.com/l/message/19:253f5895-9a62-4362-8d38-43f0205c702c_f1b94dcf-0aa3-4989-bcdf-ef4a5ed00f86@unq.gbl.spaces/1563480968434?context=%7B%22contextType%22:%22chat%22%7D'
 * @link https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-link-teams#deep-link-to-navigate-to-chat-messages
 */
export function openChatMessage(payload: OpenChatMessage) {
  const { chatId, messageId } = payload

  return teamsUrl(`message/${chatId}/${messageId}`, {
    context: chatContextParam(),
  })
}
