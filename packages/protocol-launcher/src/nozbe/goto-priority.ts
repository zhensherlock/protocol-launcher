import { gotoUrl } from './shared'

/**
 * Priority view payload definition.
 */
type GotoPriority = {
  /**
   * Nozbe space/team ID.
   */
  teamId: string
}

/**
 * Open the Priority view in a Nozbe space.
 *
 * @param payload Priority view payload.
 * @returns Nozbe Priority URL.
 * @example
 * gotoPriority({ teamId: 'TeamID' })
 * // => 'nozbe4://goto/teams/TeamID/priority'
 * @link https://nozbe.help/advancedfeatures/x-callback-url/
 */
export function gotoPriority(payload: GotoPriority) {
  const { teamId } = payload

  return gotoUrl(`teams/${teamId}/priority`)
}
