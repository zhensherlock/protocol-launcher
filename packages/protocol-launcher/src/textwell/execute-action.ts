import { type TextwellGeneralOptions, textwellUrl } from './shared'

/**
 * Execute action payload definition.
 */
export type TextwellExecuteActionPayload = TextwellGeneralOptions & {
  /**
   * Title of an action to execute.
   */
  title: string
}

/**
 * Execute a specific Textwell action by title.
 *
 * @param payload Execute action payload.
 * @returns Textwell executeAction URL.
 * @example
 * executeAction({ title: 'Format Markdown' })
 * // => 'textwell:///executeAction?title=Format%20Markdown'
 * @link https://sociomedia.com/textwell/urlschemes/
 */
export function executeAction(payload: TextwellExecuteActionPayload) {
  const { title, ...options } = payload

  return textwellUrl('executeAction', { title }, options)
}
