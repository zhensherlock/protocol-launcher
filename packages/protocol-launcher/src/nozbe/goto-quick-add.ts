import { gotoUrl } from './shared'

/**
 * Quick Add window payload definition.
 */
type GotoQuickAdd = {
  /**
   * Nozbe space/team ID.
   */
  teamId: string
}

/**
 * Open the Quick Add window in a Nozbe space.
 *
 * @param payload Quick Add window payload.
 * @returns Nozbe Quick Add URL.
 * @example
 * gotoQuickAdd({ teamId: 'zR17yVDEDrpBbi8x' })
 * // => 'nozbe4://goto/teams/zR17yVDEDrpBbi8x/quick_add'
 * @link https://nozbe.help/advancedfeatures/x-callback-url/
 */
export function gotoQuickAdd(payload: GotoQuickAdd) {
  const { teamId } = payload

  return gotoUrl(`teams/${teamId}/quick_add`)
}
