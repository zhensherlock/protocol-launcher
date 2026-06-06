import { yandexMapsWebUrl } from './shared'
import type { YandexMapsWebShowPoint } from './types'

/**
 * Add a placemark in the web version of Yandex Maps.
 *
 * @param payload Yandex Maps web placemark payload.
 * @returns Yandex Maps web URL.
 *
 * @example
 * webShowPoint({ pt: '30.335429,59.944869', z: 18, l: 'map' })
 * // => 'https://yandex.ru/maps/?pt=30.335429%2C59.944869&z=18&l=map'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web#showpoint
 */
export function webShowPoint(payload: YandexMapsWebShowPoint) {
  const { pt, ll, z, l } = payload

  return yandexMapsWebUrl({
    pt,
    ll,
    z,
    l: Array.isArray(l) ? l.join(',') : l,
  })
}
