import { yandexMapsAppRootUrl } from './shared'
import type { YandexMapsPanorama } from './types'

/**
 * Show a panorama from a specified point in the Yandex Maps mobile app.
 *
 * @param payload Yandex Maps panorama payload.
 * @returns Yandex Maps mobile app URL.
 *
 * @example
 * panorama({
 *   point: '37.444075,55.776788',
 *   direction: '228.970000,6.060547',
 *   span: '130.000000,71.919192',
 * })
 * // => 'yandexmaps://?panorama[point]=37.444075%2C55.776788&panorama[direction]=228.970000%2C6.060547&panorama[span]=130.000000%2C71.919192'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-ios-app#streetview
 */
export function panorama(payload: YandexMapsPanorama) {
  const { point, direction, span } = payload

  return yandexMapsAppRootUrl({
    'panorama[point]': point,
    'panorama[direction]': direction,
    'panorama[span]': span,
  })
}
