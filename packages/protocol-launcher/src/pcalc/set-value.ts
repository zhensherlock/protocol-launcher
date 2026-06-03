import { type PCalcValuePayload, pcalcPath } from './shared'

/**
 * Set PCalc's main register to a value.
 *
 * @param payload Set value payload.
 * @returns PCalc set URL.
 * @example
 * setValue({ value: 12345 })
 * // => 'pcalc://set/12345'
 *
 * @link https://www.pcalc.com/ios/history.html
 */
export function setValue(payload: PCalcValuePayload) {
  return pcalcPath('set', payload.value)
}
