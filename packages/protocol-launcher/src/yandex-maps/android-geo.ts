import { qs } from '@protocol-launcher/shared'
import type { YandexMapsAndroidGeo } from './types'

/**
 * Open a map with Android's `geo:` scheme supported by Yandex Maps.
 *
 * @param payload Yandex Maps Android geo payload.
 * @returns Android geo URL.
 *
 * @example
 * androidGeo({ coordinates: '47.6,-122.3', z: 11 })
 * // => 'geo:47.6,-122.3?z=11'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-android-app#additonalscheme
 */
export function androidGeo(payload: YandexMapsAndroidGeo) {
  const { coordinates, z } = payload

  return `geo:${coordinates}${qs({ z })}`
}
