import { type FindAnyFileFindInLocationPayload, findAnyFileFindUrl } from './shared'

/**
 * Find Any File find-in-location payload definition.
 */
export type FindInLocation = FindAnyFileFindInLocationPayload

/**
 * Open Find Any File and search in the specified location.
 *
 * @param payload Find Any File location search payload.
 * @returns Find Any File find URL.
 * @example
 * findInLocation({
 *   loc: '~',
 *   inp: 'invoice',
 * })
 * // => 'fafapp://find?inp=invoice&loc=~'
 * @link https://findanyfile.app/url-scheme.html
 */
export function findInLocation(payload: FindInLocation) {
  return findAnyFileFindUrl(payload)
}
