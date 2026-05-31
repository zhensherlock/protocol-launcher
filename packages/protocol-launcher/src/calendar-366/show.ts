import type { Calendar366ShowPayload } from './shared'
import { calendar366Url } from './shared'

/**
 * Show a Calendar 366 view, task list, or date.
 *
 * @param payload Calendar 366 show command payload.
 * @returns Calendar 366 show URL.
 * @example
 * show({ view: 'month' })
 * // => 'cal366://show?view=month'
 * @example
 * show({ tasks: 1 })
 * // => 'cal366://show?tasks=1'
 * @link https://calendar366.com/help/index.html
 */
export function show(payload: Calendar366ShowPayload = {}) {
  const { view, tasks, date } = payload

  return calendar366Url('show', {
    ...(view !== undefined ? { view } : {}),
    ...(tasks !== undefined ? { tasks } : {}),
    ...(date !== undefined ? { date } : {}),
  })
}
