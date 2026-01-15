/**
 * Cursor chat definition.
 */
type CreateChat = {
  /**
   * Chat prompt.
   */
  prompt: string

  /**
   * Whether to open the chat in a new window.
   *
   * Defaults to `false`.
   */
  openInNewWindow?: boolean
}

/**
 * Create Cursor chat
 *
 * @param payload Cursor chat definition.
 * @returns Cursor chat URL.
 * @example
 * createChat({
 *   prompt: 'Hello, Cursor!',
 * })
 * // => 'cursor://anysphere.cursor-deeplink/prompt?text=xxx'
 */
export function createChat(payload: CreateChat) {
  const { prompt, openInNewWindow = false } = payload
  return `cursor://anysphere.cursor-deeplink/prompt?text=${encodeURIComponent(prompt)}${openInNewWindow ? '&windowId=_blank' : ''}`
}
