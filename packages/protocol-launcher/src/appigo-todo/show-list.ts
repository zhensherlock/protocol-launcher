import { qs } from '@protocol-launcher/shared'

/**
 * Show list command payload definition.
 */
type ShowList = {
  /**
   * The name of the list to show.
   */
  name: string
}

/**
 * Show a list in Appigo Todo.
 *
 * @param payload Show list command payload.
 * @returns Appigo Todo show list URL.
 * @example
 * showList({ name: 'Home Work' })
 * // => 'appigotodo://x-callback-url/showList?name=Home%20Work'
 * @example
 * showList({ name: 'Shopping' })
 * // => 'appigotodo://x-callback-url/showList?name=Shopping'
 * @link https://support.appigo.com/support/solutions/articles/179661-third-party-integration-with-todo-ios-apps
 */
export function showList(payload: ShowList) {
  const { name } = payload
  const params = qs({ name })

  return `appigotodo://x-callback-url/showList${params}`
}
