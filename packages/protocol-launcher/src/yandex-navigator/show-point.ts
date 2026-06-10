import { accessParams, yandexNavigatorUrl } from './shared'
import type { YandexNavigatorShowPoint } from './types'

/**
 * Show a point on the map in Yandex Navigator.
 *
 * @param payload Yandex Navigator point payload.
 * @returns Yandex Navigator show-point URL.
 *
 * @example
 * showPoint({ lat: 55.77, lon: 37.44, zoom: 12, 'no-balloon': 0, desc: 'кафе с wi-fi' })
 * // => 'yandexnavi://show_point_on_map?lat=55.77&lon=37.44&zoom=12&no-balloon=0&desc=%D0%BA%D0%B0%D1%84%D0%B5%20%D1%81%20wi-fi'
 * @link https://yandex.ru/dev/navigator/doc/ru/concepts/navigator-url-params
 */
export function showPoint(payload: YandexNavigatorShowPoint) {
  const { lat, lon, zoom, desc } = payload

  return yandexNavigatorUrl('show_point_on_map', {
    lat,
    lon,
    zoom,
    'no-balloon': payload['no-balloon'],
    desc,
    ...accessParams(payload),
  })
}
