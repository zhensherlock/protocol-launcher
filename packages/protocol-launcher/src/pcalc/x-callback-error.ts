/**
 * Return PCalc's x-callback-url endpoint for flashing an error from a callback failure.
 *
 * @returns PCalc x-callback error URL.
 * @example
 * xCallbackError()
 * // => 'pcalc://x-callback-url/error'
 *
 * @link https://www.pcalc.com/ios/history.html
 */
export function xCallbackError() {
  return 'pcalc://x-callback-url/error'
}
