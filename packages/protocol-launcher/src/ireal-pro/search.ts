import { iRealProSearchUrl } from './shared'
import type { IRealProSearchPayload } from './types'

/**
 * Launch iReal Pro's song search window for a song title.
 *
 * @param payload iReal Pro search payload.
 * @returns iReal Pro search URL.
 * @example
 * search({ title: 'Song Title' })
 * // => 'irealb://search?Song%20Title'
 * @link https://www.irealpro.com/developer-docs
 */
export function search(payload: IRealProSearchPayload) {
  return iRealProSearchUrl(payload)
}
