import { accessParams, viaPointParams, yandexNavigatorUrl } from './shared'
import type { YandexNavigatorBuildRoute } from './types'

/**
 * Build a route in Yandex Navigator.
 *
 * @param payload Yandex Navigator route payload.
 * @returns Yandex Navigator build-route URL.
 *
 * @example
 * buildRoute({ lat_from: '55.74', lon_from: '37.60', lat_to: '55.76', lon_to: '37.64' })
 * // => 'yandexnavi://build_route_on_map?lat_from=55.74&lon_from=37.60&lat_to=55.76&lon_to=37.64'
 * @link https://yandex.ru/dev/navigator/doc/ru/concepts/navigator-url-params
 */
export function buildRoute(payload: YandexNavigatorBuildRoute) {
  const { lat_from, lon_from, lat_to, lon_to, via } = payload

  return yandexNavigatorUrl('build_route_on_map', {
    lat_from,
    lon_from,
    lat_to,
    lon_to,
    ...viaPointParams(via),
    ...accessParams(payload),
  })
}
