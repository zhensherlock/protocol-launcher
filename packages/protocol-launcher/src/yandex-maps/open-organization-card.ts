import { yandexMapsAppMapUrl } from './shared'
import type { YandexMapsOpenOrganizationCard } from './types'

/**
 * Open an organization card in the Yandex Maps mobile app.
 *
 * @param payload Yandex Maps organization payload.
 * @returns Yandex Maps mobile app URL.
 *
 * @example
 * openOrganizationCard({ oid: 1184371713 })
 * // => 'yandexmaps://maps.yandex.com/?oid=1184371713'
 * @link https://yandex.com/dev/yandex-apps-launch-maps/doc/en/concepts/yandexmaps-ios-app#org
 */
export function openOrganizationCard(payload: YandexMapsOpenOrganizationCard) {
  const { oid } = payload

  return yandexMapsAppMapUrl({ oid })
}
