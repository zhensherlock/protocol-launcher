import { qs } from '@protocol-launcher/shared'

export const POWER_APPS_MOBILE_SCHEME = 'ms-apps'
export const POWER_APPS_WRAPPED_MOBILE_SCHEME = 'ms-mobile-apps'
export const POWER_APPS_PROVIDER_PATH = 'providers/Microsoft.PowerApps/apps'

export type PowerAppsViewType = 1039 | 4230

export interface PowerAppsModelDrivenAppPayload {
  /**
   * Organization URL without the `https://` prefix.
   *
   * @example 'contoso.onmicrosoft.com'
   */
  orgUrl: string
  /**
   * App module ID.
   *
   * @example 'e6429eba-2204-40e8-b9dd-fc74791ff2c2'
   */
  appId: string
  /**
   * Microsoft Entra tenant ID.
   *
   * @example 'aaaabbbb-0000-cccc-1111-dddd2222eeee'
   */
  tenantId: string
  /**
   * Power Apps environment ID.
   *
   * @example 'g67tfyufhkjfg'
   */
  environmentId: string
  /**
   * Model-driven app unique name.
   *
   * @example 'cr12_e567'
   */
  appLogicalName: string
  /**
   * Set to true to restart the model-driven app so parameters are passed when the app is already open.
   */
  restartApp?: true
  /**
   * Autopopulate the email address and trigger sign-in when the user is not already signed in.
   */
  autoLoginUpn?: string
  /**
   * Set to true to trigger offline data sync so the latest data is available.
   */
  forceOfflineDataSync?: true
}

export interface PowerAppsCanvasAppPayload {
  /**
   * Canvas app ID.
   *
   * @example '11111111-2222-3333-4444-555555555555'
   */
  appId: string
  /**
   * Microsoft Entra tenant ID.
   *
   * @example 'aaaabbbb-0000-cccc-1111-dddd2222eeee'
   */
  tenantId: string
  /**
   * Power Apps environment ID.
   *
   * @example 'g67tfyufhkjfg'
   */
  environmentId: string
  /**
   * Set to true to restart the canvas app so parameters are passed when the app is already open.
   */
  restartApp?: true
  /**
   * Autopopulate the email address and trigger sign-in when the user is not already signed in.
   */
  autoLoginUpn?: string
}

export interface PowerAppsWrappedAppPayload {
  /**
   * Wrapped app ID.
   *
   * @example '11111111-2222-3333-4444-555555555555'
   */
  appId: string
  /**
   * Microsoft Entra tenant ID.
   *
   * @example 'aaaabbbb-0000-cccc-1111-dddd2222eeee'
   */
  tenantId: string
  /**
   * Set to true to restart the wrapped app so parameters are passed when the app is already open.
   */
  restartApp?: true
  /**
   * Autopopulate the email address and trigger sign-in when the user is not already signed in.
   */
  autoLoginUpn?: string
}

export interface PowerAppsEntityRecordPayload extends PowerAppsModelDrivenAppPayload {
  /**
   * Entity logical name.
   *
   * @example 'account'
   */
  etn: string
  /**
   * Record ID. Microsoft documents that a blank value opens the create form for the table.
   *
   * @example '00000000-1111-2222-3333-444444444444'
   */
  id: string
  /**
   * Form ID or extra query string values.
   */
  extraqs?: string
}

export interface PowerAppsEntityListPayload extends PowerAppsModelDrivenAppPayload {
  /**
   * Entity logical name.
   *
   * @example 'account'
   */
  etn: string
  /**
   * View ID.
   */
  viewid?: string
  /**
   * View type. Microsoft documents 1039 for system views and 4230 for personal views.
   */
  viewType?: PowerAppsViewType
}

type PowerAppsModelDrivenPageParams = Record<string, unknown>

export function powerAppsModelDrivenUrl(
  payload: PowerAppsModelDrivenAppPayload,
  pageParams: PowerAppsModelDrivenPageParams = {},
) {
  const { orgUrl, appId, tenantId, environmentId, appLogicalName, restartApp, forceOfflineDataSync, autoLoginUpn } =
    payload

  return `${POWER_APPS_MOBILE_SCHEME}://${orgUrl}_${encodeURIComponent(appId)}${qs({
    tenantId,
    environmentId,
    appLogicalName,
    appType: 'AppModule',
    openApp: true,
    restartApp: trueParam(restartApp),
    forceOfflineDataSync: trueParam(forceOfflineDataSync),
    autoLoginUpn,
    ...pageParams,
  })}`
}

export function powerAppsProviderAppUrl(
  scheme: typeof POWER_APPS_MOBILE_SCHEME | typeof POWER_APPS_WRAPPED_MOBILE_SCHEME,
  appId: string,
  params: Record<string, unknown>,
) {
  return `${scheme}:///${POWER_APPS_PROVIDER_PATH}/${encodeURIComponent(appId)}${qs(params)}`
}

export function trueParam(value: unknown) {
  return value === true ? true : undefined
}
