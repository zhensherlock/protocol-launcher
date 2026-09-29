import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

/**
 * CommandPalette action payload definition.
 */
type CommandPalette = Callbacks & {
  /**
   * Initial text to use in the search.
   */
  query?: string
}

/**
 * Open drafts directly to command palette, if available.
 *
 * @param payload CommandPalette action payload.
 * @returns Drafts commandPalette URL.
 * @example
 * commandPalette({ query: 'QUERY-TEXT' })
 * // => 'drafts:///commandPalette?query=QUERY-TEXT'
 * @example
 * commandPalette()
 * // => 'drafts:///commandPalette'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function commandPalette(payload: CommandPalette = {}) {
  const { query } = payload

  const params = qs({
    ...(query ? { query } : {}),
    ...callbackParams(payload),
  })

  return `drafts:///commandPalette${params}`
}
