import { buchenNavigationUrl } from './shared'

/**
 * Navigate to tags in Buchen.
 *
 * @returns Buchen tags URL.
 * @example
 * goTags()
 * // => 'buchen://go-tags'
 * @link https://www.borovia.co/buchen.support.html
 */
export function goTags() {
  return buchenNavigationUrl('tags')
}
