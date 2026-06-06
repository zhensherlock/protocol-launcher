import { yandexMapsWebUrl } from './shared'
import type { YandexMapsWebShowPoints } from './types'

/**
 * Add several placemarks in the web version of Yandex Maps.
 *
 * @param payload Yandex Maps web multi-placemark payload.
 * @returns Yandex Maps web URL.
 *
 * @example
 * webShowPoints({
 *   ll: '30.310182,59.951059',
 *   pt: '30.335429,59.944869~30.34127,59.89173',
 *   z: 12,
 *   l: 'map',
 * })
 * // => 'https://yandex.ru/maps/?ll=30.310182%2C59.951059&pt=30.335429%2C59.944869~30.34127%2C59.89173&z=12&l=map'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web#section_b3b_cst_ngb
 */
export function webShowPoints(payload: YandexMapsWebShowPoints) {
  const { ll, pt, z, l } = payload

  return yandexMapsWebUrl({
    ll,
    pt,
    z,
    l: Array.isArray(l) ? l.join(',') : l,
  })
}
