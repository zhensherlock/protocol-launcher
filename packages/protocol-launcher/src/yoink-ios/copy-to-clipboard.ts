import { xCallbackParams, type YoinkIosXCallbackPayload, yoinkIosActionUrl } from './shared'

/**
 * Copy to clipboard action payload definition.
 */
export type CopyToClipboardPayload = YoinkIosXCallbackPayload & {
  /**
   * Index of the item in Yoink, where 0 is the topmost item.
   */
  index: number
}

/**
 * Copy the specified Yoink item to the clipboard.
 *
 * @param payload Copy to clipboard action payload.
 * @returns Yoink for iOS copytoclipboard URL.
 * @example
 * copyToClipboard({ index: 0 })
 * // => 'yoinkios://copytoclipboard?index=0'
 * @link https://eternalstorms.at/yoink/ios/tips/
 */
export function copyToClipboard(payload: CopyToClipboardPayload) {
  const { index } = payload

  return yoinkIosActionUrl('copytoclipboard', {
    index,
    ...xCallbackParams(payload),
  })
}
