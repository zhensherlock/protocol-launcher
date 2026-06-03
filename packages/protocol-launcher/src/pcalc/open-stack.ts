import { pcalcPath } from './shared'

/**
 * Open PCalc's stack in RPN mode.
 *
 * @returns PCalc stack URL.
 * @example
 * openStack()
 * // => 'pcalc://stack'
 *
 * @link https://www.pcalc.com/ios/history.html
 */
export function openStack() {
  return pcalcPath('stack')
}
