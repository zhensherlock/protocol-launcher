import { type LaunchCenterProXCallback, launchCenterProUrl } from './shared'

/**
 * Open the Launch Center Pro Dropbox action.
 *
 * @param payload Launch Center Pro x-callback-url payload.
 * @returns Launch Center Pro Dropbox URL.
 * @example
 * dropbox()
 * // => 'launch://dropbox'
 * @link https://help.contrast.co/hc/en-us/articles/200611883-x-callback-url-Support
 */
export function dropbox(payload: LaunchCenterProXCallback = {}) {
  return launchCenterProUrl('dropbox', payload)
}
