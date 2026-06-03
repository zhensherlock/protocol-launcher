import { cleanShotUrl } from './shared'

/**
 * Restore the most recently closed file from CleanShot history.
 *
 * @returns CleanShot restore-recently-closed URL.
 * @example
 * restoreRecentlyClosed()
 * // => 'cleanshot://restore-recently-closed'
 * @link https://cleanshot.com/docs-api
 */
export function restoreRecentlyClosed() {
  return cleanShotUrl('restore-recently-closed')
}
