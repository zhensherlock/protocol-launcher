import { type PCalcValuePayload, pcalcPath } from './shared'

/**
 * Set PCalc's main register to a value and open the conversions section.
 *
 * @param payload Convert value payload.
 * @returns PCalc convert URL.
 * @example
 * convertValue({ value: 12345 })
 * // => 'pcalc://convert/12345'
 *
 * @link https://www.pcalc.com/ios/history.html
 */
export function convertValue(payload: PCalcValuePayload) {
  return pcalcPath('convert', payload.value)
}
