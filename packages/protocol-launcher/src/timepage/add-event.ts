import type { AddEventPayload } from './shared'
import { timepageUrl, timepageXCallbackUrl } from './shared'

/**
 * Open Timepage to the new event screen.
 *
 * @param payload Add event payload.
 * @returns Timepage add event URL.
 * @example
 * addEvent({ title: 'Team Sync', day: 'today' })
 * // => 'timepage://add_event?title=Team%20Sync&day=today'
 * @example
 * addEvent({ title: 'Team Sync', day: 'tomorrow', xSuccess: 'shortcuts://callback', xCancel: 'shortcuts://cancel' })
 * // => 'timepage://x-callback-url/add_event?x-success=shortcuts%3A%2F%2Fcallback&x-cancel=shortcuts%3A%2F%2Fcancel&title=Team%20Sync&day=tomorrow'
 *
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function addEvent(payload: AddEventPayload = {}) {
  const { title, day, xSuccess, xCancel } = payload
  const params = {
    ...(title !== undefined ? { title } : {}),
    ...(day !== undefined ? { day } : {}),
  }

  if (xSuccess !== undefined || xCancel !== undefined) {
    return timepageXCallbackUrl('add_event', {
      ...(xSuccess !== undefined ? { 'x-success': xSuccess } : {}),
      ...(xCancel !== undefined ? { 'x-cancel': xCancel } : {}),
      ...params,
    })
  }

  return timepageUrl('add_event', params)
}
