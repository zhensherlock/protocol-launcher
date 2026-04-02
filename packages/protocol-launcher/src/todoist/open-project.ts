/**
 * Open Todoist project by ID.
 *
 * @param payload Project definition.
 * @returns Todoist project URL.
 * @example
 * openProject({ id: '128501470' })
 * // => 'todoist://project?id=128501470'
 * @link https://developer.todoist.com/api/v1/#tag/Url-schemes
 */
export function openProject(payload: { id: string }) {
  const { id } = payload
  return `todoist://project?id=${id}`
}
