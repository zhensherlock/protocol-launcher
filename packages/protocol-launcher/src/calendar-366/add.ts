import type { Calendar366AddPayload } from './shared'
import { calendar366Url } from './shared'

/**
 * Add an event or task in Calendar 366.
 *
 * @param payload Calendar 366 add command payload.
 * @returns Calendar 366 add URL.
 * @example
 * add({ type: 'event', query: 'Meeting tomorrow 10am' })
 * // => 'cal366://add?type=event&query=Meeting%20tomorrow%2010am'
 * @example
 * add({ type: 'task', query: 'Call dentist' })
 * // => 'cal366://add?type=task&query=Call%20dentist'
 * @link https://calendar366.com/help/index.html
 */
export function add(payload: Calendar366AddPayload) {
  const { type, query } = payload

  return calendar366Url('add', {
    type,
    ...(query !== undefined ? { query } : {}),
  })
}
