import { qs } from '@protocol-launcher/shared'

/**
 * Add task command payload definition (Mobile only).
 */
type AddTask = {
  /**
   * The task content (required).
   */
  content: string
  /**
   * Due date (optional), e.g., "Tomorrow @ 14:00".
   */
  date?: string
  /**
   * Task priority (optional), 1-4 (4=very urgent, 1=natural).
   * Note: API returns 4 for "very urgent" but clients show as P1.
   */
  priority?: number
}

/**
 * Open Todoist Add Task view (Mobile only).
 * This does NOT automatically submit the task, only opens and pre-fills the form.
 *
 * @param payload Add task definition.
 * @returns Todoist add task URL.
 * @example
 * addTask({ content: 'Buy Milk' })
 * // => 'todoist://addtask?content=Buy%20Milk'
 * @example
 * addTask({ content: 'Create document', date: 'Tomorrow @ 14:00', priority: 4 })
 * // => 'todoist://addtask?content=Create%20document&date=Tomorrow%20@%2014:00&priority=4'
 * @link https://developer.todoist.com/api/v1/#tag/Url-schemes
 */
export function addTask(payload: AddTask) {
  const { content, date, priority } = payload
  const params = qs({
    content,
    ...(date ? { date } : {}),
    ...(priority ? { priority: String(priority) } : {}),
  })

  return `todoist://addtask${params}`
}
