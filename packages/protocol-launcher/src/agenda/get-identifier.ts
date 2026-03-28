import { qs } from '@protocol-launcher/shared'

/**
 * Get identifier command payload definition.
 */
type GetIdentifier = {
  /**
   * The project title.
   *
   * @example 'Welcome'
   */
  projectTitle?: string
  /**
   * The title of the note.
   *
   * @example 'Things to Try'
   */
  title?: string
}

/**
 * Get identifier for note or project identified by title.
 *
 * @param payload Get identifier command payload.
 * @returns Agenda get identifier URL.
 * @example
 * getIdentifier({ projectTitle: 'Welcome' })
 * // => 'agenda://x-callback-url/get-identifier?project-title=Welcome'
 * @example
 * getIdentifier({ projectTitle: 'Welcome', title: 'Things to Try' })
 * // => 'agenda://x-callback-url/get-identifier?project-title=Welcome&title=Things%20to%20Try'
 * @example
 * getIdentifier({ title: 'Things to Try' })
 * // => 'agenda://x-callback-url/get-identifier?title=Things%20to%20Try'
 * @link https://agenda.community/t/x-callback-url-support-and-reference/27253
 */
export function getIdentifier(payload: GetIdentifier = {}) {
  const { projectTitle, title } = payload
  const params = qs({
    ...(projectTitle ? { 'project-title': projectTitle } : {}),
    ...(title ? { title } : {}),
  })

  return `agenda://x-callback-url/get-identifier${params}`
}
