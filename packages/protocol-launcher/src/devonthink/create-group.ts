import type { DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * CreateGroup command payload definition.
 */
type CreateGroup = Pick<DEVONthinkCommon, 'title' | 'comment' | 'tags' | 'destination' | 'hide' | 'noselector'>

/**
 * Create a group in DEVONthink.
 *
 * @param payload CreateGroup command payload.
 * @returns DEVONthink createGroup URL.
 * @example
 * createGroup({ title: 'Inbox', destination: 'F8E2A5A6-0000-0000-0000-000000000000' })
 * // => 'x-devonthink://createGroup?title=Inbox&destination=F8E2A5A6-0000-0000-0000-000000000000'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function createGroup(payload: CreateGroup = {}) {
  return commandUrl('createGroup', commonParams(payload))
}
