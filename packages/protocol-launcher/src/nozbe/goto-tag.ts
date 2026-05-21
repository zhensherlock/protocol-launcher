import { gotoUrl } from './shared'

/**
 * Tag view payload definition.
 */
type GotoTag = {
  /**
   * Nozbe space/team ID.
   */
  teamId: string

  /**
   * Nozbe tag ID.
   */
  tagId: string
}

/**
 * Open a specific tag in Nozbe.
 *
 * @param payload Tag view payload.
 * @returns Nozbe tag URL.
 * @example
 * gotoTag({ teamId: 'zR17yVDEDrpBbi8x', tagId: '6fxaXuTFwaqd13QV' })
 * // => 'nozbe4://goto/teams/zR17yVDEDrpBbi8x/tags/6fxaXuTFwaqd13QV'
 * @link https://nozbe.help/advancedfeatures/x-callback-url/
 */
export function gotoTag(payload: GotoTag) {
  const { teamId, tagId } = payload

  return gotoUrl(`teams/${teamId}/tags/${tagId}`)
}
