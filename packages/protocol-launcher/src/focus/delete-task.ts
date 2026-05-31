import { type FocusXCallback, focusCallbackParams, focusUrl } from './shared'

/**
 * Delete task command payload definition.
 */
type DeleteTask = FocusXCallback & {
  /**
   * The id of the task.
   */
  id?: string

  /**
   * Ids of the task, separated by "?".
   */
  ids?: string
}

/**
 * Delete one or more tasks in Focus.
 *
 * @param payload Delete task command payload.
 * @returns Focus delete task URL.
 * @example
 * deleteTask({ id: 'B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6' })
 * // => 'focusapp://delete?id=B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6'
 * @example
 * deleteTask({ ids: 'B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6?U36SAM-3CD3-1BC4-B481-2CD590D2EDD2' })
 * // => 'focusapp://delete?ids=B1127BC6-3CC3-4AC4-B561-3CD493D2EDD6?U36SAM-3CD3-1BC4-B481-2CD590D2EDD2'
 * @link https://meaningful-things.com/tutorial/2023/5/11/focus-url-scheme
 */
export function deleteTask(payload: DeleteTask) {
  const { id, ids } = payload
  const params = {
    ...(id ? { id } : {}),
    ...(ids ? { ids } : {}),
    ...focusCallbackParams(payload),
  }

  return focusUrl('delete', params, ['ids'])
}
