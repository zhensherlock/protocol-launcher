import { timingTrackerUrl } from './shared'

/**
 * Edit time entry command payload definition.
 */
export type TimingEditTimeEntryPayload = {
  /**
   * The ID of the time entry to edit, or `latest` for the most recent time entry.
   */
  id: string
}

/**
 * Present a dialogue to edit the time entry with the given ID.
 *
 * @param payload Timing edit time entry payload.
 * @returns Timing edit time entry URL.
 * @example
 * editTimeEntry({ id: '1234' })
 * // => 'timing2helper://editTimeEntry/1234'
 * @example
 * editTimeEntry({ id: 'latest' })
 * // => 'timing2helper://editTimeEntry/latest'
 * @link https://timingapp.com/help/url-schemes
 */
export function editTimeEntry(payload: TimingEditTimeEntryPayload) {
  return timingTrackerUrl(`editTimeEntry/${encodeURIComponent(payload.id)}`)
}
