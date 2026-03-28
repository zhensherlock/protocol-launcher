/**
 * Support payload definition.
 */
type Support = {
  /**
   * Support string to filter results.
   * Enter a valid support string to filter results.
   *
   * @link https://developer.valvesoftware.com/wiki/Steam_Support_strings
   */
  params?: string
}

/**
 * Launches the Steam Support utility and runs all of its tests.
 *
 * @param payload Support payload.
 * @returns Steam support URL.
 * @example
 * support({})
 * // => 'steam://support/'
 * @example
 * support({ params: '730' })
 * // => 'steam://support/730'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function support(payload: Support = {}) {
  const { params } = payload
  return `steam://support/${params ?? ''}`
}
