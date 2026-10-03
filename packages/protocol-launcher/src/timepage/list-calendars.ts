import { timepageXCallbackUrl } from './shared'

type ListCalendars = {
  /** Callback URL receiving comma-separated calendar names in calendars. */
  xSuccess: string
  /** Request only writable calendars instead of all visible calendars. */
  writable?: boolean
}

/**
 * Return Timepage calendar names to another app.
 *
 * @param payload Callback and calendar filter.
 * @returns Timepage list-calendars URL.
 * @example
 * listCalendars({ xSuccess: 'shortcuts://callback', writable: true })
 * // => 'timepage://x-callback-url/listcalendars?x-success=shortcuts%3A%2F%2Fcallback&writable=1'
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function listCalendars(payload: ListCalendars) {
  return timepageXCallbackUrl('listcalendars', {
    'x-success': payload.xSuccess,
    writable: payload.writable ? 1 : undefined,
  })
}
