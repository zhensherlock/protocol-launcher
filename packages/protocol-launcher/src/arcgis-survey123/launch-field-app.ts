import { SURVEY123_FIELD_APP_SCHEME, type Survey123FieldAppPayload, survey123FieldAppQuery } from './shared'

/**
 * ArcGIS Survey123 field app payload definition.
 */
export type LaunchFieldApp = Survey123FieldAppPayload

/**
 * Launch the ArcGIS Survey123 field app with the documented custom URL scheme.
 *
 * @param payload ArcGIS Survey123 field app payload.
 * @returns ArcGIS Survey123 field app custom scheme URL.
 * @example
 * launchFieldApp({
 *   itemID: '36ff9e8c13e042a58cfce4ad87f55d19',
 *   fields: { surname: 'Klauser' },
 *   center: '37.8199,-122.4783,20',
 * })
 * // => 'arcgis-survey123://?itemID=36ff9e8c13e042a58cfce4ad87f55d19&field:surname=Klauser&center=37.8199%2C-122.4783%2C20'
 * @link https://doc.arcgis.com/en/survey123/get-started/integrate-launchfieldapp.htm
 */
export function launchFieldApp(payload: LaunchFieldApp = {}) {
  return `${SURVEY123_FIELD_APP_SCHEME}${survey123FieldAppQuery(payload)}`
}
