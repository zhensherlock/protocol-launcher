import type { GoodTaskView } from './shared'
import { goodTaskUrl } from './shared'

type OpenViewByTitle = {
  /**
   * Full title of list, case insensitive.
   */
  title: string

  /**
   * View mode.
   * - `1`: List
   * - `2`: Day
   * - `3`: Week
   * - `4`: Month
   * - `11`: Board-Date
   * - `12`: Board-Priority
   * - `13`: Board-List
   * - `14`: Board-Tag
   */
  view?: GoodTaskView

  section?: never
  row?: never
}

type OpenViewByPosition = {
  /**
   * Number of stack on list view, separated by Group and Spaces.
   * Use `0` to go to the Lists page on iPhone.
   */
  section: number

  /**
   * Number of row on selected section.
   */
  row?: number

  /**
   * View mode.
   * - `1`: List
   * - `2`: Day
   * - `3`: Week
   * - `4`: Month
   * - `11`: Board-Date
   * - `12`: Board-Priority
   * - `13`: Board-List
   * - `14`: Board-Tag
   */
  view?: GoodTaskView

  title?: never
}

/**
 * OpenView action payload definition.
 */
type OpenView = OpenViewByTitle | OpenViewByPosition

/**
 * Open a specific GoodTask view.
 *
 * @param payload OpenView action payload.
 * @returns GoodTask view URL.
 * @example
 * openView({ title: 'Today', view: 1 })
 * // => 'goodtask3://view?title=Today&view=1'
 * @example
 * openView({ section: 0 })
 * // => 'goodtask3://view?section=0'
 * @link https://goodtaskapp.com/url-scheme/
 */
export function openView(payload: OpenView) {
  const { title, section, row, view } = payload

  return goodTaskUrl('view', {
    ...(title ? { title } : {}),
    ...(section !== undefined ? { section } : {}),
    ...(row !== undefined ? { row } : {}),
    ...(view !== undefined ? { view } : {}),
  })
}
