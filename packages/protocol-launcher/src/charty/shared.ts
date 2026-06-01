import { qs } from '@protocol-launcher/shared'

export type ChartyBaseColors = 0 | 3 | 4

export interface ChartyAddThemePayload {
  /**
   * Theme name.
   *
   * @example 'BlGrYeOrRe'
   */
  name: string
  /**
   * Color selection strategy. Charty documents accepted values as 0, 3, and 4.
   *
   * @example 0
   * @example 3
   * @example 4
   */
  baseColors: ChartyBaseColors
  /**
   * Theme colors represented as hexadecimal codes.
   * Charty documents 3, 6, and 8 character color codes, separated by commas.
   *
   * @example '1a76e8,28d475,ffd416'
   */
  colors: string
}

function chartyQs(params: Record<string, unknown>) {
  return qs(params).replace(/%2C/gi, ',')
}

export function chartyUrl(command: string, params: Record<string, unknown>) {
  return `charty://${command}${chartyQs(params)}`
}
