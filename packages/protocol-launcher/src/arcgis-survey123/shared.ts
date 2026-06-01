import { qs } from '@protocol-launcher/shared'

export const SURVEY123_FIELD_APP_SCHEME = 'arcgis-survey123://'
export const SURVEY123_FIELD_APP_LINK = 'https://survey123.arcgis.app'
export const SURVEY123_WEB_APP_BASE = 'https://survey123.arcgis.com/share'
export const SURVEY123_CONNECT_SCHEME = 'arcgis-survey123connect://'

export type Survey123ParameterValue = string

export type Survey123FieldAction = 'collect' | 'edit' | 'view' | 'copy'

export type Survey123Folder = 'inbox' | 'drafts' | 'outbox' | 'sent' | '*'

export type Survey123CallbackStatus = 'cancel' | 'draft' | 'submit' | 'close'

export type Survey123WebSignIn = 'show' | 'require'

export type Survey123WebOpenTarget = 'web' | 'native' | 'menu'

export type Survey123WebHide =
  | 'navbar'
  | 'header'
  | 'description'
  | 'footer'
  | 'submit'
  | 'theme'
  | 'pageNavigation'
  | 'modeIcon'
  | 'leaveDialog'
  | `field:${string}`

export type Survey123WebMode = 'edit' | 'view' | 'copy'

export type Survey123WebVersion = 'latest'

export type Survey123FieldValues = Record<string, Survey123ParameterValue>

export type Survey123QueryParameters = Record<string, Survey123ParameterValue>

export type Survey123Callbacks = Partial<Record<Survey123CallbackStatus, string>>

export interface Survey123FieldAppPayload {
  /**
   * The form item ID to open.
   *
   * @example '36ff9e8c13e042a58cfce4ad87f55d19'
   */
  itemID?: string
  /**
   * Portal URL where the survey item is hosted.
   *
   * @example 'https://myorg.arcgis.com'
   */
  portalUrl?: string
  /**
   * Survey question values, serialized as `field:<question name>`.
   *
   * @example { surname: 'Klauser' }
   */
  fields?: Survey123FieldValues
  /**
   * Latitude, longitude, and optional altitude for the default map location.
   *
   * @example '37.8199,-122.4783,20'
   */
  center?: string
  /**
   * Automatically downloads the survey when the device is online. The default is true.
   */
  download?: boolean
  /**
   * Specifies how the survey is opened.
   */
  action?: Survey123FieldAction
  /**
   * Folder to display when the survey opens.
   */
  folder?: Survey123Folder
  /**
   * URL to return to when a form action is completed.
   */
  callback?: string
  /**
   * Status-specific callback URLs, serialized as `callback:<status>`.
   */
  callbacks?: Survey123Callbacks
  /**
   * Filters existing surveys on the device.
   */
  filter?: string
  /**
   * Refreshes the Inbox folder when used with `folder=inbox`.
   */
  update?: boolean
  /**
   * Feature-layer query parameters, serialized as `q:<query parameter>`.
   *
   * @example { where: 'ws_stationnumber=5171' }
   */
  query?: Survey123QueryParameters
}

export interface Survey123WebAppPayload {
  /**
   * The survey item ID. The web app uses this value as the share URL path segment.
   *
   * @example '36ff9e8c13e042a58cfce4ad87f55d19'
   */
  itemID: string
  /**
   * For public surveys, shows the sign-in button or requires users to sign in.
   */
  signIn?: Survey123WebSignIn
  /**
   * Set to false to use the ArcGIS Online sign-in page.
   */
  isOrgSignIn?: boolean
  /**
   * Latitude, longitude, and optional altitude.
   */
  center?: string
  /**
   * Survey question values, serialized as `field:<question name>`.
   */
  fields?: Survey123FieldValues
  /**
   * Portal URL where the survey item is hosted.
   */
  portalUrl?: string
  /**
   * App used to open the survey.
   */
  open?: Survey123WebOpenTarget
  /**
   * Elements to hide in the web app. Arrays are serialized as comma-separated values.
   */
  hide?: Survey123WebHide | readonly Survey123WebHide[]
  /**
   * Survey language locale.
   */
  locale?: string
  /**
   * Web app mode. When using this parameter, the official docs require `globalId`.
   */
  mode?: Survey123WebMode
  /**
   * The survey record loaded into the form. This parameter name is case-sensitive.
   */
  globalId?: string
  /**
   * Questions to recalculate when used with `mode=edit`.
   */
  recalculate?: string | readonly string[]
  /**
   * Web app version. The official docs currently list only `latest`.
   */
  version?: Survey123WebVersion
  /**
   * Valid token for a survey.
   */
  token?: string
  /**
   * Reload delay in seconds after submission.
   */
  autoReload?: number
  /**
   * Backward-compatible name for `autoReload`.
   */
  autoRefresh?: number
  /**
   * Obscures URL parameters in the Survey123 web app.
   */
  encodeUrlParams?: boolean
  /**
   * Survey width in pixels, px units, or fraction of screen width.
   */
  width?: string
}

export interface Survey123ConnectPayload {
  /**
   * Portal URL where the survey item is hosted.
   *
   * @example 'https://www.arcgis.com'
   */
  portalUrl: string
  /**
   * The form item ID to open in Survey123 Connect.
   *
   * @example '36ff9e8c13e042a58cfce4ad87f55d19'
   */
  itemID: string
}

function prefixedParams(prefix: string, params: Record<string, unknown> | undefined) {
  if (!params) return {}

  return Object.fromEntries(Object.entries(params).map(([key, value]) => [`${prefix}${key}`, value]))
}

function commaParam(value: string | readonly string[] | undefined) {
  return Array.isArray(value) ? value.join(',') : value
}

export function survey123FieldAppQuery(payload: Survey123FieldAppPayload = {}) {
  const { itemID, portalUrl, fields, center, download, action, folder, callback, callbacks, filter, update, query } =
    payload

  return qs({
    itemID,
    portalUrl,
    ...prefixedParams('field:', fields),
    center,
    download,
    action,
    folder,
    callback,
    ...prefixedParams('callback:', callbacks),
    filter,
    update,
    ...prefixedParams('q:', query),
  })
}

export function survey123WebAppQuery(payload: Omit<Survey123WebAppPayload, 'itemID'>) {
  const {
    signIn,
    isOrgSignIn,
    center,
    fields,
    portalUrl,
    open,
    hide,
    locale,
    mode,
    globalId,
    recalculate,
    version,
    token,
    autoReload,
    autoRefresh,
    encodeUrlParams,
    width,
  } = payload

  return qs({
    signIn,
    isOrgSignIn,
    ...prefixedParams('field:', fields),
    center,
    portalUrl,
    open,
    hide: commaParam(hide),
    locale,
    mode,
    globalId,
    recalculate: commaParam(recalculate),
    version,
    token,
    autoReload,
    autoRefresh,
    encodeUrlParams,
    width,
  })
}
