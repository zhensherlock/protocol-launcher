import { type HotTubOpenProfilePayload, hotTubUrl } from './shared'

/**
 * Open a Hot Tub uploader profile.
 *
 * @param payload Uploader profile payload.
 * @returns Hot Tub uploader profile URL.
 * @example
 * openProfile({ uploader: 'yanks' })
 * // => 'hottub://profile?uploader=yanks'
 * @link https://docs.hottubapp.io/developers/url-schemes/
 */
export function openProfile(payload: HotTubOpenProfilePayload) {
  const { uploader, creator } = payload

  return hotTubUrl('profile', {
    uploader,
    creator,
  })
}
