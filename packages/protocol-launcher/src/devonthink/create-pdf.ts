import type { DEVONthinkBoolean, DEVONthinkCommon } from './shared'
import { commandUrl, commonParams } from './shared'

/**
 * CreatePDF command payload definition.
 */
type CreatePDF = DEVONthinkCommon & {
  /**
   * The page width.
   */
  width?: number

  /**
   * Paginate the created PDF.
   */
  paginated?: DEVONthinkBoolean
}

/**
 * Create a PDF in DEVONthink.
 *
 * @param payload CreatePDF command payload.
 * @returns DEVONthink createPDF URL.
 * @example
 * createPDF({ location: 'https://www.devontechnologies.com', width: 800, paginated: 1 })
 * // => 'x-devonthink://createPDF?location=https%3A%2F%2Fwww.devontechnologies.com&width=800&paginated=1'
 * @link https://download.devontechnologies.com/download/devonthink/3.8.2/DEVONthink.help/Contents/Resources/pgs/automation-urlcommands.html
 */
export function createPDF(payload: CreatePDF = {}) {
  const { width, paginated } = payload

  return commandUrl('createPDF', {
    ...commonParams(payload),
    ...(width !== undefined ? { width } : {}),
    ...(paginated !== undefined ? { paginated } : {}),
  })
}
