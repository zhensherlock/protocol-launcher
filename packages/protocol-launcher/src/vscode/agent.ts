import { qs } from '@protocol-launcher/shared'

type CreateAgentSession = {
  /** Initial prompt to prefill without submitting it. */
  prompt?: string
  /** Folder URI for the session, such as file:///Users/dev/project. */
  workspace?: string
}

/**
 * Prepare a new agent session draft in VS Code.
 *
 * @param payload Prompt and workspace for the draft.
 * @returns New agent session URL.
 * @example
 * createAgentSession({ prompt: 'Explain this project' })
 * // => 'vscode://agents/new?prompt=Explain%20this%20project'
 * @link https://code.visualstudio.com/docs/configure/command-line#_prepare-a-new-agent-session-draft
 */
export function createAgentSession(payload: CreateAgentSession = {}) {
  const { prompt, workspace } = payload
  return `vscode://agents/new${qs({ prompt, workspace })}`
}
