import { qs } from '@protocol-launcher/shared'
import { SURVEY123_CONNECT_SCHEME, type Survey123ConnectPayload } from './shared'

/**
 * ArcGIS Survey123 Connect payload definition.
 */
export type LaunchConnect = Survey123ConnectPayload

/**
 * Launch ArcGIS Survey123 Connect with the documented custom URL scheme.
 *
 * @param payload ArcGIS Survey123 Connect payload.
 * @returns ArcGIS Survey123 Connect custom scheme URL.
 * @example
 * launchConnect({
 *   portalUrl: 'https://www.arcgis.com',
 *   itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
 * })
 * // => 'arcgis-survey123connect://?portalUrl=https%3A%2F%2Fwww.arcgis.com&itemID=36ff9e8c13e042a58cfce4ad87f55d19'
 * @link https://doc.arcgis.com/en/survey123/get-started/integrate-launchconnect.htm
 */
export function launchConnect(payload: LaunchConnect) {
  const { portalUrl, itemID } = payload

  return `${SURVEY123_CONNECT_SCHEME}${qs({ portalUrl, itemID })}`
}
