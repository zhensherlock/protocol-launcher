import { qs } from '@protocol-launcher/shared'
import type { Callbacks } from './callbacks'
import { callbackParams } from './callbacks'

/**
 * LoadActionBarGroup action payload definition.
 */
type LoadActionBarGroup = Callbacks & {
  /**
   * Name of a valid action group to load.
   */
  name: string
}

/**
 * Load an action group in the action bar row.
 *
 * @param payload LoadActionBarGroup action payload.
 * @returns Drafts loadActionBarGroup URL.
 * @example
 * loadActionBarGroup({ name: 'GROUP-NAME' })
 * // => 'drafts:///loadActionBarGroup?name=GROUP-NAME'
 * @link https://docs.getdrafts.com/docs/automation/urlschemes
 */
export function loadActionBarGroup(payload: LoadActionBarGroup) {
  const { name } = payload

  const params = qs({
    name,
    ...callbackParams(payload),
  })

  return `drafts:///loadActionBarGroup${params}`
}
