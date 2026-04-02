import { qs } from '@protocol-launcher/shared'

/**
 * Open Todoist label payload definition.
 */
type OpenLabel = {
  /**
   * Label ID (Desktop only).
   */
  id?: string
  /**
   * Label name (Mobile only).
   */
  name?: string
}

/**
 * Open Todoist label.
 * On mobile, use label name. On desktop, use label ID.
 *
 * @param payload Open label definition.
 * @returns Todoist label URL.
 * @example
 * openLabel({ name: 'Urgent' })
 * // => 'todoist://label?name=Urgent'
 * @example
 * openLabel({ id: '12345' })
 * // => 'todoist://label?id=12345'
 * @link https://developer.todoist.com/api/v1/#tag/Url-schemes
 */
export function openLabel(payload: OpenLabel = {}) {
  const { id, name } = payload
  const params = qs({
    ...(id ? { id } : {}),
    ...(name ? { name } : {}),
  })

  return `todoist://label${params}`
}
