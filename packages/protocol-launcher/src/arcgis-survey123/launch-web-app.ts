import { SURVEY123_WEB_APP_BASE, type Survey123WebAppPayload, survey123WebAppQuery } from './shared'

/**
 * ArcGIS Survey123 web app payload definition.
 */
export type LaunchWebApp = Survey123WebAppPayload

/**
 * Launch a survey in the ArcGIS Survey123 web app.
 *
 * @param payload ArcGIS Survey123 web app payload.
 * @returns ArcGIS Survey123 web app URL.
 * @example
 * launchWebApp({
 *   itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
 *   fields: { surname: 'Klauser' },
 *   center: '37.8199,-122.4783',
 * })
 * // => 'https://survey123.arcgis.com/share/36ff9e8c13e042a58cfce4ad87f55d19?field:surname=Klauser&center=37.8199%2C-122.4783'
 * @link https://doc.arcgis.com/en/survey123/get-started/integrate-launchwebapp.htm
 */
export function launchWebApp(payload: LaunchWebApp) {
  const { itemID, ...params } = payload

  return `${SURVEY123_WEB_APP_BASE}/${encodeURIComponent(itemID)}${survey123WebAppQuery(params)}`
}
