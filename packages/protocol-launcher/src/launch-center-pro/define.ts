import { type LaunchCenterProXCallback, launchCenterProUrl } from './shared'

/**
 * Open the Launch Center Pro define action.
 *
 * @param payload Launch Center Pro x-callback-url payload.
 * @returns Launch Center Pro define URL.
 * @example
 * define()
 * // => 'launch://define'
 * @example
 * define({ xSuccess: 'myapp://done' })
 * // => 'launch://x-callback-url/define?x-success=myapp%3A%2F%2Fdone'
 * @link https://help.contrast.co/hc/en-us/articles/200611883-x-callback-url-Support
 */
export function define(payload: LaunchCenterProXCallback = {}) {
  return launchCenterProUrl('define', payload)
}
