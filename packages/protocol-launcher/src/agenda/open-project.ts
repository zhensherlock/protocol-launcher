import { qs } from '@protocol-launcher/shared'

/**
 * Open project command payload definition.
 */
type OpenProject = {
  /**
   * The title of the project.
   *
   * @example 'Welcome'
   */
  title?: string
  /**
   * The project title (alternative to title).
   */
  projectTitle?: string
  /**
   * The identifier of the project.
   */
  identifier?: string
  /**
   * Open in a separate window (New in Agenda 18.0).
   */
  separateWindow?: boolean
}

/**
 * Open a project identified by title or identifier.
 *
 * @param payload Open project command payload.
 * @returns Agenda open project URL.
 * @example
 * openProject({ title: 'Welcome' })
 * // => 'agenda://x-callback-url/open-project?title=Welcome'
 * @example
 * openProject({ identifier: 'project-123' })
 * // => 'agenda://x-callback-url/open-project?identifier=project-123'
 * @example
 * openProject({ title: 'Welcome', separateWindow: true })
 * // => 'agenda://x-callback-url/open-project?title=Welcome&separate-window=true'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function openProject(payload: OpenProject = {}) {
  const { title, projectTitle, identifier, separateWindow } = payload
  const params = qs({
    ...(title ? { title } : {}),
    ...(projectTitle ? { 'project-title': projectTitle } : {}),
    ...(identifier ? { identifier } : {}),
    ...(separateWindow !== undefined ? { 'separate-window': separateWindow } : {}),
  })

  return `agenda://x-callback-url/open-project${params}`
}
