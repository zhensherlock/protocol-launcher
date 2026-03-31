import { qs } from '@protocol-launcher/shared'

/**
 * Get command payload definition.
 */
type Get = {
  /**
   * UUID of tally set.
   */
  tallySetID?: string
  /**
   * UUID of a tally within the set.
   */
  tallyID?: string
  /**
   * Name of a tally set.
   */
  tallySet?: string
  /**
   * Name of a tally within above set.
   */
  tally?: string
  /**
   * Custom parameter name for the callback value (default: 'value').
   */
  retParam?: string
  /**
   * Callback URL required for get operation.
   */
  'x-success': string
}

/**
 * Get the current value of a specified tally.
 *
 * @param payload Get command payload.
 * @returns Tally get URL.
 * @example
 * get({
 *   tallySet: 'Daily Habits',
 *   tally: 'Exercise',
 *   'x-success': 'myapp://callback',
 * })
 * // => 'tally://get?tallySet=Daily+Habits&tally=Exercise&x-success=myapp%3A%2F%2Fcallback'
 * @example
 * get({
 *   tallySetID: 'abc-123',
 *   tallyID: 'xyz-789',
 *   'x-success': 'myapp://callback',
 *   retParam: 'count',
 * })
 * // => 'tally://get?tallySetID=abc-123&tallyID=xyz-789&retParam=count&x-success=myapp%3A%2F%2Fcallback'
 * @link https://agiletortoise.com/tally/
 */
export function get(payload: Get) {
  const { tallySetID, tallyID, tallySet, tally, retParam, 'x-success': xSuccess } = payload
  const params = qs({
    ...(tallySetID ? { tallySetID } : {}),
    ...(tallyID ? { tallyID } : {}),
    ...(tallySet ? { tallySet } : {}),
    ...(tally ? { tally } : {}),
    ...(retParam ? { retParam } : {}),
    'x-success': xSuccess,
  })

  return `tally://get${params}`
}
