import { keyboardMaestroValue } from './shared'

/**
 * Filter actions definition.
 */
type FilterActions = {
  /**
   * Keyword used to filter actions.
   */
  keyword: string

  /**
   * Action category to select before filtering.
   */
  category?: string
}

/**
 * Filter Keyboard Maestro actions with a keyword.
 *
 * @param payload Action filter definition.
 * @returns Keyboard Maestro editor URL.
 * @example
 * filterActions({ keyword: 'Execute' })
 * // => 'keyboardmaestro://a=Execute'
 * @example
 * filterActions({ category: 'All Actions', keyword: 'Execute' })
 * // => 'keyboardmaestro://c=All%20Actions/a=Execute'
 * @link https://wiki.keyboardmaestro.com/manual/URL_Schemes
 */
export function filterActions(payload: FilterActions) {
  const { category, keyword } = payload

  if (category) {
    return `keyboardmaestro://c=${keyboardMaestroValue(category)}/a=${keyboardMaestroValue(keyword)}`
  }

  return `keyboardmaestro://a=${keyboardMaestroValue(keyword)}`
}
