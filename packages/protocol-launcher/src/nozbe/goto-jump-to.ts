import { gotoUrl } from './shared'

/**
 * Jump To window payload definition.
 */
type GotoJumpTo = {
  /**
   * Nozbe space/team ID.
   */
  teamId: string
}

/**
 * Open the Jump To window in a Nozbe space.
 *
 * @param payload Jump To window payload.
 * @returns Nozbe Jump To URL.
 * @example
 * gotoJumpTo({ teamId: 'zR17yVDEDrpBbi8x' })
 * // => 'nozbe4://goto/teams/zR17yVDEDrpBbi8x/jump_to'
 * @link https://nozbe.help/advancedfeatures/x-callback-url/
 */
export function gotoJumpTo(payload: GotoJumpTo) {
  const { teamId } = payload

  return gotoUrl(`teams/${teamId}/jump_to`)
}
