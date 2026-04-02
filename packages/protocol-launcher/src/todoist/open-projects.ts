import { qs } from '@protocol-launcher/shared'

/**
 * Open Todoist projects view payload definition.
 */
type OpenProjects = {
  /**
   * Workspace ID to filter projects (Desktop only).
   */
  workspaceId?: string
}

/**
 * Open Todoist projects view.
 * On desktop, can optionally filter by workspace ID.
 *
 * @param payload Open projects definition.
 * @returns Todoist projects URL.
 * @example
 * openProjects({})
 * // => 'todoist://projects'
 * @example
 * openProjects({ workspaceId: '1234' })
 * // => 'todoist://projects?workspaceId=1234'
 * @link https://developer.todoist.com/api/v1/#tag/Url-schemes
 */
export function openProjects(payload: OpenProjects = {}) {
  const { workspaceId } = payload
  const params = qs({
    ...(workspaceId ? { workspaceId } : {}),
  })

  return `todoist://projects${params}`
}
