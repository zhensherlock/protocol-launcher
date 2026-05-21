import type { DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * CreateBookmark command payload definition.
 */
type CreateBookmark = DEVONthinkCommon

/**
 * Create a new bookmark in DEVONthink.
 *
 * @param payload CreateBookmark command payload.
 * @returns DEVONthink createBookmark URL.
 * @example
 * createBookmark({ title: 'DEVONtechnologies', location: 'https://www.devontechnologies.com' })
 * // => 'x-devonthink://createBookmark?title=DEVONtechnologies&location=https%3A%2F%2Fwww.devontechnologies.com'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function createBookmark(payload: CreateBookmark = {}) {
  return commandUrl('createBookmark', commonParams(payload))
}
