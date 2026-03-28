import { qs } from '@protocol-launcher/shared'

/**
 * Show task command payload definition.
 */
type ShowTask = {
  /**
   * The name of the task to show.
   */
  name: string
}

/**
 * Show a task in Appigo Todo.
 *
 * @param payload Show task command payload.
 * @returns Appigo Todo show task URL.
 * @example
 * showTask({ name: 'Buy milk' })
 * // => 'appigotodo://x-callback-url/showTask?name=Buy%20milk'
 * @example
 * showTask({ name: 'Call doctor' })
 * // => 'appigotodo://x-callback-url/showTask?name=Call%20doctor'
 * @link https://support.appigo.com/support/solutions/articles/179661-third-party-integration-with-todo-ios-apps
 */
export function showTask(payload: ShowTask) {
  const { name } = payload
  const params = qs({ name })

  return `appigotodo://x-callback-url/showTask${params}`
}
