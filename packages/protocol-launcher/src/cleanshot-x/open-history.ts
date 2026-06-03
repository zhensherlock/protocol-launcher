import { cleanShotUrl } from './shared'

/**
 * Open CleanShot capture history.
 *
 * @returns CleanShot open-history URL.
 * @example
 * openHistory()
 * // => 'cleanshot://open-history'
 * @link https://cleanshot.com/docs-api
 */
export function openHistory() {
  return cleanShotUrl('open-history')
}
