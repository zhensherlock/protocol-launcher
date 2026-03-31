import { qs } from '@protocol-launcher/shared'

/**
 * Reset command payload definition.
 */
type Reset = {
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
 * Reset specified tally to its initial value.
 *
 * @param payload Reset command payload.
 * @returns Tally reset URL.
 * @example
 * reset({
 *   tallySet: 'Daily Habits',
 *   tally: 'Exercise',
 * })
 * // => 'tally://reset?tallySet=Daily+Habits&tally=Exercise'
 * @example
 * reset({
 *   tallySetID: 'abc-123',
 *   tallyID: 'xyz-789',
 * })
 * // => 'tally://reset?tallySetID=abc-123&tallyID=xyz-789'
 * @example
 * reset({})
 * // => 'tally://reset'
 * @link https://agiletortoise.com/tally/
 */
export function reset(payload: Reset = {}) {
  const { tallySetID, tallyID, tallySet, tally } = payload
  const params = qs({
    ...(tallySetID ? { tallySetID } : {}),
    ...(tallyID ? { tallyID } : {}),
    ...(tallySet ? { tallySet } : {}),
    ...(tally ? { tally } : {}),
  })

  return `tally://reset${params}`
}
