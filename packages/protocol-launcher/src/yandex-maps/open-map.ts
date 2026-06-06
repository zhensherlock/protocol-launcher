import { yandexMapsAppMapParams, yandexMapsAppMapUrl } from './shared'
import type { YandexMapsOpenMap } from './types'

/**
 * Open a map in the Yandex Maps mobile app.
 *
 * @param payload Yandex Maps open-map payload.
 * @returns Yandex Maps mobile app URL.
 *
 * @example
 * openMap({ ll: '37.619902,55.753716', z: 11, l: 'map' })
 * // => 'yandexmaps://maps.yandex.com/?ll=37.619902%2C55.753716&z=11&l=map'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-ios-app#openmap
 */
export function openMap(payload: YandexMapsOpenMap = {}) {
  return yandexMapsAppMapUrl(yandexMapsAppMapParams(payload))
}
