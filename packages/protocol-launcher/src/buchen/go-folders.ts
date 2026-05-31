import { buchenNavigationUrl } from './shared'

/**
 * Navigate to folders in Buchen.
 *
 * @returns Buchen folders URL.
 * @example
 * goFolders()
 * // => 'buchen://go-folders'
 * @link https://www.borovia.co/buchen.support.html
 */
export function goFolders() {
  return buchenNavigationUrl('folders')
}
