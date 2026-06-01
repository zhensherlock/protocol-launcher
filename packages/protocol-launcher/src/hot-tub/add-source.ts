import { type HotTubAddSourcePayload, hotTubUrl } from './shared'

/**
 * Direct users to add a video source to Hot Tub.
 *
 * @param payload Add source payload.
 * @returns Hot Tub add source URL.
 * @example
 * addSource({ url: 'https://api.myvideosite.com' })
 * // => 'hottub://source?url=https%3A%2F%2Fapi.myvideosite.com'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function addSource(payload: HotTubAddSourcePayload) {
  const { url, privacy } = payload

  return hotTubUrl('source', {
    url,
    privacy,
  })
}
