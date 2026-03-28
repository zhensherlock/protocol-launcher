import { qs } from '@protocol-launcher/shared'

/**
 * Task type enum.
 * 0 = Task, 1 = Project, 2 = Checklist
 */
type TaskType = 0 | 1 | 2

/**
 * Priority enum.
 */
type Priority =
  | 0 // None
  | 1 // Low
  | 2 // Medium
  | 3 // High

/**
 * Repeat enum.
 */
type Repeat =
  | 1 // Daily
  | 2 // Weekly
  | 3 // Bi-weekly
  | 4 // Monthly

/**
 * Action type for task actions.
 */
type ActionType =
  | `call:${string}`
  | `message:${string}`
  | `mail:${string}`
  | `url:${string}`
  | `visit:${string}`
  | `google:${string}`

/**
 * Add task payload definition.
 */
type Add = {
  /**
   * Title of the task.
   * When the supplied text is '(clipboard)', 2Do will copy the text from the clipboard (iOS 3.13+).
   */
  task?: string
  /**
   * Type of task to create.
   * 0 = Task, 1 = Project, 2 = Checklist
   * 2Do uses Task (0) as default when not specified.
   */
  type?: TaskType
  /**
   * Name of an existing list in app, case-insensitive.
   * Default list or the currently visible list on screen is selected if not used.
   */
  forList?: string
  /**
   * The name of the project or checklist you wish to add this task to.
   * When using this parameter, you must also provide the name of the List this project belongs to.
   */
  forParentName?: string
  /**
   * The internally used, unique identifier of a parent task.
   * If supplied, this task will be added as a sub-task to the parent task.
   */
  forParentTask?: string
  /**
   * Notes for the task.
   * When the supplied text is '(clipboard)', 2Do will copy the text from the clipboard (iOS 3.13+).
   */
  note?: string
  /**
   * Multiple lines separated by a carriage return will create a sub-task for each line.
   * When the supplied text is '(clipboard)', 2Do will copy the text from the clipboard (iOS 3.13+).
   * Presence of this property will turn the parent task into a Checklist.
   */
  subtasks?: string
  /**
   * Priority level.
   * 0 = none, 1 = low, 2 = medium, 3 = high
   * 2Do uses none (0) as default when not specified.
   */
  priority?: Priority
  /**
   * Whether the task is starred.
   * 0 = no, 1 = yes
   * 2Do uses no (0) as default when not specified.
   */
  starred?: 0 | 1
  /**
   * Comma separated list of tags to assign to the task.
   * When the supplied text is '(clipboard)', 2Do will copy the text from the clipboard (iOS 3.13+).
   */
  tags?: string
  /**
   * Comma separated list of locations to assign to the task.
   * When the supplied text is '(clipboard)', 2Do will copy the text from the clipboard (iOS 3.13+).
   */
  locations?: string
  /**
   * Due date. Supports formats:
   * - yyyy-MM-dd: Sets the date on default due time
   * - Any number: Number of days from Today (0 = Today, 1 = Tomorrow)
   * - 'In X days/weeks/months': Number of days from Today
   * - 'Next Sunday/Monday etc': Next specific day (iOS 3.13+)
   */
  due?: string
  /**
   * Due time. Supports formats:
   * - HH:mm (24-hour format)
   * - hh:mm am/pm (12-hour format)
   */
  dueTime?: string
  /**
   * Start date and time. Supports formats:
   * - yyyy-MM-dd HH:mm: Sets the start date and time
   * - Any number: Number of days from Today (0 = Today, 1 = Tomorrow)
   * - 'In X days/weeks/months': Number of days from Today (iOS 3.13+)
   * - 'Next Sunday/Monday etc': Next specific day (iOS 3.13+)
   */
  start?: string
  /**
   * Repeat frequency.
   * 1 = daily, 2 = weekly, 3 = bi-weekly, 4 = monthly
   */
  repeat?: Repeat
  /**
   * Task action. Supports formats:
   * - call:<number>: Add a Call action
   * - message:<number>: Add a Message action
   * - mail:<email>: Add an Email action
   * - url:<url>: Add a Browse action
   * - visit:<address>: Add a Visit action
   * - google:<search term>: Add a Google action
   */
  action?: ActionType
  /**
   * Picture attachment. Can be:
   * - 'lastphoto': Grab the most recent photo from camera roll (iOS only)
   * - Base64 encoded string: Convert to image and use as attachment
   */
  picture?: string
  /**
   * Base64 encoded audio attachment.
   */
  audio?: string
  /**
   * Whether to apply default due date/time settings.
   * 0 = apply defaults, 1 = ignore defaults
   * 2Do applies defaults when not specified.
   */
  ignoreDefaults?: 0 | 1
  /**
   * Whether to save the newly created task's UID in clipboard.
   * 0 = no, 1 = yes (iOS 3.8.3+, Mac 2.2.2+)
   * 2Do does not save to clipboard when not specified.
   */
  saveInClipboard?: 0 | 1
  /**
   * Mac only: Whether to show Quick Entry window.
   * 0 = add task without allowing edit, 1 = show Quick Entry window
   * 2Do adds task without edit when not specified.
   */
  useQuickEntry?: 0 | 1
  /**
   * Whether to show edit screen after creating the task.
   * 0 = add task in background, 1 = show edit screen
   * 2Do adds task in background when not specified.
   */
  edit?: 0 | 1
}

