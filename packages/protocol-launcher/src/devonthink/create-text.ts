import type { DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * CreateText command payload definition.
 */
type CreateText = DEVONthinkCommon & {
  /**
   * The text content for the plain text document.
   */
  text?: string
}

/**
 * Create a new plain text document in DEVONthink.
 *
 * @param payload CreateText command payload.
 * @returns DEVONthink createText URL.
 * @example
 * createText({ title: 'Plain Note', text: 'Hello World' })
 * // => 'x-devonthink://createText?title=Plain%20Note&text=Hello%20World'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function createText(payload: CreateText = {}) {
  const { text } = payload

  return commandUrl('createText', {
    ...commonParams(payload),
    ...(text ? { text } : {}),
  })
}
