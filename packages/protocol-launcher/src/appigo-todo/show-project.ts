import { qs } from '@protocol-launcher/shared'

/**
 * Show project command payload definition.
 */
type ShowProject = {
  /**
   * The name of the project to show.
   */
  name: string
}

/**
 * Show a project in Appigo Todo.
 *
 * @param payload Show project command payload.
 * @returns Appigo Todo show project URL.
 * @example
 * showProject({ name: 'Home Renovation' })
 * // => 'appigotodo://x-callback-url/showProject?name=Home%20Renovation'
 * @example
 * showProject({ name: 'Vacation Planning' })
 * // => 'appigotodo://x-callback-url/showProject?name=Vacation%20Planning'
 * @link https://support.appigo.com/support/solutions/articles/179661-third-party-integration-with-todo-ios-apps
 */
export function showProject(payload: ShowProject) {
  const { name } = payload
  const params = qs({ name })

  return `appigotodo://x-callback-url/showProject${params}`
}
