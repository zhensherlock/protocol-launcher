import { qs } from '@protocol-launcher/shared'

/**
 * Priority values for createTask.
 */
type Priority = 0 | 1 | 2 | 3

/**
 * Repeat values for createTask (repeat from due date).
 */
type RepeatFromDueDate = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 50

/**
 * Repeat values for createTask (repeat from completion date).
 */
type RepeatFromCompletionDate = 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 150

/**
 * Repeat values for createTask.
 */
type Repeat = RepeatFromDueDate | RepeatFromCompletionDate

/**
 * Create task command payload definition.
 */
type CreateTask = {
  /**
   * The name of the task to create.
   */
  name: string

  /**
   * The task's due date in YYYY-MM-DD format.
   *
   * @example '2024-12-31'
   */
  dueDate?: string

  /**
   * The task's priority.
   *
   * 0 - no priority
   * 1 - high priority
   * 2 - medium priority
   * 3 - low priority
   *
   * @default 0
   */
  priority?: Priority

  /**
   * A note to attach to the task.
   *
   * @example 'This is a note'
   */
  note?: string

  /**
   * The task's recurrence rule.
   *
   * Repeat from Due Date when completed:
   * 0 - None
   * 1 - Weekly
   * 2 - Monthly
   * 3 - Yearly
   * 4 - Daily
   * 5 - Biweekly
   * 6 - Bimonthly
   * 7 - Semiannually
   * 8 - Quarterly
   * 50 - Advanced repeat
   *
   * Repeat from Completion Date:
   * 101 - Weekly
   * 102 - Monthly
   * 103 - Yearly
   * 104 - Daily
   * 105 - Biweekly
   * 106 - Bimonthly
   * 107 - Semiannually
   * 108 - Quarterly
   * 150 - Advanced repeat
   *
   * @default 0
   */
  repeat?: Repeat

  /**
   * Advanced recurrence rule. Requires repeat value to be 50 or 150.
   *
   * @example 'Every%20tue%20and%20thu'
   */
  advancedRepeat?: string
}

/**
 * Create a task in Appigo Todo.
 *
 * @param payload Create task command payload.
 * @returns Appigo Todo create task URL.
 * @example
 * createTask({ name: 'Buy milk' })
 * // => 'appigotodo://x-callback-url/createTask?name=Buy%20milk'
 * @example
 * createTask({ name: 'Call doctor', dueDate: '2024-12-31', priority: 1 })
 * // => 'appigotodo://x-callback-url/createTask?name=Call%20doctor&due-date=2024-12-31&priority=1'
 * @example
 * createTask({ name: 'Weekly report', note: 'Submit to manager', repeat: 1 })
 * // => 'appigotodo://x-callback-url/createTask?name=Weekly%20report&note=Submit%20to%20manager&repeat=1'
 * @example
 * createTask({ name: 'Team meeting', repeat: 50, advancedRepeat: 'Every mon and wed' })
 * // => 'appigotodo://x-callback-url/createTask?name=Team%20meeting&repeat=50&advanced-repeat=Every%20mon%20and%20wed'
 * @link https://support.appigo.com/support/solutions/articles/179661-third-party-integration-with-todo-ios-apps
 */
export function createTask(payload: CreateTask) {
  const { name, dueDate, priority = 0, note, repeat = 0, advancedRepeat } = payload
  const params = qs({
    name,
    ...(dueDate ? { 'due-date': dueDate } : {}),
    ...(priority !== 0 ? { priority: String(priority) } : {}),
    ...(note ? { note } : {}),
    ...(repeat !== 0 ? { repeat: String(repeat) } : {}),
    ...(advancedRepeat ? { 'advanced-repeat': advancedRepeat } : {}),
  })

  return `appigotodo://x-callback-url/createTask${params}`
}
