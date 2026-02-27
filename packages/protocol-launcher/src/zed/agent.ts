/**
 * Open agent in Zed.
 */
type OpenAgent = {
  /**
   * Initial prompt for the agent.
   *
   * @example 'Hello World'
   */
  prompt?: string
}

/**
 * Join shared agent definition.
 */
type JoinAgent = {
  /**
   * Thread identifier.
   *
   * @example '12345'
   */
  id: string
}

/**
 * Open agent in Zed.
 *
 * @param payload Open agent definition.
 * @returns Zed open agent URL.
 * @example
 * openAgent()
 * // => 'zed://agent'
 *
 * openAgent({ prompt: 'Hello World' })
 * // => 'zed://agent?prompt=Hello%20World'
 * @link https://github.com/zed-industries/zed/blob/main/crates/zed/src/zed/open_listener.rs#L113
 */
export function openAgent(payload: OpenAgent = {}) {
  const { prompt } = payload

  return `zed://agent${prompt ? `?prompt=${encodeURIComponent(prompt)}` : ''}`
}

/**
 * Join a shared agent in Zed.
 *
 * @param payload Join agent definition.
 * @returns Zed join agent URL.
 * @example
 * joinAgent({
 *   id: '12345',
 * })
 * // => 'zed://agent/shared/12345'
 * @link https://github.com/zed-industries/zed/blob/main/crates/zed/src/zed/open_listener.rs#L115
 */
export function joinAgent(payload: JoinAgent) {
  const { id } = payload
  return `zed://agent/shared/${id}`
}
