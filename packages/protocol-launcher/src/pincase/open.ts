import type { PincaseOpenPayload } from './shared'
import { pincaseOpenUrl } from './shared'

/**
 * Launch Pincase with an optional official open mode.
 *
 * @param payload Pincase open payload.
 * @returns Pincase open URL.
 * @example
 * open()
 * // => 'pincaseapp://x-callback-url/open'
 * @example
 * open({ mode: 'public_tag', tag: 'iOS' })
 * // => 'pincaseapp://x-callback-url/open?mode=public_tag&tag=iOS'
 * @link https://pincaseapp.com/api.html
 */
export function open(payload: PincaseOpenPayload = {}) {
  return pincaseOpenUrl(payload)
}
