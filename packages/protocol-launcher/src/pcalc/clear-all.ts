import { pcalcPath } from './shared'

/**
 * Clear all in PCalc.
 *
 * @returns PCalc clear-all URL.
 * @example
 * clearAll()
 * // => 'pcalc://ac'
 *
 * @link https://www.pcalc.com/ios/history.html
 */
export function clearAll() {
  return pcalcPath('ac')
}
