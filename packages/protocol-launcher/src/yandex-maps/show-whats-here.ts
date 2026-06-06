import { yandexMapsAppRootUrl } from './shared'
import type { YandexMapsShowWhatsHere } from './types'

/**
 * Show a "What's here?" card in the Yandex Maps mobile app.
 *
 * @param payload Yandex Maps "What's here?" payload.
 * @returns Yandex Maps mobile app URL.
 *
 * @example
 * showWhatsHere({ point: '37.444075,55.776788', zoom: 17 })
 * // => 'yandexmaps://?whatshere[point]=37.444075%2C55.776788&whatshere[zoom]=17'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-ios-app#whatshere
 */
export function showWhatsHere(payload: YandexMapsShowWhatsHere) {
  const { point, zoom } = payload

  return yandexMapsAppRootUrl({
    'whatshere[point]': point,
    'whatshere[zoom]': zoom,
  })
}
