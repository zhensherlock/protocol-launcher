import { yandexMapsAppMapUrl } from './shared'
import type { YandexMapsRoute } from './types'

/**
 * Plot a route in the Yandex Maps mobile app.
 *
 * @param payload Yandex Maps route payload.
 * @returns Yandex Maps mobile app URL.
 *
 * @example
 * route({ rtext: '59.967870,30.242658~59.898495,30.299559', rtt: 'mt' })
 * // => 'yandexmaps://maps.yandex.com/?rtext=59.967870%2C30.242658~59.898495%2C30.299559&rtt=mt'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-ios-app#buildroute
 */
export function route(payload: YandexMapsRoute) {
  const { rtext, rtt } = payload

  return yandexMapsAppMapUrl({ rtext, rtt })
}
