/**
 * App news payload definition.
 */
type AppNews = {
  /**
   * Application ID to show news for.
   *
   * @example 730
   */
  id: string | number
}

/**
 * Opens up the news page for an app.
 *
 * @param payload App news payload.
 * @returns Steam app news URL.
 * @example
 * appNews({ id: 730 })
 * // => 'steam://appnews/730'
 * @link https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 */
export function appNews(payload: AppNews) {
  const { id } = payload
  return `steam://appnews/${id}`
}
