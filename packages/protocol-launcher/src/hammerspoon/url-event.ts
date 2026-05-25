import { hammerspoonUrl, type UrlEventParams } from './shared'

/**
 * Hammerspoon URL event payload definition.
 */
type UrlEvent = {
  /**
   * The event name bound with hs.urlevent.bind.
   */
  eventName: string

  /**
   * Optional URL query parameters passed to the bound callback as key/value string pairs.
   */
  params?: UrlEventParams
}

/**
 * Generate a hammerspoon:// URL event.
 *
 * The event name is the URL host. The generated URL has no path, only an optional query string.
 *
 * @param payload Hammerspoon URL event payload.
 * @returns Hammerspoon URL event.
 * @example
 * urlEvent({ eventName: 'doThingA', params: { value: '1' } })
 * // => 'hammerspoon://doThingA?value=1'
 * @example
 * urlEvent({ eventName: 'someEventToHandle', params: { someParam: 'things', otherParam: 'stuff' } })
 * // => 'hammerspoon://someEventToHandle?someParam=things&otherParam=stuff'
 * @link https://www.hammerspoon.org/docs/hs.urlevent.html
 */
export function urlEvent(payload: UrlEvent) {
  const { eventName, params } = payload

  return hammerspoonUrl(eventName, params)
}
