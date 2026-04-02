import { qs } from '@protocol-launcher/shared'

/**
 * Open Quick Add command payload definition (Desktop only).
 */
type OpenQuickAdd = {
  /**
   * The task content (optional).
   */
  content?: string
  /**
   * The task description (optional).
   */
  description?: string
}

/**
 * Open Todoist Global Quick Add panel (Desktop only, 9.2.0+).
 * This does NOT automatically submit the task, only opens and pre-fills the panel.
 *
 * @param payload Open quick add definition.
 * @returns Todoist open quick add URL.
 * @example
 * openQuickAdd({})
 * // => 'todoist://openquickadd'
 * @example
 * openQuickAdd({ content: 'My Task', description: 'This is a description' })
 * // => 'todoist://openquickadd?content=My%20Task&description=This%20is%20a%20description'
 * @link https://developer.todoist.com/api/v1/#tag/Url-schemes
 */
export function openQuickAdd(payload: OpenQuickAdd = {}) {
  const { content, description } = payload
  const params = qs({
    ...(content ? { content } : {}),
    ...(description ? { description } : {}),
  })

  return `todoist://openquickadd${params}`
}
