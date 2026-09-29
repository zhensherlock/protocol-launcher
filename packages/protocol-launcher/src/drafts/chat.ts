import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

type Chat = Callbacks & {
  /** Model to select in the Chat Console. */
  mode?: 'onDevice' | 'pcc' | 'claudeSonnet' | 'claudeOpus'
  /** Initial prompt to prefill in the console. */
  prompt?: string
}

/**
 * Open a new Drafts Chat Console session.
 *
 * @param payload Chat Console options.
 * @returns Drafts chat URL.
 * @example
 * chat({ mode: 'pcc', prompt: 'Summarize this note' })
 * // => 'drafts:///chat?mode=pcc&prompt=Summarize%20this%20note'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes#chat
 */
export function chat(payload: Chat = {}) {
  const { mode, prompt } = payload
  return `drafts:///chat${qs({ mode, prompt, ...callbackParams(payload) })}`
}
