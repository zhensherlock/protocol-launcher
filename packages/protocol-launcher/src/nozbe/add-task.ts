import { type NozbeXCallback, xCallbackParams, xCallbackUrl } from './shared'

/**
 * Add task command payload definition.
 */
type AddTask = NozbeXCallback & {
  /**
   * Nozbe project ID.
   */
  projectId: string

  /**
   * Task name.
   */
  name: string

  /**
   * Mark task as priority or not priority.
   */
  isPriority?: boolean

  /**
   * ID of member responsible for the task. Pass an empty string to leave the task unassigned.
   */
  responsibleId?: string

  /**
   * Due date expressed as millisecond epoch time.
   */
  dueAt?: number

  /**
   * Pass true when due date is a full day without time specified.
   */
  isAllDay?: true

  /**
   * Optional comment to append to the task.
   */
  comment?: string
}

/**
 * Add a task in Nozbe.
 *
 * @param payload Add task command payload.
 * @returns Nozbe add_task URL.
 * @example
 * addTask({ projectId: 'u79rr9gfqszxtn45', name: 'Added with url', secret: 'abcdef' })
 * // => 'nozbe4://x-callback-url/add_task?project_id=u79rr9gfqszxtn45&name=Added%20with%20url&secret=abcdef'
 * @link https://nozbe.help/advancedfeatures/x-callback-url/
 */
export function addTask(payload: AddTask) {
  const { projectId, name, isPriority, responsibleId, dueAt, isAllDay, comment } = payload

  return xCallbackUrl('add_task', {
    project_id: projectId,
    name,
    ...(isPriority !== undefined ? { is_priority: isPriority } : {}),
    ...(responsibleId !== undefined ? { responsible_id: responsibleId } : {}),
    ...(dueAt !== undefined ? { due_at: dueAt } : {}),
    ...(isAllDay ? { is_all_day: true } : {}),
    ...(comment ? { comment } : {}),
    ...xCallbackParams(payload),
  })
}
