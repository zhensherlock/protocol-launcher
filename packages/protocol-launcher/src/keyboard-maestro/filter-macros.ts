import { keyboardMaestroValue } from './shared'

/**
 * Filter macros definition.
 */
type FilterMacros = {
  /**
   * Keyword used to filter macros.
   */
  keyword: string

  /**
   * Macro group to select before filtering.
   */
  group?: string
}

/**
 * Filter Keyboard Maestro macros with a keyword.
 *
 * @param payload Macro filter definition.
 * @returns Keyboard Maestro editor URL.
 * @example
 * filterMacros({ keyword: 'Activate' })
 * // => 'keyboardmaestro://q=Activate'
 * @example
 * filterMacros({ group: 'All Macros', keyword: 'Activate' })
 * // => 'keyboardmaestro://g=All%20Macros/q=Activate'
 * @link https://wiki.keyboardmaestro.com/manual/URL_Schemes
 */
export function filterMacros(payload: FilterMacros) {
  const { group, keyword } = payload

  if (group) {
    return `keyboardmaestro://g=${keyboardMaestroValue(group)}/q=${keyboardMaestroValue(keyword)}`
  }

  return `keyboardmaestro://q=${keyboardMaestroValue(keyword)}`
}
