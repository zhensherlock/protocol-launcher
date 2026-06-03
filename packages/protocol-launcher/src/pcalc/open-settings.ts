import { pcalcPath } from './shared'

/**
 * Open PCalc's settings section.
 *
 * @returns PCalc settings URL.
 * @example
 * openSettings()
 * // => 'pcalc://settings'
 *
 * @link https://www.pcalc.com/ios/history.html
 */
export function openSettings() {
  return pcalcPath('settings')
}
