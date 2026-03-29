/**
 * Scripture lookup payload definition.
 */
type Scripture = {
  /**
   * The scripture reference (e.g., '2Timothy3:15,16', '2Tim3:15-17', 'Revelation21:3,4').
   * Supports full or abbreviated book names, and spanned verses.
   *
   * @example '2Timothy3:15,16'
   * @example '2Tim3:15-17'
   * @example '2Ti3:1,3,5-7'
   * @example 'Revelation21:3,4'
   */
  scripture: string
}

/**
 * Open a specific scripture in Equipd Bible using the basic URL scheme.
 *
 * @param payload Scripture lookup payload.
 * @returns Equipd Bible scripture URL.
 * @example
 * scripture({ scripture: '2Timothy3:15,16' })
 * // => 'equipdbible://bible/2Timothy3:15,16'
 * @example
 * scripture({ scripture: '2Tim3:15-17' })
 * // => 'equipdbible://bible/2Tim3:15-17'
 * @example
 * scripture({ scripture: 'Revelation21:3,4' })
 * // => 'equipdbible://bible/Revelation21:3,4'
 * @link https://www.equipd.me/kb/url-scheme/
 */
export function scripture(payload: Scripture) {
  const { scripture } = payload
  return `equipdbible://bible/${scripture}`
}
