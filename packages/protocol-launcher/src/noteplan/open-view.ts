import type { AtLeastOne, NotePlanXSuccess } from './shared'
import { notePlanUrl, xSuccessParam } from './shared'

/**
 * OpenView action payload definition.
 */
type OpenView = NotePlanXSuccess &
  AtLeastOne<{
    /**
     * View name.
     */
    name?: string

    /**
     * Relative folder path for the view.
     */
    folder?: string
  }>

/**
 * Open a NotePlan view identified by name and/or folder.
 *
 * @param payload OpenView action payload.
 * @returns NotePlan openView URL.
 * @example
 * openView({ name: 'Project Tasks', folder: '10 - Projects' })
 * // => 'noteplan://x-callback-url/openView?name=Project%20Tasks&folder=10%20-%20Projects'
 * @link https://help.noteplan.co/article/49-x-callback-url-scheme#openView
 */
export function openView(payload: OpenView) {
  const { name, folder, xSuccess } = payload

  return notePlanUrl('openView', {
    ...(name ? { name } : {}),
    ...(folder ? { folder } : {}),
    ...xSuccessParam(xSuccess),
  })
}
