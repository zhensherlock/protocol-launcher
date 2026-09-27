import { qs } from '@protocol-launcher/shared'
import { SURVEY123_STUDIO_SCHEME, type Survey123ConnectPayload } from './shared'

/**
 * Launch Survey123 Studio on Windows with a survey and portal.
 *
 * @param payload Survey item ID and portal URL.
 * @returns Survey123 Studio custom scheme URL.
 * @example
 * launchStudio({ portalUrl: 'https://www.arcgis.com', itemID: 'survey-id' })
 * // => 'arcgis-survey123-studio://?portalUrl=https%3A%2F%2Fwww.arcgis.com&itemID=survey-id'
 * @link https://doc.arcgis.com/en/survey123/get-started/integratewithotherapps.htm
 */
export function launchStudio(payload: Survey123ConnectPayload) {
  const { portalUrl, itemID } = payload
  return `${SURVEY123_STUDIO_SCHEME}${qs({ portalUrl, itemID })}`
}
