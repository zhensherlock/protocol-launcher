import { gotoUrl } from './shared'

/**
 * Goto command payload definition.
 */
type Goto = {
  /**
   * Nozbe path after `https://nozbe.app/`.
   */
  path: string
}

/**
 * Open a Nozbe view from a copied Nozbe path.
 *
 * @param payload Goto command payload.
 * @returns Nozbe goto URL.
 * @example
 * goto({ path: 'teams/zR17yVDEDrpBbi8x/single_tasks' })
 * // => 'nozbe4://goto/teams/zR17yVDEDrpBbi8x/single_tasks'
 * @link https://nozbe.help/advancedfeatures/x-callback-url/
 */
export function goto(payload: Goto) {
  const { path } = payload

  return gotoUrl(path)
}
