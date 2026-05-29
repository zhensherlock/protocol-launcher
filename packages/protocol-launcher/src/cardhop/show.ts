import type { CardhopContactAction, CardhopView } from './shared'
import { cardhopUrl } from './shared'

type ShowContactById = {
  /**
   * Identifier of a contact to show.
   */
  id: string

  contact?: never
  view?: never

  /**
   * Identifier of an action to perform, or base64 encoded serialized action data.
   */
  action?: CardhopContactAction

  /**
   * Identifier or name of the list the contact belongs to.
   */
  list?: string
}

type ShowContactByName = {
  id?: never

  /**
   * Name or identifier of the contact to show. Cardhop documents "me" for the user's card.
   */
  contact: string

  view?: never

  /**
   * Identifier of an action to perform, or base64 encoded serialized action data.
   */
  action?: CardhopContactAction

  /**
   * Identifier or name of the list the contact belongs to.
   */
  list?: string
}

type ShowView = {
  id?: never
  contact?: never

  /**
   * View to show or select in Cardhop.
   */
  view: CardhopView

  action?: never

  /**
   * Name or identifier of the list to select. Cardhop documents this for contacts and birthdays views.
   */
  list?: string
}

/**
 * Show endpoint payload definition.
 */
type Show = ShowContactById | ShowContactByName | ShowView

/**
 * Open Cardhop and show a specific contact or a specific view.
 *
 * @param payload Show endpoint payload.
 * @returns Cardhop show URL.
 * @example
 * show({ contact: 'Mike Ross' })
 * // => 'x-cardhop://show?contact=Mike%20Ross'
 * @example
 * show({ view: 'contacts', list: 'Friends' })
 * // => 'x-cardhop://show?view=contacts&list=Friends'
 * @link https://flexibits.com/cardhop-ios/help/integration-with-other-apps
 */
export function show(payload: Show) {
  const { id, contact, view, action, list } = payload

  return cardhopUrl('show', { id, contact, view, action, list })
}
