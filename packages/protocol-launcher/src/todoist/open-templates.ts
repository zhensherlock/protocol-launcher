import { qs } from '@protocol-launcher/shared'

/**
 * Open Todoist templates view payload definition.
 */
type OpenTemplates = {
  /**
   * Template ID to open specific template (Desktop only).
   */
  id?: string
}

/**
 * Open Todoist templates view (Desktop only).
 *
 * @param payload Open templates definition.
 * @returns Todoist templates URL.
 * @example
 * openTemplates({})
 * // => 'todoist://templates'
 * @example
 * openTemplates({ id: '123' })
 * // => 'todoist://templates?id=123'
 * @link https://developer.todoist.com/api/v1/#tag/Url-schemes
 */
export function openTemplates(payload: OpenTemplates = {}) {
  const { id } = payload
  const params = qs({
    ...(id ? { id } : {}),
  })

  return `todoist://templates${params}`
}
