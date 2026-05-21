import type { DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * Clip command payload definition.
 */
type Clip = DEVONthinkCommon

/**
 * Open the Clip to DEVONthink panel.
 *
 * @param payload Clip command payload.
 * @returns DEVONthink clip URL.
 * @example
 * clip()
 * // => 'x-devonthink://clip'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function clip(payload: Clip = {}) {
  return commandUrl('clip', commonParams(payload))
}
