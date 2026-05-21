import { type NozbeColor, type NozbeXCallback, xCallbackParams, xCallbackUrl } from './shared'

/**
 * Add project command payload definition.
 */
type AddProject = NozbeXCallback & {
  /**
   * Nozbe team/workspace ID.
   */
  teamId: string

  /**
   * Project name.
   */
  name: string

  /**
   * Project description.
   */
  description?: string

  /**
   * true makes the project open access; false makes it private to you.
   */
  isOpen?: boolean

  /**
   * Project color name.
   */
  color?: NozbeColor
}

/**
 * Add a project in Nozbe.
 *
 * @param payload Add project command payload.
 * @returns Nozbe add_project URL.
 * @example
 * addProject({ teamId: 'u79rr9gfqszxtn45', name: 'Project added with url', secret: 'abcdef' })
 * // => 'nozbe4://x-callback-url/add_project?team_id=u79rr9gfqszxtn45&name=Project%20added%20with%20url&secret=abcdef'
 * @link https://nozbe.help/advancedfeatures/x-callback-url/
 */
export function addProject(payload: AddProject) {
  const { teamId, name, description, isOpen, color } = payload

  return xCallbackUrl('add_project', {
    team_id: teamId,
    name,
    ...(description !== undefined ? { description } : {}),
    ...(isOpen !== undefined ? { is_open: isOpen } : {}),
    ...(color ? { color } : {}),
    ...xCallbackParams(payload),
  })
}
