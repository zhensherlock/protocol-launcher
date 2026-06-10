import { QUICKCAPTURE_URL_SCHEME, type QuickCaptureUserInputs, quickCaptureUrl } from './shared'

export interface OpenProjectPayload {
  /**
   * The QuickCapture project item ID.
   *
   * @example 'aabda4a5e36d42c2bcf1c479fe01e5e3'
   */
  itemID: string
  /**
   * Portal URL where the QuickCapture project item is hosted.
   *
   * @example 'https://myorg.arcgis.com'
   */
  portalUrl?: string
  /**
   * Specifies to use an external browser for sign in.
   */
  externalBrowserSignIn?: boolean
  /**
   * Latitude, longitude, and optional altitude used to center the map.
   *
   * @example '37.8199,-122.4783,20'
   */
  center?: string
  /**
   * Project user input values, serialized as `userInput:<input id>`.
   *
   * @example { '001': 'Alice' }
   */
  userInputs?: QuickCaptureUserInputs
}

/**
 * Open an ArcGIS QuickCapture project with the documented custom URL scheme.
 *
 * @param payload ArcGIS QuickCapture project payload.
 * @returns ArcGIS QuickCapture project URL.
 * @example
 * openProject({ itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3' })
 * // => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3'
 * @link https://doc.arcgis.com/en/quickcapture/help/integratewithotherapps.htm
 */
export function openProject(payload: OpenProjectPayload) {
  return quickCaptureUrl(QUICKCAPTURE_URL_SCHEME, payload)
}
