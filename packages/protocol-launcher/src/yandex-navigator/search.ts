import { accessParams, yandexNavigatorUrl } from './shared'
import type { YandexNavigatorSearch } from './types'

/**
 * Search for objects on the map in Yandex Navigator.
 *
 * @param payload Yandex Navigator search payload.
 * @returns Yandex Navigator search URL.
 *
 * @example
 * search({ text: 'заправка' })
 * // => 'yandexnavi://map_search?text=%D0%B7%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%B0'
 * @link https://yandex.ru/dev/navigator/doc/ru/concepts/navigator-url-params
 */
export function search(payload: YandexNavigatorSearch) {
  const { text } = payload

  return yandexNavigatorUrl('map_search', {
    text,
    ...accessParams(payload),
  })
}
