import type { ForScoreActionPayload } from './shared'
import { forScoreUrl } from './shared'

/**
 * Trigger a relative navigation action in forScore.
 *
 * @param payload forScore action command payload.
 * @returns forScore action URL.
 * @example
 * action({ type: 'nextitem' })
 * // => 'forscore://action?type=nextitem'
 * @link https://forscore.co/developers-automation/
 */
export function action(payload: ForScoreActionPayload) {
  const { type } = payload

  return forScoreUrl('action', { type })
}
