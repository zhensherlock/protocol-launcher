import { QUICKCAPTURE_URL_SCHEME, quickCaptureUrl } from './shared'

export interface OpenPortalPayload {
  /**
   * Portal URL where the QuickCapture project item is hosted.
   *
   * @example 'https://myorg.arcgis.com'
   */
  portalUrl: string
  /**
   * Specifies to use an external browser for sign in.
   */
  externalBrowserSignIn?: boolean
}

/**
 * Open ArcGIS QuickCapture for a specific portal with the documented custom URL scheme.
 *
 * @param payload ArcGIS QuickCapture portal payload.
 * @returns ArcGIS QuickCapture portal URL.
 * @example
 * openPortal({
 *   portalUrl: 'https://myorg.arcgis.com',
 *   externalBrowserSignIn: true,
 * })
 * // => 'arcgis-quickcapture://?portalUrl=https%3A%2F%2Fmyorg.arcgis.com&externalBrowserSignIn=true'
 * @link https://doc.arcgis.com/en/quickcapture/help/integratewithotherapps.htm
 */
export function openPortal(payload: OpenPortalPayload) {
  return quickCaptureUrl(QUICKCAPTURE_URL_SCHEME, payload)
}
