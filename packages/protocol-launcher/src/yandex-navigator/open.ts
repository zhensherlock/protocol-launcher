import { yandexNavigatorUrl } from './shared'

/**
 * Open Yandex Navigator.
 *
 * @returns Yandex Navigator URL scheme.
 *
 * @example
 * open()
 * // => 'yandexnavi://'
 * @link https://yandex.com/dev/yandex-apps-launch/navigator/
 */
export function open() {
  return yandexNavigatorUrl()
}
