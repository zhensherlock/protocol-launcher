/**
 * Save the latest photo to Anybox on iOS.
 *
 * @returns Anybox latest-photo URL.
 * @example
 * latestPhoto()
 * // => 'anybox://latest-photo'
 * @link https://anybox.app/url-schemes
 */
export function latestPhoto() {
  return 'anybox://latest-photo'
}
