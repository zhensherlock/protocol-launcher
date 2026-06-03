import { type PCalcNamePayload, pcalcPath } from './shared'

/**
 * Open PCalc and set the current layout.
 *
 * @param payload Layout payload.
 * @returns PCalc layout URL.
 * @example
 * openLayout({ name: 'Engineering' })
 * // => 'pcalc://layout/Engineering'
 *
 * @link https://www.pcalc.com/ios/history.html
 */
export function openLayout(payload: PCalcNamePayload) {
  return pcalcPath('layout', payload.name)
}
