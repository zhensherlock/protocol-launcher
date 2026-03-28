import { qs } from '@protocol-launcher/shared'

/**
 * Show checklist command payload definition.
 */
type ShowChecklist = {
  /**
   * The name of the checklist to show.
   */
  name: string
}

/**
 * Show a checklist in Appigo Todo.
 *
 * @param payload Show checklist command payload.
 * @returns Appigo Todo show checklist URL.
 * @example
 * showChecklist({ name: 'Grocery List' })
 * // => 'appigotodo://x-callback-url/showChecklist?name=Grocery%20List'
 * @example
 * showChecklist({ name: 'Packing List' })
 * // => 'appigotodo://x-callback-url/showChecklist?name=Packing%20List'
 * @link https://support.appigo.com/support/solutions/articles/179661-third-party-integration-with-todo-ios-apps
 */
export function showChecklist(payload: ShowChecklist) {
  const { name } = payload
  const params = qs({ name })

  return `appigotodo://x-callback-url/showChecklist${params}`
}
