import { goodTaskUrl } from './shared'

/**
 * SmartAdd action payload definition.
 */
type SmartAdd = {
  /**
   * Text input parsed by GoodTask Smart Add Rules.
   */
  text: string
}

/**
 * Create a GoodTask task using Smart Add Rules.
 *
 * @param payload SmartAdd action payload.
 * @returns GoodTask smartadd URL.
 * @example
 * smartAdd({ text: 'Buy milk tomorrow' })
 * // => 'goodtask3://smartadd?text=Buy%20milk%20tomorrow'
 * @link https://goodtaskapp.com/url-scheme/
 */
export function smartAdd(payload: SmartAdd) {
  const { text } = payload

  return goodTaskUrl('smartadd', { text })
}
