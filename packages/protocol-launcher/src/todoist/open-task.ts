/**
 * Open Todoist task by ID.
 *
 * @param payload Task definition.
 * @returns Todoist task URL.
 * @example
 * openTask({ id: '12345' })
 * // => 'todoist://task?id=12345'
 * @link https://developer.todoist.com/api/v1/#tag/Url-schemes
 */
export function openTask(payload: { id: string }) {
  const { id } = payload
  return `todoist://task?id=${id}`
}
