import { type HotTubMessagePayload, hotTubUrl } from './shared'

/**
 * Show content in Hot Tub's debug view.
 *
 * @param payload Debug message payload.
 * @returns Hot Tub debug message URL.
 * @example
 * message({ content: 'Configuration loaded: API v2.1, 15 channels active' })
 * // => 'hottub://message?content=Configuration%20loaded%3A%20API%20v2.1%2C%2015%20channels%20active'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function message(payload: HotTubMessagePayload) {
  const { content } = payload

  return hotTubUrl('message', {
    content,
  })
}
