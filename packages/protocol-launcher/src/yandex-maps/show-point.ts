import { yandexMapsAppMapParams, yandexMapsAppMapUrl } from './shared'
import type { YandexMapsShowPoint } from './types'

/**
 * Add a placemark in the Yandex Maps mobile app.
 *
 * @param payload Yandex Maps placemark payload.
 * @returns Yandex Maps mobile app URL.
 *
 * @example
 * showPoint({ pt: '30.335429,59.944869', z: 18, l: 'map' })
 * // => 'yandexmaps://maps.yandex.com/?pt=30.335429%2C59.944869&z=18&l=map'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-ios-app#showpoint
 */
export function showPoint(payload: YandexMapsShowPoint) {
  const { pt, ll, z, l } = payload

  return yandexMapsAppMapUrl({
    pt,
    ll,
    z,
    l: Array.isArray(l) ? l.join(',') : l,
  })
}
