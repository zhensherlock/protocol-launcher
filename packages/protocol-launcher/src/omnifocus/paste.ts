import { qs } from '@protocol-launcher/shared'

/**
 * Paste action payload definition.
 */
type Paste = {
  /**
   * TaskPaper content to paste.
   */
  content?: string

  /**
   * Target location, such as "inbox", "projects", "/folder/Work", or "/task/mbp0SlWkvqq".
   */
  target?: string

  /**
   * Zero-based insertion index at the target.
   */
  index?: number
}

/**
 * Paste TaskPaper content into OmniFocus.
 *
 * @param payload Paste action payload.
 * @returns OmniFocus paste URL.
 * @example
 * paste({ content: '- Pick up milk', target: 'inbox' })
 * // => 'omnifocus:///paste?content=-%20Pick%20up%20milk&target=inbox'
 * @example
 * paste({ content: 'Project:\n\t- Task', target: 'projects', index: 0 })
 * // => 'omnifocus:///paste?content=Project%3A%0A%09-%20Task&target=projects&index=0'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function paste(payload: Paste = {}) {
  const { content, target, index } = payload
  const params = qs({
    ...(content ? { content } : {}),
    ...(target ? { target } : {}),
    ...(index !== undefined ? { index } : {}),
  })

  return `omnifocus:///paste${params}`
}
