import { type LaunchCenterProPhotoAttachment, type LaunchCenterProXCallback, launchCenterProUrl } from './shared'

/**
 * Clipboard payload definition.
 */
type Clipboard = LaunchCenterProXCallback & {
  /**
   * Text to add to the clipboard.
   */
  text?: string

  /**
   * Photo attachment source to add to the clipboard.
   */
  attach?: LaunchCenterProPhotoAttachment
}

/**
 * Add text or a photo to the Launch Center Pro clipboard action.
 *
 * @param payload Clipboard payload.
 * @returns Launch Center Pro clipboard URL.
 * @example
 * clipboard({ text: 'mytext' })
 * // => 'launch://clipboard?text=mytext'
 * @example
 * clipboard({ attach: 'photo:last' })
 * // => 'launch://clipboard?attach=photo%3Alast'
 * @link https://help.contrast.co/hc/en-us/articles/201050507-2-1-Release-Notes
 */
export function clipboard(payload: Clipboard = {}) {
  const { text, attach } = payload

  return launchCenterProUrl('clipboard', payload, {
    ...(text !== undefined ? { text } : {}),
    ...(attach !== undefined ? { attach } : {}),
  })
}
