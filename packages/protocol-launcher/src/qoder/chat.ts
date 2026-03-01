/**
 * Qoder chat definition.
 */
type CreateChat = {
  /**
   * Chat text.
   */
  text: string

  /**
   * Chat mode: agent or ask.
   *
   * Defaults to `agent`.
   */
  mode?: 'agent' | 'ask'

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
 * // => 'qoder://aicoding.aicoding-deeplink/chat?text=Hello%2C%20Qoder&mode=agent'
 */
export function createChat(payload: CreateChat) {
  const { text, mode = 'agent', openInNewWindow = false } = payload
  return `qoder://aicoding.aicoding-deeplink/chat?text=${encodeURIComponent(text)}&mode=${mode}${openInNewWindow ? '&windowId=_blank' : ''}`
}
