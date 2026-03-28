import { qs } from '@protocol-launcher/shared'

/**
 * Add new task payload definition.
 */
type AddNewTask = {
  /**
   * Ignore default due date/time settings in app.
   * 0 = apply any default due date / time settings in app
   * 1 = ignore default dates / times
   *
   * @default 0
   */
  ignoreDefaults?: 0 | 1
}

/**
 * Launch 2Do with new task screen.
 *
 * @param payload Add new task payload.
 * @returns 2Do add new task URL.
 * @example
 * addNewTask({})
 * // => 'twodo://x-callback-url/addNewTask'
 * @example
 * addNewTask({ ignoreDefaults: 1 })
 * // => 'twodo://x-callback-url/addNewTask?ignoreDefaults=1'
 * @link https://www.2doapp.com/kb/article/url-schemes.html
 */
export function addNewTask(payload: AddNewTask = {}) {
  const { ignoreDefaults } = payload
  const params = qs({
    ...(ignoreDefaults !== undefined ? { ignoreDefaults } : {}),
  })

  return `twodo://x-callback-url/addNewTask${params}`
}
