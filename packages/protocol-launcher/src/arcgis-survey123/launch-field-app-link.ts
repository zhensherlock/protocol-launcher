import { SURVEY123_FIELD_APP_LINK, type Survey123FieldAppPayload, survey123FieldAppQuery } from './shared'

/**
 * ArcGIS Survey123 field app link payload definition.
 */
export type LaunchFieldAppLink = Survey123FieldAppPayload

/**
 * Launch the ArcGIS Survey123 field app with the documented Survey123 app link.
 *
 * @param payload ArcGIS Survey123 field app link payload.
 * @returns ArcGIS Survey123 field app link URL.
 * @example
 * launchFieldAppLink({
 *   itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
 *   fields: { surname: 'Klauser' },
 * })
 * // => 'https://survey123.arcgis.app?itemID=36ff9e8c13e042a58cfce4ad87f55d19&field:surname=Klauser'
 * @link https://doc.arcgis.com/en/survey123/get-started/integrate-launchfieldapp.htm
 */
export function launchFieldAppLink(payload: LaunchFieldAppLink = {}) {
  return `${SURVEY123_FIELD_APP_LINK}${survey123FieldAppQuery(payload)}`
}
