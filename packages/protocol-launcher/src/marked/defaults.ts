import { type MarkedCallback, markedUrl } from './shared'

export type MarkedDefaultValue = string | number

/**
 * Defaults payload definition.
 */
export type Defaults = MarkedCallback & {
  /**
   * Set to 0 to disable automatic refresh of open preview windows.
   */
  refresh?: 0 | 1
  [setting: string]: MarkedDefaultValue | undefined
}

/**
 * Set Marked user Settings.
 *
 * @param payload Defaults payload.
 * @returns Marked defaults URL.
 * @example
 * defaults({ syntaxHighlight: 1, includeMathJax: 0 })
 * // => 'x-marked://defaults?syntaxHighlight=1&includeMathJax=0'
 * @link https://marked2app.com/help/URL_Handler.html#defaults
 */
export function defaults(payload: Defaults = {}) {
  const { 'x-success': xSuccess, ...settings } = payload

  return markedUrl('defaults', settings, { 'x-success': xSuccess })
}
