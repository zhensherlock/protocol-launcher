import { yandexMapsWebMapParams, yandexMapsWebUrl } from './shared'
import type { YandexMapsWebMap } from './types'

/**
 * Open the web version of Yandex Maps.
 *
 * @param payload Yandex Maps web map payload.
 * @returns Yandex Maps web URL.
 *
 * @example
 * webMap({ ll: '30.310182,59.951059', z: 12, l: 'map' })
 * // => 'https://yandex.ru/maps/?ll=30.310182%2C59.951059&z=12&l=map'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web#openmap
 */
export function webMap(payload: YandexMapsWebMap = {}) {
  return yandexMapsWebUrl(yandexMapsWebMapParams(payload))
}
