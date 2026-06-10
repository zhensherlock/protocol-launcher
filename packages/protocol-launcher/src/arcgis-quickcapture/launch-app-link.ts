import { type QuickCaptureMobilePayload, quickCaptureAppLinkUrl } from './shared'

/**
 * ArcGIS QuickCapture app link payload definition.
 */
export type LaunchAppLinkPayload = QuickCaptureMobilePayload

/**
 * Launch ArcGIS QuickCapture with the documented QuickCapture app link.
 *
 * @param payload ArcGIS QuickCapture mobile app payload.
 * @returns ArcGIS QuickCapture app link.
 * @example
 * launchAppLink({
 *   itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
 *   userInputs: { '001': 'Alice' },
 * })
 * // => 'https://quickcapture.arcgis.app/?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&userInput:001=Alice'
 * @link https://doc.arcgis.com/en/quickcapture/help/integratewithotherapps.htm
 */
export function launchAppLink(payload: LaunchAppLinkPayload = {}) {
  return quickCaptureAppLinkUrl(payload)
}
