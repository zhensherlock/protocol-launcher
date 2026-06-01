import { qs } from '@protocol-launcher/shared'
import { type LaunchCenterProPhotoAttachment } from './shared'

/**
 * Share sheet payload definition.
 */
type ShareSheet = {
  /**
   * Photo attachment source.
   */
  attach?: LaunchCenterProPhotoAttachment

  /**
   * Text to share.
   */
  text?: string

  /**
   * URL to share.
   */
  url?: string
}

/**
 * Open the iOS share sheet from Launch Center Pro.
 *
 * @param payload Share sheet payload.
 * @returns Launch Center Pro share sheet URL.
 * @example
 * shareSheet({ attach: 'photo' })
 * // => 'launch://sharesheet?attach=photo'
 * @example
 * shareSheet({ text: '[prompt]' })
 * // => 'launch://sharesheet?text=%5Bprompt%5D'
 * @link https://help.contrast.co/hc/en-us/articles/201050507-2-1-Release-Notes
 */
export function shareSheet(payload: ShareSheet = {}) {
  const { attach, text, url } = payload

  return `launch://sharesheet${qs({
    ...(attach !== undefined ? { attach } : {}),
    ...(text !== undefined ? { text } : {}),
    ...(url !== undefined ? { url } : {}),
  })}`
}
