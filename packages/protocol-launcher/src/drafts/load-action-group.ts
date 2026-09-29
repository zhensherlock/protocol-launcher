import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

/**
 * LoadActionGroup action payload definition.
 */
type LoadActionGroup = Callbacks & {
  /**
   * Name of a valid action group to load.
   */
  name: string
}

/**
 * Load an action group in the action list side panel.
 *
 * @param payload LoadActionGroup action payload.
 * @returns Drafts loadActionGroup URL.
 * @example
 * loadActionGroup({ name: 'GROUP-NAME' })
 * // => 'drafts:///loadActionGroup?name=GROUP-NAME'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function loadActionGroup(payload: LoadActionGroup) {
  const { name } = payload

  const params = qs({
    name,
    ...callbackParams(payload),
  })

  return `drafts:///loadActionGroup${params}`
}
