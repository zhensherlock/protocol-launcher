import { yandexMapsWebUrl } from './shared'
import type { YandexMapsWebSearch } from './types'

/**
 * Find objects in the web version of Yandex Maps.
 *
 * @param payload Yandex Maps web search payload.
 * @returns Yandex Maps web URL.
 *
 * @example
 * webSearch({ ll: '30.310182,59.951059', z: 16, text: 'cafe with wi-fi' })
 * // => 'https://yandex.ru/maps/?ll=30.310182%2C59.951059&z=16&text=cafe%20with%20wi-fi'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web#search
 */
export function webSearch(payload: YandexMapsWebSearch) {
  const { ll, z, spn, text } = payload

  return yandexMapsWebUrl({
    ll,
    z,
    spn,
    text,
  })
}
