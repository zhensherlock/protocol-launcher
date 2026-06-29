import { xCallbackParams, type YoinkIosXCallbackPayload, yoinkIosActionUrl } from './shared'

/**
 * Download URL action payload definition.
 */
export type DownloadUrlPayload = YoinkIosXCallbackPayload & {
  /**
   * The URL to download in Yoink.
   */
  url: string
}

/**
 * Download the specified URL in Yoink for iOS.
 *
 * @param payload Download URL action payload.
 * @returns Yoink for iOS downloadurl URL.
 * @example
 * downloadUrl({ url: 'https://eternalstorms.at/yoink/Yoink.zip' })
 * // => 'yoinkios://downloadurl?url=https%3A%2F%2Feternalstorms.at%2Fyoink%2FYoink.zip'
 * @link https://eternalstorms.at/yoink/ios/tips/
 */
export function downloadUrl(payload: DownloadUrlPayload) {
  const { url } = payload

  return yoinkIosActionUrl('downloadurl', {
    url,
    ...xCallbackParams(payload),
  })
}
