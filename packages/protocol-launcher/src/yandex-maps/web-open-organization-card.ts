import { yandexMapsWebOrganizationUrl } from './shared'
import type { YandexMapsOpenOrganizationCard } from './types'

/**
 * Open an organization card in the web version of Yandex Maps.
 *
 * @param payload Yandex Maps organization payload.
 * @returns Yandex Maps web URL.
 *
 * @example
 * webOpenOrganizationCard({ oid: 1184371713 })
 * // => 'https://yandex.ru/maps/org/1184371713'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-web#org
 */
export function webOpenOrganizationCard(payload: YandexMapsOpenOrganizationCard) {
  const { oid } = payload

  return yandexMapsWebOrganizationUrl(oid)
}
