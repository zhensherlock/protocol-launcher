import { xCallbackParams, type YoinkIosXCallbackPayload, yoinkIosActionUrl } from './shared'

/**
 * Add string action payload definition.
 */
export type AddStringPayload = YoinkIosXCallbackPayload & {
  /**
   * The string to save in Yoink.
   */
  string: string

  /**
   * Optional title for the string item.
   */
  title?: string
}

/**
 * Save the specified string in Yoink for iOS.
 *
 * @param payload Add string action payload.
 * @returns Yoink for iOS addstring URL.
 * @example
 * addString({ string: 'Yoink is available on\u0002iOS and macOS', title: 'Yoink Availability' })
 * // => 'yoinkios://addstring?string=Yoink%20is%20available%20on%02iOS%20and%20macOS&title=Yoink%20Availability'
 * @link https://eternalstorms.at/yoink/ios/tips/
 */
export function addString(payload: AddStringPayload) {
  const { string: value, title } = payload

  return yoinkIosActionUrl('addstring', {
    string: value,
    ...(title !== undefined ? { title } : {}),
    ...xCallbackParams(payload),
  })
}
