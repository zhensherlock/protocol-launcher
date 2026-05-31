import type { PincaseOpenTagPayload } from './shared'
import { pincaseOpenUrl } from './shared'

/**
 * Open a tag view in Pincase.
 *
 * @param payload Pincase open tag payload.
 * @returns Pincase tag URL.
 * @example
 * openTag({ mode: 'public_tag', tag: 'iOS' })
 * // => 'pincaseapp://x-callback-url/open?mode=public_tag&tag=iOS'
 * @link https://pincaseapp.com/api.html
 */
export function openTag(payload: PincaseOpenTagPayload) {
  return pincaseOpenUrl(payload)
}
