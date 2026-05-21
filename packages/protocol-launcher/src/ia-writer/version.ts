import type { IAWriterXCallback } from './shared'
import { iaWriterUrl } from './shared'

/**
 * Returns iA Writer app version and URL scheme version.
 *
 * iA Writer returns `scheme-version` and `app-version` parameters on `x-success`.
 *
 * @param payload Version command payload.
 * @returns iA Writer version URL.
 * @example
 * version()
 * // => 'ia-writer://version'
 * @example
 * version({ xSuccess: 'myapp://callback' })
 * // => 'ia-writer://x-callback-url/version?x-success=myapp%3A%2F%2Fcallback'
 * @link https://ia.net/writer/support/help/url-commands#version
 */
export function version(payload: IAWriterXCallback = {}) {
  const { xSuccess } = payload

  return iaWriterUrl('version', {}, xSuccess)
}
