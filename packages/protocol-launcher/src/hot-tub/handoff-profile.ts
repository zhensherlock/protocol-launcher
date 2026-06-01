import { type HotTubHandoffProfilePayload, hotTubHandoffUrl } from './shared'

/**
 * Create Hot Tub's documented HTTPS handoff URL for a creator profile page.
 *
 * @param payload Profile handoff payload.
 * @returns Hot Tub profile HTTPS handoff URL.
 * @example
 * handoffProfile({ baseUrl: 'https://hottubapp.io', uploader: 'yanks' })
 * // => 'https://hottubapp.io/app?action=profile&uploader=yanks'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function handoffProfile(payload: HotTubHandoffProfilePayload) {
  const { baseUrl, uploader } = payload

  return hotTubHandoffUrl(baseUrl, 'profile', {
    uploader,
  })
}
