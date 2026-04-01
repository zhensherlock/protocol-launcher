import { qs } from '@protocol-launcher/shared'

/**
 * Show tasks command payload definition.
 */
type ShowTasks = {
  /**
   * Search string to filter tasks (using the same syntax as in the UI).
   *
   * @example 't bookmark'
   */
  search?: string
}

/**
 * Show the tasks tab in Beorg, optionally with a search filter.
 *
 * @param payload Show tasks command payload.
 * @returns Beorg tasks URL.
 * @example
 * showTasks({ search: 't bookmark' })
 * // => 'beorg://x-callback-url/tasks?search=t%20bookmark'
 * @example
 * showTasks({})
 * // => 'beorg://x-callback-url/tasks'
 * @link https://www.beorgapp.com/manual/#url-scheme
 */
export function showTasks(payload: ShowTasks = {}) {
  const { search } = payload
  const params = qs({
    ...(search ? { search } : {}),
  })

  return `beorg://x-callback-url/tasks${params}`
}
