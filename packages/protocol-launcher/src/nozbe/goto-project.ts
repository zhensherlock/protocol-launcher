import { gotoUrl } from './shared'

/**
 * Project view payload definition.
 */
type GotoProject = {
  /**
   * Nozbe space/team ID.
   */
  teamId: string

  /**
   * Nozbe project ID.
   */
  projectId: string
}

/**
 * Open a specific project in Nozbe.
 *
 * @param payload Project view payload.
 * @returns Nozbe project URL.
 * @example
 * gotoProject({ teamId: 'zR17yVDEDrpBbi8x', projectId: 'mfdcza541h8g20hz' })
 * // => 'nozbe4://goto/teams/zR17yVDEDrpBbi8x/projects/mfdcza541h8g20hz'
 * @link https://nozbe.help/advancedfeatures/x-callback-url/
 */
export function gotoProject(payload: GotoProject) {
  const { teamId, projectId } = payload

  return gotoUrl(`teams/${teamId}/projects/${projectId}`)
}
