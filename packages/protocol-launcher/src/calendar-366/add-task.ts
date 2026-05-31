import { add } from './add'
import type { Calendar366AddItemPayload } from './shared'

/**
 * Add a task in Calendar 366.
 *
 * @param payload Calendar 366 task creation payload.
 * @returns Calendar 366 add task URL.
 * @example
 * addTask({ query: 'Call dentist' })
 * // => 'cal366://add?type=task&query=Call%20dentist'
 * @link https://calendar366.com/help/index.html
 */
export function addTask(payload: Calendar366AddItemPayload = {}) {
  return add({ ...payload, type: 'task' })
}
