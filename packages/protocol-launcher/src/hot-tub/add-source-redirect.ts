import type { HotTubAddSourceRedirectPayload } from './shared'

/**
 * Create Hot Tub's documented web redirect URL for adding a source.
 *
 * @param payload Add source redirect payload.
 * @returns Hot Tub add source web redirect URL.
 * @example
 * addSourceRedirect({ domain: 'api.myvideosite.com' })
 * // => 'https://hottubapp.io/add/api.myvideosite.com'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function addSourceRedirect(payload: HotTubAddSourceRedirectPayload) {
  const { domain } = payload

  return `https://hottubapp.io/add/${domain}`
}
