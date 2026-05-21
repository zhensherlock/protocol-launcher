import { qs } from '@protocol-launcher/shared'

/**
 * Add action payload definition.
 */
type Add = {
  /**
   * The action name.
   */
  name?: string

  /**
   * Optional action note.
   */
  note?: string

  /**
   * Base64-encoded attachment data.
   */
  attachment?: string

  /**
   * Attachment file name. Repeat values to match multiple attachments.
   */
  attachmentName?: string | string[]

  /**
   * Whether children mark the project complete.
   */
  autocomplete?: boolean

  /**
   * The completion date and time.
   */
  completed?: string

  /**
   * Tag/context name to assign, using the OmniFocus URL scheme parameter name.
   */
  context?: string

  /**
   * Defer date and time, such as "jun 25 8am".
   */
  defer?: string

  /**
   * Due date and time, such as "jun 25 8am".
   */
  due?: string

  /**
   * Time estimate, such as "30m".
   */
  estimate?: string

  /**
   * Whether the action should be flagged.
   */
  flag?: boolean

  /**
   * Whether the action should have parallel children.
   */
  parallel?: boolean

  /**
   * Project name to assign.
   */
  project?: string

  /**
   * Whether OmniFocus should reveal the new item.
   */
  revealNewItem?: boolean

  /**
   * Repeat method.
   */
  repeatMethod?: 'fixed' | 'start-after-completion' | 'due-after-completion'

  /**
   * Repeat rule string.
   */
  repeatRule?: string

  /**
   * Whether OmniFocus should save without additional confirmation in x-callback-url flows.
   */
  autosave?: boolean

  /**
   * x-callback-url success URL.
   */
  xSuccess?: string
}

/**
 * Add a new action to OmniFocus.
 *
 * @param payload Add action payload.
 * @returns OmniFocus add URL.
 * @example
 * add({ name: 'Pick up milk', note: 'You gotta' })
 * // => 'omnifocus:///add?name=Pick%20up%20milk&note=You%20gotta'
 * @example
 * add({ name: 'Email team', project: 'Launch', context: 'Mac', flag: true })
 * // => 'omnifocus:///add?name=Email%20team&context=Mac&flag=true&project=Launch'
 * @example
 * add({ name: 'My shiny new task', autosave: true, xSuccess: 'source-app:///' })
 * // => 'omnifocus://x-callback-url/add?name=My%20shiny%20new%20task&autosave=true&x-success=source-app%3A%2F%2F%2F'
 * @link https://inside.omnifocus.com/url-schemes
 */
export function add(payload: Add = {}) {
  const {
    name,
    note,
    attachment,
    attachmentName,
    autocomplete,
    completed,
    context,
    defer,
    due,
    estimate,
    flag,
    parallel,
    project,
    revealNewItem,
    repeatMethod,
    repeatRule,
    autosave,
    xSuccess,
  } = payload

  const params = qs({
    ...(name ? { name } : {}),
    ...(note ? { note } : {}),
    ...(attachment ? { attachment } : {}),
    ...(attachmentName ? { 'attachment-name': attachmentName } : {}),
    ...(autocomplete !== undefined ? { autocomplete } : {}),
    ...(completed ? { completed } : {}),
    ...(context ? { context } : {}),
    ...(defer ? { defer } : {}),
    ...(due ? { due } : {}),
    ...(estimate ? { estimate } : {}),
    ...(flag !== undefined ? { flag } : {}),
    ...(parallel !== undefined ? { parallel } : {}),
    ...(project ? { project } : {}),
    ...(revealNewItem !== undefined ? { 'reveal-new-item': revealNewItem } : {}),
    ...(repeatMethod ? { 'repeat-method': repeatMethod } : {}),
    ...(repeatRule ? { 'repeat-rule': repeatRule } : {}),
    ...(autosave !== undefined ? { autosave } : {}),
    ...(xSuccess ? { 'x-success': xSuccess } : {}),
  })

  const base = xSuccess || autosave !== undefined ? 'omnifocus://x-callback-url/add' : 'omnifocus:///add'

  return `${base}${params}`
}
