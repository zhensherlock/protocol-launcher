import { yandexMapsWebUrl } from './shared'
import type { YandexMapsShowWhatsHere } from './types'

/**
 * Show a "What's here?" card in the web version of Yandex Maps.
 *
 * @param payload Yandex Maps "What's here?" payload.
 * @returns Yandex Maps web URL.
 *
 * @example
 * webShowWhatsHere({ point: '37.444075,55.776788', zoom: 17 })
 * // => 'https://yandex.ru/maps/?whatshere[point]=37.444075%2C55.776788&whatshere[zoom]=17'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web#whatshere
 */
export function webShowWhatsHere(payload: YandexMapsShowWhatsHere) {
  const { point, zoom } = payload

  return yandexMapsWebUrl({
    'whatshere[point]': point,
    'whatshere[zoom]': zoom,
  })
}
