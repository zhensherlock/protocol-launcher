import {
  QUICKCAPTURE_URL_SCHEME,
  type QuickCaptureFieldValues,
  type QuickCaptureUserInputs,
  quickCaptureUrl,
} from './shared'

export interface PressButtonPayload {
  /**
   * Button GUID from the QuickCapture designer.
   *
   * @example '0c59c9d9-9b51-46b3-bb81-21149e6fddb4'
   */
  buttonID: string
  /**
   * The QuickCapture project item ID.
   *
   * @example 'aabda4a5e36d42c2bcf1c479fe01e5e3'
   */
  itemID?: string
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
   * Button field values, serialized as `field:<field name>`.
   *
   * @example { diameter: '20' }
   */
  fields?: QuickCaptureFieldValues
  /**
   * URL to return to when a button is pressed.
   *
   * @example 'https://survey123.arcgis.app'
   */
  callback?: string
  /**
   * Project user input values, serialized as `userInput:<input id>`.
   *
   * @example { '001': 'Alice' }
   */
  userInputs?: QuickCaptureUserInputs
}

/**
 * Press a documented QuickCapture button GUID with the custom URL scheme.
 *
 * @param payload ArcGIS QuickCapture button press payload.
 * @returns ArcGIS QuickCapture button press URL.
 * @example
 * pressButton({
 *   itemID: 'aabda4a5e36d42c2bcf1c479fe01e5e3',
 *   buttonID: '0c59c9d9-9b51-46b3-bb81-21149e6fddb4',
 *   fields: { diameter: '20' },
 * })
 * // => 'arcgis-quickcapture://?itemID=aabda4a5e36d42c2bcf1c479fe01e5e3&action=press%3A0c59c9d9-9b51-46b3-bb81-21149e6fddb4&field:diameter=20'
 * @link https://doc.arcgis.com/en/quickcapture/help/integratewithotherapps.htm
 */
export function pressButton(payload: PressButtonPayload) {
  const { buttonID, ...params } = payload

  return quickCaptureUrl(QUICKCAPTURE_URL_SCHEME, { ...params, action: `press:${buttonID}` })
}
