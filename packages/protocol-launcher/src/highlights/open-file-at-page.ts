import type { HighlightsFilePagePayload } from './shared'
import { buildHighlightsFileUrl } from './shared'

/**
 * Open a PDF file in Highlights and scroll to a specific page.
 *
 * @param payload Highlights file page payload.
 * @returns Highlights open-file page URL.
 * @example
 * openFileAtPage({ path: '/Users/test.pdf', page: 3 })
 * // => 'highlights://Users/test.pdf#page=3'
 *
 * @link https://highlightsapp.net/changelog/2015/01/03/Version-1.2/
 */
export function openFileAtPage(payload: HighlightsFilePagePayload) {
  const { path, page } = payload

  return `${buildHighlightsFileUrl(path)}#page=${page}`
}