/**
 * Add a task to 2Do.
 *
 * @param payload Add task payload.
 * @returns 2Do add task URL.
 * @example
 * add({ task: 'Dinner at 8pm', due: '1' })
 * // => 'twodo://x-callback-url/add?task=Dinner%20at%208pm&due=1'
 * @example
 * add({ task: 'Title', priority: 3 })
 * // => 'twodo://x-callback-url/add?task=Title&priority=3'
 * @example
 * add({ task: 'Monthly subscription', tags: 'bill,payment' })
 * // => 'twodo://x-callback-url/add?task=Monthly%20subscription&tags=bill%2Cpayment'
 * @link https://www.2doapp.com/kb/article/url-schemes.html
 */
export function add(payload: Add = {}) {
  const {
    task,
    type,
    forList,
    forParentName,
    forParentTask,
    note,
    subtasks,
    priority,
    starred,
    tags,
    locations,
    due,
    dueTime,
    start,
    repeat,
    action,
    picture,
    audio,
    ignoreDefaults,
    saveInClipboard,
    useQuickEntry,
    edit,
  } = payload

  const params = qs({
    ...(task !== undefined ? { task } : {}),
    ...(type !== undefined ? { type } : {}),
    ...(forList !== undefined ? { forList } : {}),
    ...(forParentName !== undefined ? { forParentName } : {}),
    ...(forParentTask !== undefined ? { forParentTask } : {}),
    ...(note !== undefined ? { note } : {}),
    ...(subtasks !== undefined ? { subtasks } : {}),
    ...(priority !== undefined ? { priority } : {}),
    ...(starred !== undefined ? { starred } : {}),
    ...(tags !== undefined ? { tags } : {}),
    ...(locations !== undefined ? { locations } : {}),
    ...(due !== undefined ? { due } : {}),
    ...(dueTime !== undefined ? { dueTime } : {}),
    ...(start !== undefined ? { start } : {}),
    ...(repeat !== undefined ? { repeat } : {}),
    ...(action !== undefined ? { action } : {}),
    ...(picture !== undefined ? { picture } : {}),
    ...(audio !== undefined ? { audio } : {}),
    ...(ignoreDefaults !== undefined ? { ignoreDefaults } : {}),
    ...(saveInClipboard !== undefined ? { saveInClipboard } : {}),
    ...(useQuickEntry !== undefined ? { useQuickEntry } : {}),
    ...(edit !== undefined ? { edit } : {}),
  })

  return `twodo://x-callback-url/add${params}`
}
