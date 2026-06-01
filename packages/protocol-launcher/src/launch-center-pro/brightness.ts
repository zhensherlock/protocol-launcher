import { type LaunchCenterProXCallback, launchCenterProUrl } from './shared'

/**
 * Open the Launch Center Pro brightness action.
 *
 * @param payload Launch Center Pro x-callback-url payload.
 * @returns Launch Center Pro brightness URL.
 * @example
 * brightness()
 * // => 'launch://brightness'
 * @example
 * brightness({ xSuccess: 'myapp://done' })
 * // => 'launch://x-callback-url/brightness?x-success=myapp%3A%2F%2Fdone'
 * @link https://help.contrast.co/hc/en-us/articles/200611883-x-callback-url-Support
 */
export function brightness(payload: LaunchCenterProXCallback = {}) {
  return launchCenterProUrl('brightness', payload)
}
