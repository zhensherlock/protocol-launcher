import { type NozbeXCallback, xCallbackParams, xCallbackUrl } from './shared'

/**
 * Update task command payload definition.
 */
type UpdateTask = NozbeXCallback & {
  /**
   * Nozbe task ID.
   */
  taskId: string

  /**
   * Mark task as priority or not priority.
   */
  isPriority?: boolean

  /**
   * Mark task as completed or not completed.
   */
  isCompleted?: boolean
}

/**
 * Update a task in Nozbe.
 *
 * @param payload Update task command payload.
 * @returns Nozbe update_task URL.
 * @example
 * updateTask({ taskId: 'abcd1efgh2dcba3j', isCompleted: true, secret: 'abcdef' })
 * // => 'nozbe4://x-callback-url/update_task?task_id=abcd1efgh2dcba3j&is_completed=true&secret=abcdef'
 * @link https://nozbe.help/advancedfeatures/x-callback-url/
 */
export function updateTask(payload: UpdateTask) {
  const { taskId, isPriority, isCompleted } = payload

  return xCallbackUrl('update_task', {
    task_id: taskId,
    ...(isPriority !== undefined ? { is_priority: isPriority } : {}),
    ...(isCompleted !== undefined ? { is_completed: isCompleted } : {}),
    ...xCallbackParams(payload),
  })
}
