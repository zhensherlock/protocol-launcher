import type { CardhopAddImmediately } from './shared'
import { cardhopUrl } from './shared'

/**
 * Parse endpoint payload definition.
 */
type Parse = {
  /**
   * Text to parse.
   *
   * @example 'call Mike'
   */
  s: string

  /**
   * Name or identifier of the list to filter results.
   */
  list?: string

  /**
   * Add a parsed new contact immediately. Cardhop documents "Y", "y", "T", "t", or a string digit "1"-"9".
   */
  add?: CardhopAddImmediately
}

/**
 * Open Cardhop's parser to search, add, edit, and interact with contacts.
 *
 * @param payload Parse endpoint payload.
 * @returns Cardhop parse URL.
 * @example
 * parse({ s: 'call Mike' })
 * // => 'x-cardhop://parse?s=call%20Mike'
 * @example
 * parse({ s: 'Sarah Jones', list: 'Friends', add: '1' })
 * // => 'x-cardhop://parse?s=Sarah%20Jones&list=Friends&add=1'
 * @link https://flexibits.com/cardhop-ios/help/integration-with-other-apps
 */
export function parse(payload: Parse) {
  const { s, list, add } = payload

  return cardhopUrl('parse', { s, list, add })
}
