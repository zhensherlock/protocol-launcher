import type { DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * Note command payload definition.
 */
type Note = DEVONthinkCommon

/**
 * Open the Take Note panel.
 *
 * @param payload Note command payload.
 * @returns DEVONthink note URL.
 * @example
 * note()
 * // => 'x-devonthink://note'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function note(payload: Note = {}) {
  return commandUrl('note', commonParams(payload))
}
