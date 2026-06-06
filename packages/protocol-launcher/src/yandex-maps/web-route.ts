import { yandexMapsWebUrl } from './shared'
import type { YandexMapsWebRoute } from './types'

/**
 * Plot a route in the web version of Yandex Maps.
 *
 * @param payload Yandex Maps web route payload.
 * @returns Yandex Maps web URL.
 *
 * @example
 * webRoute({ rtext: '59.967870,30.242658~59.898495,30.299559', rtt: 'mt' })
 * // => 'https://yandex.ru/maps/?rtext=59.967870%2C30.242658~59.898495%2C30.299559&rtt=mt'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web#buildroute
 */
export function webRoute(payload: YandexMapsWebRoute) {
  const { rtext, rtt } = payload

  return yandexMapsWebUrl({ rtext, rtt })
}
