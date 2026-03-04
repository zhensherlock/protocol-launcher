/**
 * Open Codex thread.
 */
type OpenThread = {
  /**
   * Thread ID.
   *
   * If not provided, open a new thread.
   */
  threadId?: string
}

/**
 * Open Codex thread.
 *
 * @returns Codex thread open URL.
 * @example
 * openThread({
 *   threadId: '4f5a46cf-5eeb-4130-beda-25b438cd8c60',
 * })
 * // => 'codex://thread/4f5a46cf-5eeb-4130-beda-25b438cd8c60'
 */
export function openThread(payload: OpenThread = { threadId: 'new' }) {
  const { threadId = 'new' } = payload
  return `codex://thread/${threadId}`
}
