import type { DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * CreateRTF command payload definition.
 */
type CreateRTF = DEVONthinkCommon & {
  /**
   * The selected text.
   */
  selection?: string
}

/**
 * Create a rich text document in DEVONthink.
 *
 * @param payload CreateRTF command payload.
 * @returns DEVONthink createRTF URL.
 * @example
 * createRTF({ title: 'New bookmark', location: 'http://www.devontechnologies.com', noselector: 1 })
 * // => 'x-devonthink://createRTF?title=New%20bookmark&location=http%3A%2F%2Fwww.devontechnologies.com&noselector=1'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function createRTF(payload: CreateRTF = {}) {
  const { selection } = payload

  return commandUrl('createRTF', {
    ...commonParams(payload),
    ...(selection ? { selection } : {}),
  })
}
