export type PCalcValue = string | number

export interface PCalcValuePayload {
  /**
   * Value to place in PCalc's main register.
   */
  value: PCalcValue
}

export interface PCalcNamePayload {
  /**
   * Layout or calculator name.
   */
  name: string
}

export function pcalcPath(action: string, value?: PCalcValue) {
  if (value === undefined) {
    return `pcalc://${action}`
  }

  return `pcalc://${action}/${encodeURIComponent(String(value))}`
}
