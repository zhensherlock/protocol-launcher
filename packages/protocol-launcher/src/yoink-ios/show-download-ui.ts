import { yoinkIosActionUrl } from './shared'

/**
 * Show Yoink's download UI.
 *
 * Yoink's documentation notes this action does not call back to the calling app.
 *
 * @returns Yoink for iOS showdownloadui URL.
 * @example
 * showDownloadUi()
 * // => 'yoinkios://showdownloadui'
 * @link https://eternalstorms.at/yoink/ios/tips/
 */
export function showDownloadUi() {
  return yoinkIosActionUrl('showdownloadui')
}
