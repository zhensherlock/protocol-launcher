import type { DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * CreateMarkdown command payload definition.
 */
type CreateMarkdown = DEVONthinkCommon & {
  /**
   * The text content for the Markdown document.
   */
  text?: string
}

/**
 * Create a Markdown document in DEVONthink.
 *
 * @param payload CreateMarkdown command payload.
 * @returns DEVONthink createMarkdown URL.
 * @example
 * createMarkdown({ title: 'Readme', text: '# Hello' })
 * // => 'x-devonthink://createMarkdown?title=Readme&text=%23%20Hello'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function createMarkdown(payload: CreateMarkdown = {}) {
  const { text } = payload

  return commandUrl('createMarkdown', {
    ...commonParams(payload),
    ...(text ? { text } : {}),
  })
}
