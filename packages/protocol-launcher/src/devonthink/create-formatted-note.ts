import type { DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * CreateFormattedNote command payload definition.
 */
type CreateFormattedNote = DEVONthinkCommon & {
  /**
   * The HTML content for the formatted note.
   */
  source?: string
}

/**
 * Create a formatted note in DEVONthink.
 *
 * @param payload CreateFormattedNote command payload.
 * @returns DEVONthink createFormattedNote URL.
 * @example
 * createFormattedNote({ title: 'New Note', source: '<p>Hello</p>' })
 * // => 'x-devonthink://createFormattedNote?title=New%20Note&source=%3Cp%3EHello%3C%2Fp%3E'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function createFormattedNote(payload: CreateFormattedNote = {}) {
  const { source } = payload

  return commandUrl('createFormattedNote', {
    ...commonParams(payload),
    ...(source ? { source } : {}),
  })
}
