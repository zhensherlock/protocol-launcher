import { pcalcPath } from './shared'

/**
 * Open PCalc's registers section.
 *
 * @returns PCalc registers URL.
 * @example
 * openRegisters()
 * // => 'pcalc://registers'
 *
 * @link https://www.pcalc.com/ios/history.html
 */
export function openRegisters() {
  return pcalcPath('registers')
}
