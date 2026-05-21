import { gotoUrl } from './shared'

/**
 * Single Tasks view payload definition.
 */
type GotoSingleTasks = {
  /**
   * Nozbe space/team ID.
   */
  teamId: string
}

/**
 * Open the Single Tasks view in a Nozbe space.
 *
 * @param payload Single Tasks view payload.
 * @returns Nozbe Single Tasks URL.
 * @example
 * gotoSingleTasks({ teamId: 'zR17yVDEDrpBbi8x' })
 * // => 'nozbe4://goto/teams/zR17yVDEDrpBbi8x/single_tasks'
 * @link https://nozbe.help/advancedfeatures/x-callback-url/
 */
export function gotoSingleTasks(payload: GotoSingleTasks) {
  const { teamId } = payload

  return gotoUrl(`teams/${teamId}/single_tasks`)
}
