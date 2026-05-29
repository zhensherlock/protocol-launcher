import type { SearchPayload } from './shared'
import { timepageUrl } from './shared'

/**
 * Open Timepage and show search results for the specified search terms.
 *
 * @param payload Search payload.
 * @returns Timepage search URL.
 * @example
 * search({ query: 'project review' })
 * // => 'timepage://search?query=project%20review'
 *
 * @link https://bonobolabs.com/support/timepage/introduction/timepages-url-schemes/
 */
export function search(payload: SearchPayload) {
  const { query } = payload

  return timepageUrl('search', { query })
}
