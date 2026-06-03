import { pcalcPath } from './shared'

/**
 * Open PCalc's constants section.
 *
 * @returns PCalc constants URL.
 * @example
 * openConstants()
 * // => 'pcalc://constants'
 *
 * @link https://www.pcalc.com/ios/history.html
 */
export function openConstants() {
  return pcalcPath('constants')
}
