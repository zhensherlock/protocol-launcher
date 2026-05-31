import type { Calendar366OpenItemPayload } from './shared'
import { calendar366Url } from './shared'

/**
 * Open an event or task in Calendar 366.
 *
 * @param payload Calendar 366 open command payload.
 * @returns Calendar 366 open URL.
 * @example
 * openItem({ type: 'event', id: 'ABC123' })
 * // => 'cal366://open?type=event&id=ABC123'
 * @example
 * openItem({ type: 'task', id: 'TASK123', date: 1717200000 })
 * // => 'cal366://open?type=task&id=TASK123&date=1717200000'
 * @link https://calendar366.com/help/index.html
 */
export function openItem(payload: Calendar366OpenItemPayload) {
  const { type, id } = payload

  return calendar366Url('open', {
    type,
    id,
    ...(type === 'task' && payload.date !== undefined ? { date: payload.date } : {}),
  })
}
