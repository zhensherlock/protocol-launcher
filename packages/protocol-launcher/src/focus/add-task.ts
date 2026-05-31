import { type FocusXCallback, focusCallbackParams, focusUrl } from './shared'

type AddTaskBase = FocusXCallback & {
  /**
   * The note of the new task.
   */
  note?: string

  /**
   * Link to an item from another app.
   */
  sourceURL?: string

  /**
   * Estimated number of sessions needed to complete the task.
   */
  sessionEstimate?: number

  /**
   * Estimated number of minutes needed to complete the task. Takes precedence over sessionEstimate.
   */
  minutesEstimate?: number

  /**
   * Due date. Official values include today, tomorrow, yyyy-mm-dd dates, and English natural-language dates.
   */
  due?: 'today' | 'tomorrow' | (string & {})
}

/**
 * Add task command payload definition. Focus requires at least a title or a note.
 */
type AddTask = AddTaskBase & ({ title: string; note?: string } | { title?: string; note: string })

/**
 * Add a new task in Focus.
 *
 * @param payload Add task command payload.
 * @returns Focus add task URL.
 * @example
 * addTask({ title: 'Read chapter 3' })
 * // => 'focusapp://add?title=Read%20chapter%203'
 * @example
 * addTask({ title: 'Prepare Presentation', note: 'Referecene mail notes', sessionEstimate: 8, due: 'monday' })
 * // => 'focusapp://add?title=Prepare%20Presentation&note=Referecene%20mail%20notes&sessionEstimate=8&due=monday'
 * @example
 * addTask({ title: 'Study documentation', note: 'make notes', minutesEstimate: 120, due: 'tomorrow' })
 * // => 'focusapp://add?title=Study%20documentation&note=make%20notes&minutesEstimate=120&due=tomorrow'
 * @link https://meaningful-things.com/tutorial/2023/5/11/focus-url-scheme
 */
export function addTask(payload: AddTask) {
  const { title, note, sourceURL, sessionEstimate, minutesEstimate, due } = payload
  const params = {
    ...(title ? { title } : {}),
    ...(note ? { note } : {}),
    ...(sourceURL ? { sourceURL } : {}),
    ...(minutesEstimate !== undefined ? { minutesEstimate } : sessionEstimate !== undefined ? { sessionEstimate } : {}),
    ...(due ? { due } : {}),
    ...focusCallbackParams(payload),
  }

  return focusUrl('add', params)
}
