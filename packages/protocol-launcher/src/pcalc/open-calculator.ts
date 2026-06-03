import { type PCalcNamePayload, pcalcPath } from './shared'

/**
 * Open PCalc and switch to a specific calculator.
 *
 * @param payload Calculator payload.
 * @returns PCalc calculator URL.
 * @example
 * openCalculator({ name: 'name' })
 * // => 'pcalc://calculator/name'
 *
 * @link https://www.pcalc.com/ios/history.html
 */
export function openCalculator(payload: PCalcNamePayload) {
  return pcalcPath('calculator', payload.name)
}
