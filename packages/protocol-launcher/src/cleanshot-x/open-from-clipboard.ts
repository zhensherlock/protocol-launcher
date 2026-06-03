import { cleanShotUrl } from './shared'

/**
 * Open the image from clipboard in CleanShot Annotate.
 *
 * @returns CleanShot open-from-clipboard URL.
 * @example
 * openFromClipboard()
 * // => 'cleanshot://open-from-clipboard'
 * @link https://cleanshot.com/docs-api
 */
export function openFromClipboard() {
  return cleanShotUrl('open-from-clipboard')
}
