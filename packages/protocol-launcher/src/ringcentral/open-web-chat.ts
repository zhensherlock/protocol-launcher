import { ringCentralAppUrl, ringCentralPath } from './shared'

export type OpenWebChat = {
  /**
   * RingCentral chat ID.
   *
   * @example 'chat-123'
   */
  chatId: string
}

/**
 * Open a chat with a user or team in the RingCentral web app.
 *
 * @param payload RingCentral web chat payload.
 * @returns RingCentral web chat deep link.
 * @example
 * openWebChat({ chatId: 'chat-123' })
 * // => 'https://app.ringcentral.com/chat/chat-123'
 * @link https://developers.ringcentral.com/guide/basics/uri-schemes
 */
export function openWebChat(payload: OpenWebChat) {
  return ringCentralAppUrl(ringCentralPath('chat', payload.chatId))
}
