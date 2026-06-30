import { timingMainUrl } from './shared'

/**
 * Select projects command payload definition.
 */
export type TimingSelectProjectsPayload = {
  /**
   * Project names or IDs to select. When omitted, Timing selects "All Activities".
   */
  projects?: string[]
}

/**
 * Select projects in the sidebar of the main Timing app.
 *
 * @param payload Timing select projects payload.
 * @returns Timing select projects URL.
 * @example
 * selectProjects({ projects: ['1234'] })
 * // => 'timing2://selectProjects/1234'
 * @example
 * selectProjects({ projects: ['ProjectA', 'ProjectB'] })
 * // => 'timing2://selectProjects/ProjectA/ProjectB'
 * @example
 * selectProjects()
 * // => 'timing2://selectProjects'
 * @link https://timingapp.com/help/url-schemes
 */
export function selectProjects(payload: TimingSelectProjectsPayload = {}) {
  return timingMainUrl('selectProjects', payload.projects ?? [])
}
