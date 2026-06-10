import { QUICKCAPTURE_URL_SCHEME, type QuickCaptureUserInputs, quickCaptureUrl } from './shared'

export interface PopulateUserInputPayload {
  /**
   * The QuickCapture project item ID.
   *
   * @example 'aabda4a5e36d42c2bcf1c479fe01e5e3'
   */
  itemID: string
  /**
   * Project user input values, serialized as `userInput:<input id>`.
   *
   * @example { '001': 'Alice' }
   */
  userInputs: QuickCaptureUserInputs
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
}

/**
 * Open a QuickCapture project and populate documented project user input values.
 *
 * @param payload ArcGIS QuickCapture project user input payload.
 * @returns ArcGIS QuickCapture project user input URL.
 * @example
 * populateUserInput({
 *   itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
 *   userInputs: { '001': 'Alice', '002': 'Zone5' },
 * })
 * // => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&userInput:001=Alice&userInput:002=Zone5'
 * @link https://doc.arcgis.com/en/quickcapture/help/integratewithotherapps.htm
 */
export function populateUserInput(payload: PopulateUserInputPayload) {
  return quickCaptureUrl(QUICKCAPTURE_URL_SCHEME, payload)
}
