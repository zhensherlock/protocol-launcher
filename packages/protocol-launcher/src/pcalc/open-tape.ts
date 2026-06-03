import { pcalcPath } from './shared'

/**
 * Open PCalc's tape section.
 *
 * @returns PCalc tape URL.
 * @example
 * openTape()
 * // => 'pcalc://tape'
 *
 * @link https://www.pcalc.com/ios/history.html
 */
export function openTape() {
  return pcalcPath('tape')
}
