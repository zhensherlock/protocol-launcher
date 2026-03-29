import { qs } from '@protocol-launcher/shared'

/**
 * Get current draft action payload definition.
 */
type GetCurrentDraft = {
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
 * // => 'drafts:///getCurrentDraft?x-success=myapp://callback'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function getCurrentDraft(payload: GetCurrentDraft = {}) {
  const { xSuccess } = payload

  const params = qs({
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
  })

  return `drafts:///getCurrentDraft${params}`
}
