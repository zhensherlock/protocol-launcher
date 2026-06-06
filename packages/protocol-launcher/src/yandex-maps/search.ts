import { yandexMapsAppMapUrl } from './shared'
import type { YandexMapsSearch } from './types'

/**
 * Find objects in the Yandex Maps mobile app.
 *
 * @param payload Yandex Maps search payload.
 * @returns Yandex Maps mobile app URL.
 *
 * @example
 * search({ ll: '30.310182,59.951059', z: 16, text: 'cafe with wi-fi' })
 * // => 'yandexmaps://maps.yandex.com/?ll=30.310182%2C59.951059&z=16&text=cafe%20with%20wi-fi'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-ios-app#search
 */
export function search(payload: YandexMapsSearch) {
  const { ll, z, spn, text } = payload

  return yandexMapsAppMapUrl({
    ll,
    z,
    spn,
    text,
  })
}
