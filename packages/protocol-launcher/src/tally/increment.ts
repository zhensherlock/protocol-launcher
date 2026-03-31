import { qs } from '@protocol-launcher/shared'

/**
 * Increment command payload definition.
 */
type Increment = {
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
}

/**
 * Increase count of specified tally.
 *
 * @param payload Increment command payload.
 * @returns Tally increment URL.
 * @example
 * increment({
 *   tallySet: 'Game Score',
 *   tally: 'Player 1',
 * })
 * // => 'tally://increment?tallySet=Game+Score&tally=Player+1'
 * @example
 * increment({
 *   tallySetID: 'abc-123',
 *   tallyID: 'xyz-789',
 * })
 * // => 'tally://increment?tallySetID=abc-123&tallyID=xyz-789'
 * @example
 * increment({})
 * // => 'tally://increment'
 * @link https://agiletortoise.com/tally/
 */
export function increment(payload: Increment = {}) {
  const { tallySetID, tallyID, tallySet, tally } = payload
  const params = qs({
    ...(tallySetID ? { tallySetID } : {}),
    ...(tallyID ? { tallyID } : {}),
    ...(tallySet ? { tallySet } : {}),
    ...(tally ? { tally } : {}),
  })

  return `tally://increment${params}`
}
