import { QUICKCAPTURE_URL_SCHEME, type QuickCaptureMobilePayload, quickCaptureUrl } from './shared'

/**
 * ArcGIS QuickCapture custom URL scheme payload definition.
 */
export type LaunchUrlSchemePayload = QuickCaptureMobilePayload

/**
 * Launch ArcGIS QuickCapture with the documented custom URL scheme.
 *
 * @param payload ArcGIS QuickCapture mobile app payload.
 * @returns ArcGIS QuickCapture custom URL scheme.
 * @example
 * launchUrlScheme({
 *   itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
 *   userInputs: { '001': 'Alice' },
 * })
 * // => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&userInput:001=Alice'
 * @link https://doc.arcgis.com/en/quickcapture/help/integratewithotherapps.htm
 */
export function launchUrlScheme(payload: LaunchUrlSchemePayload = {}) {
  return quickCaptureUrl(QUICKCAPTURE_URL_SCHEME, payload)
}
