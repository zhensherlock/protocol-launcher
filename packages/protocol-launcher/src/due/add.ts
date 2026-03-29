import { qs } from '@protocol-launcher/shared'

/**
 * Add reminder payload definition.
 */
type Add = {
  /**
   * The title for the reminder.
   */
  title?: string
  /**
   * The due date expressed in seconds from Unix epoch (GMT).
   */
  duedate?: number
  /**
   * The due date expressed in seconds from now.
   */
  secslater?: number
  /**
   * The due date expressed in minutes from now.
   */
  minslater?: number
  /**
   * The due date expressed in hours from now.
   */
  hourslater?: number
  /**
   * The timezone used to interpret dates (e.g., 'GMT', 'Asia/Singapore').
   */
  timezone?: string
  /**
   * Auto snooze interval in minutes (1, 5, 10, 15, 30, 60). Due 3.2+.
   */
  autosnooze?: 1 | 5 | 10 | 15 | 30 | 60
  /**
   * The calendar interval for recurrence (NSDayCalendarUnit=16, NSWeekCalendarUnit=256,
   * NSMonthCalendarUnit=8, NSYearCalendarUnit=4).
   */
  recurunit?: 16 | 256 | 8 | 4
  /**
   * The frequency at which the recurrence repeats over the unit.
   */
  recurfreq?: number
  /**
   * The date to start recurrence from, expressed in seconds from Unix epoch.
   */
  recurfromdate?: number
  /**
   * Comma-separated list of days for weekly/monthly recurrence.
   */
  recurbyday?: string
  /**
   * Used with monthly recurrence to indicate nth occurrence (1 or -1).
   */
  recurbysetpos?: 1 | -1
  /**
   * A friendly name for the calling app.
   */
  xSource?: string
  /**
   * The URL to return to if the reminder was added successfully.
   */
  xSuccess?: string
  /**
   * The URL to return to if the reminder was not added.
   */
  xError?: string
}

/**
 * Add a new reminder in Due.
 *
 * @param payload Add reminder payload.
 * @returns Due add reminder URL.
 * @example
 * add({
 *   title: 'Call John',
 *   duedate: 1333238400,
 * })
 * // => 'due://x-callback-url/add?title=Call%20John&duedate=1333238400'
 * @example
 * add({
 *   title: 'Pay rent',
 *   duedate: 1306954800,
 *   timezone: 'GMT',
 *   recurunit: 8,
 *   recurfromdate: 1306954800,
 * })
 * // => 'due://x-callback-url/add?title=Pay%20rent&duedate=1306954800&timezone=GMT&recurunit=8&recurfromdate=1306954800'
 * @example
 * add({
 *   title: 'Call John',
 *   secslater: 3600,
 *   xSource: 'SuperCal',
 *   xSuccess: 'supercal://x-callback-url/returnAction',
 * })
 * // => 'due://x-callback-url/add?title=Call%20John&secslater=3600&x-source=SuperCal&x-success=supercal%3A%2F%2Fx-callback-url%2FreturnAction'
 * @link https://www.dueapp.com/developer.html
 */
export function add(payload: Add = {}) {
  const {
    title,
    duedate,
    secslater,
    minslater,
    hourslater,
    timezone,
    autosnooze,
    recurunit,
    recurfreq,
    recurfromdate,
    recurbyday,
    recurbysetpos,
    xSource,
    xSuccess,
    xError,
  } = payload

  const params = qs({
    ...(title ? { title } : {}),
    ...(duedate !== undefined ? { duedate } : {}),
    ...(secslater !== undefined ? { secslater } : {}),
    ...(minslater !== undefined ? { minslater } : {}),
    ...(hourslater !== undefined ? { hourslater } : {}),
    ...(timezone ? { timezone } : {}),
    ...(autosnooze !== undefined ? { autosnooze } : {}),
    ...(recurunit !== undefined ? { recurunit } : {}),
    ...(recurfreq !== undefined ? { recurfreq } : {}),
    ...(recurfromdate !== undefined ? { recurfromdate } : {}),
    ...(recurbyday ? { recurbyday } : {}),
    ...(recurbysetpos !== undefined ? { recurbysetpos } : {}),
    ...(xSource ? { 'x-source': xSource } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
    ...(xError ? { 'x-error': xError } : {}),
  })

  return `due://x-callback-url/add${params}`
}
