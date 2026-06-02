import type { HighlightsFilePayload } from './shared'
import { buildHighlightsFileUrl } from './shared'

/**
 * Open a PDF file in Highlights.
 *
 * @param payload Highlights file payload.
 * @returns Highlights open-file URL.
 * @example
 * openFile({ path: '/Users/test.pdf' })
 * // => 'highlights://Users/test.pdf'
 *
 * @link https://highlightsapp.net/changelog/2015/01/03/Version-1.2/
 */
export function openFile(payload: HighlightsFilePayload) {
  const { path } = payload

  return buildHighlightsFileUrl(path)
}
