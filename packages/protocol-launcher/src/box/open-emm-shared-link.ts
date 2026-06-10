import { type BoxSharedLinkPayload, boxUrl } from './shared'

export type OpenEmmSharedLinkPayload = BoxSharedLinkPayload

/**
 * Open a shared link in Box for EMM.
 *
 * @param payload Box for EMM shared link payload.
 * @returns Box for EMM shared-link deep link.
 * @example
 * openEmmSharedLink({ url: 'https://app.box.com/s/shared-link-id' })
 * // => 'boxemm://sharedlink?url=https%3A%2F%2Fapp.box.com%2Fs%2Fshared-link-id'
 * @link https://developer.box.com/guides/mobile/mobile-deep-linking/
 */
export function openEmmSharedLink(payload: OpenEmmSharedLinkPayload) {
  return boxUrl('boxemm', 'sharedlink', { url: payload.url })
}
