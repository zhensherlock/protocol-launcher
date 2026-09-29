import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

/**
 * Get current draft action payload definition.
 */
type GetCurrentDraft = Callbacks & {
  /**
   * The x-success callback URL to receive the current draft information.
   */
  xSuccess?: string
}

/**
 * Return the information about the current draft loaded in the editor.
 *
 * @param payload Get current draft action payload.
 * @returns Drafts getCurrentDraft URL.
 * @example
 * getCurrentDraft({ xSuccess: 'myapp://callback' })
 * // => 'drafts:///getCurrentDraft?x-success=myapp%3A%2F%2Fcallback'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function getCurrentDraft(payload: GetCurrentDraft = {}) {
  const params = qs({
    ...callbackParams(payload),
  })

  return `drafts:///getCurrentDraft${params}`
}
