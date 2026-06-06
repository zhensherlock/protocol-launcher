import { yandexMapsWebUrl } from './shared'
import type { YandexMapsPanorama } from './types'

/**
 * Show a panorama from a specified point in the web version of Yandex Maps.
 *
 * @param payload Yandex Maps panorama payload.
 * @returns Yandex Maps web URL.
 *
 * @example
 * webPanorama({
 *   point: '37.444075,55.776788',
 *   direction: '228.970000,6.060547',
 *   span: '130.000000,71.919192',
 * })
 * // => 'https://yandex.ru/maps/?panorama[point]=37.444075%2C55.776788&panorama[direction]=228.970000%2C6.060547&panorama[span]=130.000000%2C71.919192'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web#streetview
 */
export function webPanorama(payload: YandexMapsPanorama) {
  const { point, direction, span } = payload

  return yandexMapsWebUrl({
    'panorama[point]': point,
    'panorama[direction]': direction,
    'panorama[span]': span,
  })
}
