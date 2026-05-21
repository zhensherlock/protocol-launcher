import type { GoodTaskPriority, GoodTaskSwitch } from './shared'
import { goodTaskUrl } from './shared'

/**
 * Add action payload definition.
 */
type Add = {
  /**
   * Title of the task.
   */
  title: string

  /**
   * `0` for off, `1` for on. If turned on, line breaks on title create multiple tasks.
   */
  multiple?: GoodTaskSwitch

  /**
   * List name. GoodTask automatically matches shortened names.
   */
  list?: string

  /**
   * Due date.
   *
   * Documented formats include `HH:mm`, `MM-dd`, `yyyy-MM-dd`, `MM-dd HH:mm`, and `yyyy-MM-dd HH:mm`.
   */
  due?: string

  /**
   * Start date.
   *
   * Documented formats include `HH:mm`, `MM-dd`, `yyyy-MM-dd`, `MM-dd HH:mm`, and `yyyy-MM-dd HH:mm`.
   */
  start?: string

  /**
   * Minutes after current time. GoodTask ignores this when `due` is set.
   */
  dueAfter?: number

  /**
   * `0` for off, `1` for on. Only works when `due` or `dueAfter` is set.
   */
  alarm?: GoodTaskSwitch

  /**
   * Location Favorites name.
   */
  location?: string

  /**
   * Priority: `0`, `1` (!), `2` (!!), or `3` (!!!).
   */
  priority?: GoodTaskPriority

  /**
   * URL of the task.
   */
  url?: string

  /**
   * Notes of the task.
   */
  notes?: string

  /**
   * Subtasks separated with line breaks.
   */
  subtasks?: string

  /**
   * x-callback-url success URL. When provided, the add URL uses the x-callback-url form.
   */
  xSuccess?: string
}

/**
 * Add a GoodTask task.
 *
 * @param payload Add action payload.
 * @returns GoodTask add URL.
 * @example
 * add({ title: 'Title', list: 'to' })
 * // => 'goodtask3://add?title=Title&list=to'
 * @example
 * add({ title: 'Title', dueAfter: 10 })
 * // => 'goodtask3://add?title=Title&dueAfter=10'
 * @example
 * add({ title: 'one\ntwo\nthree', multiple: 1 })
 * // => 'goodtask3://add?title=one%0Atwo%0Athree&multiple=1'
 * @link https://goodtaskapp.com/url-scheme/
 */
export function add(payload: Add) {
  const { title, multiple, list, due, start, dueAfter, alarm, location, priority, url, notes, subtasks, xSuccess } =
    payload

  return goodTaskUrl(
    'add',
    {
      title,
      ...(multiple !== undefined ? { multiple } : {}),
      ...(list ? { list } : {}),
      ...(due ? { due } : {}),
      ...(start ? { start } : {}),
      ...(dueAfter !== undefined ? { dueAfter } : {}),
      ...(alarm !== undefined ? { alarm } : {}),
      ...(location ? { location } : {}),
      ...(priority !== undefined ? { priority } : {}),
      ...(url ? { url } : {}),
      ...(notes ? { notes } : {}),
      ...(subtasks ? { subtasks } : {}),
      ...(xSuccess ? { 'x-success': xSuccess } : {}),
    },
    Boolean(xSuccess),
  )
}
