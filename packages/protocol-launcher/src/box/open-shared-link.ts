import { type BoxSharedLinkPayload, boxUrl } from './shared'

export type OpenSharedLinkPayload = BoxSharedLinkPayload

/**
 * Open a shared link in the Box mobile app.
 *
 * @param payload Box shared link payload.
 * @returns Box shared-link deep link.
 * @example
 * openSharedLink({ url: 'https://app.box.com/s/shared-link-id' })
 * // => 'boxapp://sharedlink?url=https%3A%2F%2Fapp.box.com%2Fs%2Fshared-link-id'
 * @link https://developer.box.com/guides/mobile/mobile-deep-linking/
 */
export function openSharedLink(payload: OpenSharedLinkPayload) {
  return boxUrl('boxapp', 'sharedlink', { url: payload.url })
}
