import { xCallbackParams, type YoinkIosBinaryFlag, type YoinkIosXCallbackPayload, yoinkIosActionUrl } from './shared'

/**
 * Paste from clipboard action payload definition.
 */
export type PasteFromClipboardPayload = YoinkIosXCallbackPayload & {
  /**
   * Optional title for the item saved in Yoink.
   */
  title?: string

  /**
   * `1` to create a stack, `0` to avoid creating a stack. If omitted, Yoink uses its default.
   */
  createStack?: YoinkIosBinaryFlag
}

/**
 * Paste the current clipboard contents into Yoink for iOS.
 *
 * @param payload Paste from clipboard action payload.
 * @returns Yoink for iOS pastefromclipboard URL.
 * @example
 * pasteFromClipboard({ title: 'My Title', createStack: 0 })
 * // => 'yoinkios://pastefromclipboard?title=My%20Title&createStack=0'
 * @link https://eternalstorms.at/yoink/ios/tips/
 */
export function pasteFromClipboard(payload: PasteFromClipboardPayload = {}) {
  const { title, createStack } = payload

  return yoinkIosActionUrl('pastefromclipboard', {
    ...(title !== undefined ? { title } : {}),
    ...(createStack !== undefined ? { createStack } : {}),
    ...xCallbackParams(payload),
  })
}
