/**
 * Open URL definition.
 */
type OpenUrl = {
  /**
   * The URL to open.
   */
  url: string
}

/**
 * Open a URL in Microsoft Edge.
 *
 * @param payload Open URL command payload.
 * @returns Microsoft Edge URL with the specified URL.
 * @example
 * openUrl({ url: 'https://www.google.com/' })
 * // => 'microsoft-edge:?url=https://www.google.com/'
 */
export function openUrl(payload: OpenUrl) {
  const { url } = payload
  return `microsoft-edge:?url=${url}`
}
