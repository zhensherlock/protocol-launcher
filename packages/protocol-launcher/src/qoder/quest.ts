/**
 * Qoder quest definition.
 */
type CreateQuest = {
  /**
   * Quest text.
   */
  text: string

  /**
   * Execution mode: LocalAgent, LocalWorktree, or RemoteAgent.
   *
   * Defaults to `LocalAgent`.
   */
  agentClass?: 'LocalAgent' | 'LocalWorktree' | 'RemoteAgent'
}

/**
 * Create Qoder quest
 *
 * @param payload Qoder quest definition.
 * @returns Qoder quest URL.
 * @example
 * createQuest({
 *   text: 'You are a development expert.',
 *   agentClass: 'LocalAgent',
 * })
 * // => 'qoder://aicoding.aicoding-deeplink/quest?text=You%20are%20a%20development%20expert.&agentClass=LocalAgent'
 */
export function createQuest(payload: CreateQuest) {
  const { text, agentClass = 'LocalAgent' } = payload
  return `qoder://aicoding.aicoding-deeplink/quest?text=${encodeURIComponent(text)}&agentClass=${agentClass}`
}
