import { type TwoDoCallbacks, twoDoXCallbackUrl } from './shared'

/**
 * Add new task payload definition.
 */
type AddNewTask = TwoDoCallbacks & {
  /**
   * Ignore default due date/time settings in app.
   * 0 = apply any default due date / time settings in app
   * 1 = ignore default dates / times
   * 2Do applies defaults when not specified.
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
 * // => 'twodo://x-callback-url/addNewTask?ignoredefaults=1'
 * @link https://www.2doapp.com/docs/macos/url-schemes/
 */
export function addNewTask(payload: AddNewTask = {}) {
  const { ignoreDefaults } = payload
  const params = {
    ...(ignoreDefaults !== undefined ? { ignoreDefaults } : {}),
  }

  return twoDoXCallbackUrl('addNewTask', params, payload)
}
