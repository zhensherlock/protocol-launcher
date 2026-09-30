import { type LongshotCommandPayload, longshotCommandUrl } from './shared'

/**
 * OCR command payload definition.
 */
type Ocr = LongshotCommandPayload

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
  return longshotCommandUrl('ocr', payload, 'string')
}
