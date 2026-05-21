import type { DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * CreateHTML command payload definition.
 */
type CreateHTML = DEVONthinkCommon & {
  /**
   * The HTML content for the HTML document.
   */
  source?: string
}

/**
 * Create a new HTML document in DEVONthink.
 *
 * @param payload CreateHTML command payload.
 * @returns DEVONthink createHTML URL.
 * @example
 * createHTML({ title: 'Page', source: '<h1>Hello</h1>' })
 * // => 'x-devonthink://createHTML?title=Page&source=%3Ch1%3EHello%3C%2Fh1%3E'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function createHTML(payload: CreateHTML = {}) {
  const { source } = payload

  return commandUrl('createHTML', {
    ...commonParams(payload),
    ...(source ? { source } : {}),
  })
}
