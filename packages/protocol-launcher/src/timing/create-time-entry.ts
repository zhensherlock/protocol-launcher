import { timingTrackerUrl } from './shared'

/**
 * Create time entry command payload definition.
 */
export type TimingCreateTimeEntryPayload = {
  /**
   * The title for the time entry.
   */
  title?: string

  /**
   * The notes for the time entry.
   */
  notes?: string

  /**
   * The ID or name of the project for the time entry.
   */
  project?: string

  /**
   * The start date for the time entry.
   */
  startDate?: string

  /**
   * The end date for the time entry.
   */
  endDate?: string

  /**
   * Create the time entry without presenting a dialogue first. Timing documents
   * this as only available when at least `startDate`, `endDate`, and one of
   * `title` or `project` are provided.
   */
  createImmediately?: boolean

  /**
   * Center the time entry editor on the screen. Timing documents this as only
   * available when `createImmediately` is not true.
   */
  center?: boolean

  /**
   * Whether the opened editor should immediately take focus. Timing documents
   * this as only available when `createImmediately` is not true.
   */
  obtainFocus?: boolean
}

/**
 * Create a new time entry in the Timing tracker app.
 *
 * @param payload Timing create time entry payload.
 * @returns Timing create time entry URL.
 * @example
 * createTimeEntry({
 *   title: 'Some title',
 *   notes: 'Some\nnotes',
 *   project: 'Work',
 *   startDate: '2022-04-01T12:00:00Z',
 *   endDate: '2022-04-01T12:30:00Z',
 *   createImmediately: false,
 *   center: true,
 * })
 * // => 'timing2helper://createTimeEntry?title=Some%20title&notes=Some%0Anotes&project=Work&startDate=2022-04-01T12:00:00Z&endDate=2022-04-01T12:30:00Z&createImmediately=false&center=true'
 * @link https://timingapp.com/help/url-schemes
 */
export function createTimeEntry(payload: TimingCreateTimeEntryPayload = {}) {
  const { title, notes, project, startDate, endDate, createImmediately, center, obtainFocus } = payload

  return timingTrackerUrl('createTimeEntry', {
    title,
    notes,
    project,
    startDate,
    endDate,
    createImmediately,
    center,
    obtainFocus,
  })
}
