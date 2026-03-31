import { qs } from '@protocol-launcher/shared'

/**
 * Decrement command payload definition.
 */
type Decrement = {
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
 * Decrease count of specified tally.
 *
 * @param payload Decrement command payload.
 * @returns Tally decrement URL.
 * @example
 * decrement({
 *   tallySet: 'Game Score',
 *   tally: 'Player 1',
 * })
 * // => 'tally://decrement?tallySet=Game+Score&tally=Player+1'
 * @example
 * decrement({
 *   tallySetID: 'abc-123',
 *   tallyID: 'xyz-789',
 * })
 * // => 'tally://decrement?tallySetID=abc-123&tallyID=xyz-789'
 * @example
 * decrement({})
 * // => 'tally://decrement'
 * @link https://agiletortoise.com/tally/
 */
export function decrement(payload: Decrement = {}) {
  const { tallySetID, tallyID, tallySet, tally } = payload
  const params = qs({
    ...(tallySetID ? { tallySetID } : {}),
    ...(tallyID ? { tallyID } : {}),
    ...(tallySet ? { tallySet } : {}),
    ...(tally ? { tally } : {}),
  })

  return `tally://decrement${params}`
}
