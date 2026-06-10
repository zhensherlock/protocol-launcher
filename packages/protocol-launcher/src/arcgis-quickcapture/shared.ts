import { qs } from '@protocol-launcher/shared'

export const QUICKCAPTURE_URL_SCHEME = 'arcgis-quickcapture://'
export const QUICKCAPTURE_APP_LINK = 'https://quickcapture.arcgis.app'

export type QuickCaptureParameterValue = string

export type QuickCaptureAction = `press:${string}`

export type QuickCaptureFieldValues = Record<string, QuickCaptureParameterValue>

export type QuickCaptureUserInputs = Record<string, QuickCaptureParameterValue>

export interface QuickCaptureMobilePayload {
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
   * Documented mobile app action string.
   *
   * @example 'press:0c59c9d9-9b51-46b3-bb81-21149e6fddb4'
   */
  action?: QuickCaptureAction
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

function prefixedParams(prefix: string, params: Record<string, unknown> | undefined) {
  if (!params) return {}

  return Object.fromEntries(Object.entries(params).map(([key, value]) => [`${prefix}${key}`, value]))
}

export function quickCaptureQuery(payload: QuickCaptureMobilePayload = {}) {
  const { itemID, portalUrl, externalBrowserSignIn, center, action, fields, callback, userInputs } = payload

  return qs({
    itemID,
    portalUrl,
    externalBrowserSignIn,
    center,
    action,
    ...prefixedParams('field:', fields),
    callback,
    ...prefixedParams('userInput:', userInputs),
  })
}

export function quickCaptureUrl(baseUrl: string, payload: QuickCaptureMobilePayload = {}) {
  return `${baseUrl}${quickCaptureQuery(payload)}`
}

export function quickCaptureAppLinkUrl(payload: QuickCaptureMobilePayload = {}) {
  const query = quickCaptureQuery(payload)

  return `${QUICKCAPTURE_APP_LINK}${query ? `/${query}` : ''}`
}
