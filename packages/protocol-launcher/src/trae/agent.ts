/**
 * Open custom agent definition.
 */
type OpenAgent = {
  /**
   * The unique identifier of the agent.
   *
   * @example '878f64'
   */
  agentId: string
}

/**
 * Open custom agent in Trae.
 *
 * @param payload Open agent definition.
 * @returns Trae agent share URL.
 * @example
 * openAgent({
 *   agentId: '878f64',
 * })
 * // => 'trae://trae.ai-ide/agent/share/878f64'
 * @link https://docs.trae.ai/ide/custom-agents-ready-for-one-click-import
 */
export function openAgent(payload: OpenAgent) {
  const { agentId } = payload
  return `trae://trae.ai-ide/agent/share/${agentId}`
}
