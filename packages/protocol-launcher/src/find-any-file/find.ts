import { type FindAnyFileFindPayload, findAnyFileFindUrl } from './shared'

/**
 * Find Any File find payload definition.
 */
export type Find = FindAnyFileFindPayload

/**
 * Open Find Any File's Find window and optionally start a search.
 *
 * @param payload Find Any File find payload.
 * @returns Find Any File find URL.
 * @example
 * find({ inp: 'invoice' })
 * // => 'fafapp://find?inp=invoice'
 * @link https://findanyfile.app/url-scheme.html
 */
export function find(payload: Find = {}) {
  return findAnyFileFindUrl(payload)
}
