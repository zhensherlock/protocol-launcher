import type { DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * CreateWebArchive command payload definition.
 */
type CreateWebArchive = DEVONthinkCommon

/**
 * Create a web archive in DEVONthink.
 *
 * @param payload CreateWebArchive command payload.
 * @returns DEVONthink createWebArchive URL.
 * @example
 * createWebArchive({ location: 'https://www.devontechnologies.com', title: 'DEVONtechnologies' })
 * // => 'x-devonthink://createWebArchive?title=DEVONtechnologies&location=https%3A%2F%2Fwww.devontechnologies.com'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function createWebArchive(payload: CreateWebArchive = {}) {
  return commandUrl('createWebArchive', commonParams(payload))
}
