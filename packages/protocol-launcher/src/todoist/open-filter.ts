/**
 * Open Todoist filter by ID.
 *
 * @param payload Filter definition.
 * @returns Todoist filter URL.
 * @example
 * openFilter({ id: '9' })
 * // => 'todoist://filter?id=9'
 * @link https://developer.todoist.com/api/v1/#tag/Url-schemes
 */
export function openFilter(payload: { id: string }) {
  const { id } = payload
  return `todoist://filter?id=${id}`
}
