import { qs } from '@protocol-launcher/shared'

/**
 * Qoder chat definition.
 */
type CreateChat = {
  /**
   * Chat text.
   */
  text: string

  /**
   * Chat mode. Qoder treats ask as chat; experts requires Experts to be enabled.
   *
   * Defaults to `agent`.
   */
  mode?: 'agent' | 'ask' | 'chat' | 'experts'

  /** Whether to create a new chat. Defaults to true in Qoder. */
  isNewChat?: boolean

  /**
   * Whether to open the chat in a new window.
   *
   * Defaults to `false`.
   */
  openInNewWindow?: boolean
}

/**
 * Create Qoder chat
 *
 * @param payload Qoder chat definition.
 * @returns Qoder chat URL.
 * @example
 * createChat({
 *   text: 'Hello, Qoder!',
 *   mode: 'agent',
 * })
 * // => 'qoder://aicoding.aicoding-deeplink/chat?text=Hello%2C%20Qoder!&mode=agent'
 * @link https://docs.qoder.com/user-guide/deeplink
 */
export function createChat(payload: CreateChat) {
  const { text, mode = 'agent', isNewChat, openInNewWindow = false } = payload
  return `qoder://aicoding.aicoding-deeplink/chat${qs({
    text,
    mode,
    isNewChat,
    windowId: openInNewWindow ? '_blank' : undefined,
  })}`
}
