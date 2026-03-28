import { qs } from '@protocol-launcher/shared'

/**
 * OCR command payload definition.
 */
type Ocr = {
  /**
   * The function to execute.
   */
  func: string
}

/**
 * Start OCR text recognition in Longshot.
 *
 * @param payload OCR command payload.
 * @returns Longshot ocr URL.
 * @example
 * ocr({ func: 'start' })
 * // => 'longshot://ocr?func=start'
 * @link https://longshot.chitaner.com/blog/urlschemeapi/
 */
export function ocr(payload: Ocr) {
  const { func } = payload
  const params = qs({ func })
  return `longshot://ocr${params}`
}
