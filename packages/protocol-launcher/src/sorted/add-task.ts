import type { SortedAddTaskPayload } from './shared'
import { sortedAddUrl, sortedSharedAddParams } from './shared'

/**
 * Add a task in Sorted.
 *
 * @param payload Sorted add task payload.
 * @returns Sorted add task URL.
 * @example
 * addTask({
 *   title: 'Plan launch',
 *   date: '2026-06-01 09:00',
 *   duration: 45,
 *   list: 'Work',
 *   tags: 'urgent,office',
 * })
 * // => 'sorted://x-callback-url/add?title=Plan%20launch&date=2026-06-01%2009%3A00&duration=45&list=Work&tags=urgent%2Coffice'
 * @link https://www.sortedapp.com/blog/url-scheme
 */
export function addTask(payload: SortedAddTaskPayload) {
  const { list, tags, lock, completionDate } = payload

  return sortedAddUrl({
    ...sortedSharedAddParams(payload),
    ...(list ? { list } : {}),
    ...(tags ? { tags } : {}),
    ...(lock !== undefined ? { lock } : {}),
    ...(completionDate ? { completionDate } : {}),
  })
}
