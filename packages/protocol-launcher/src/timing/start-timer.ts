import { timingTrackerUrl } from './shared'

/**
 * Start timer command payload definition.
 */
export type TimingStartTimerPayload = {
  /**
   * The title for the timer.
   */
  title?: string

  /**
   * The notes for the timer.
   */
  notes?: string

  /**
   * The ID or name of the project for the timer.
   */
  project?: string

  /**
   * The estimated duration for the timer, in seconds.
   */
  estimatedDuration?: number

  /**
   * The start date for the timer.
   */
  startDate?: string

  /**
   * Start the timer without presenting a dialogue first.
   */
  startImmediately?: boolean

  /**
   * Center the timer editor on the screen. Timing documents this as only
   * available when `startImmediately` is not true.
   */
  center?: boolean
}

/**
 * Start a timer in the Timing tracker app.
 *
 * @param payload Timing start timer payload.
 * @returns Timing start timer URL.
 * @example
 * startTimer({
 *   title: 'Some title',
 *   notes: 'Some\nnotes',
 *   project: 'Work',
 *   estimatedDuration: 600,
 *   startDate: '2022-04-01T12:00:00Z',
 *   startImmediately: false,
 *   center: true,
 * })
 * // => 'timing2helper://startTimer?title=Some%20title&notes=Some%0Anotes&project=Work&estimatedDuration=600&startDate=2022-04-01T12:00:00Z&startImmediately=false&center=true'
 * @link https://timingapp.com/help/url-schemes
 */
export function startTimer(payload: TimingStartTimerPayload = {}) {
  const { title, notes, project, estimatedDuration, startDate, startImmediately, center } = payload

  return timingTrackerUrl('startTimer', {
    title,
    notes,
    project,
    estimatedDuration,
    startDate,
    startImmediately,
    center,
  })
}
