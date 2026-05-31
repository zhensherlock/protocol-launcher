import { add } from './add'
import type { Calendar366AddItemPayload } from './shared'

/**
 * Add an event in Calendar 366.
 *
 * @param payload Calendar 366 event creation payload.
 * @returns Calendar 366 add event URL.
 * @example
 * addEvent({ query: 'Meeting tomorrow 10am' })
 * // => 'cal366://add?type=event&query=Meeting%20tomorrow%2010am'
 * @link https://calendar366.com/help/index.html
 */
export function addEvent(payload: Calendar366AddItemPayload = {}) {
  return add({ ...payload, type: 'event' })
}
